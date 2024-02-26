import React, { useCallback, useState } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const defaultDontChangeRule = (_e, newValue) => ({ change: true, newValue });

/**
 * @param {{
 *    value: string,
 *    setValue: ( value: string ) => void,
 *    dontChangeRule?: (e: any, value: any) => ({change: boolean, newValue: any}),
 *    labelContent?: string,
 *    placeholder?: string,
 *    wrapperClassName?: string,
 *    internalWrapperClassName?: string,
 *    textareaClass?: string,
 *    autoFocus?: boolean,
 *    rows?: number,
 *    renderer?: (props?: any) => React.ReactNode,
 *    onInputChange?: (props: {newValue: string}) => any,
 *    onInputKeyDown?: ( e: any, props: { setIsFocused: (value: boolean) => void } ) => any,
 *    moveToNextOnEnter?: boolean,
 *    isError?: boolean,
 *    name?: string,
 *    errorName?: string,
 *    setIsTouched?: (value: any) => void,
 *    validateFunc?: (value: any) => void,
 *    langCode?: string,
 *    isRTL?: boolean,
 * }} props
 */
export default function TextAreaFloat({
  value,
  setValue,
  dontChangeRule = defaultDontChangeRule,
  labelContent,
  placeholder,
  wrapperClassName,
  internalWrapperClassName,
  textareaClass,
  autoFocus,
  onInputChange,
  onInputKeyDown,
  rows = undefined,
  renderer,
  isError,
  name,
  setIsTouched,
  validateFunc,
  isRTL,
}) {
  // all useStates:
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const isFloating = isFocused || value !== '';

  const onChange = useCallback(
    (e) => {
      const { change, newValue } = dontChangeRule(e, e.target.value);
      if (change) {
        setValue(newValue);
        onInputChange?.({ newValue });
      }
    },
    [setValue, dontChangeRule, onInputChange],
  );

  return (
    <div className={twMerge('relative h-full w-full rounded-md bg-transparent', wrapperClassName)}>
      <div
        className={clsx(
          'border-1.5 relative h-full rounded-md border-gray-800 bg-white dark:border-black dark:bg-slate-600',
          isFocused
            ? 'border-blue-700 dark:border-sky-100'
            : isError
              ? 'border-red-500 dark:border-red-500'
              : isHovered && 'border-blue-300',
          internalWrapperClassName,
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {labelContent && (
          <label
            className={clsx(
              'translate-y-half absolute z-20 mx-1 my-0 flex h-1.5 w-auto items-center justify-center rounded-full bg-inherit px-1 py-0 text-xl transition-all hover:cursor-text ltr:left-3 rtl:right-3',
              isFloating ? 'scale-80 -top-0.5 rtl:translate-x-10' : 'top-5',
              isFocused
                ? 'text-blue-700 dark:text-sky-400'
                : isError
                  ? 'text-red-600'
                  : isHovered && 'text-blue-300 transition-none',
              !isFloating && 'z-0',
            )}
            style={{ direction: isRTL == null ? undefined : isRTL ? 'rtl' : 'ltr' }}
          >
            {labelContent}
          </label>
        )}

        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className={clsx(
            'relative w-full rounded-md bg-transparent p-3 text-xl',
            !isFocused && isError && 'text-red-500',
            textareaClass,
          )}
          style={{ resize: 'none' }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            setIsTouched?.((prevState) => ({ ...prevState, [name]: true }));
            validateFunc?.(value);
          }}
          onClick={() => setIsFocused(true)}
          onKeyDown={(e) => onInputKeyDown?.(e, { setIsFocused })}
          autoFocus={autoFocus}
          autoComplete='off'
          name={name}
        />

        {renderer?.({ isFocused, isHovered })}
      </div>
    </div>
  );
}
