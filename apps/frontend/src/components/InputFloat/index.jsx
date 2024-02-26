import { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import MyEyeIcon from '../../utils/svgs/MyEyeIcon';
import { wrapInDebounce } from '../../utils/wrapInDebounce';

const defaultDontChangeRule = (_e, newValue) => ({ change: true, newValue });

const CLASSES = {
  commonInputAndInputWrapper: 'relative h-10 w-full rounded-md bg-transparent',
  input: 'px-3 disabled:pointer-events-none',
  inputWrapper:
    '[&:has(input:disabled)]:border-slate-400 border-1.5 group relative flex items-center justify-between border-gray-800 focus-within:border-blue-700 hover:border-blue-300 focus-within:hover:border-blue-700 dark:border-black dark:bg-slate-600 dark:focus-within:border-sky-100',
  label:
    'translate-y-half pointer-events-none absolute z-10 my-0 h-4 flex w-auto items-center justify-center rounded-full bg-white px-1 py-0 transition-all hover:cursor-text ltr:left-3 rtl:right-3 dark:bg-slate-600',
  topLevelWrapper: 'relative max-w-full rounded-md bg-transparent',
};

/** @param { import('../types').InputFloatProps } props */
export default function InputFloat({
  type = 'text',
  value,
  setValue,
  dontChangeRule = defaultDontChangeRule,
  labelContent,
  wrapperClassName,
  inputClass,
  inputStyle,
  autoFocus,
  onInputFocus,
  onInputBlur,
  onInputChange,
  onInputClick,
  onInputKeyDown,
  isDisabled,
  isError,
  name,
  iconRenderer,
  errorName = name,
  setIsTouched,
  validateFunc,
  isRTL,
  testId = '',
  textSecurity = false,
  debounceTime,
}) {
  // all useStates:
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [innerValue, setInnerValue] = useState(() => value);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => setInnerValue(value), [value]);

  const isFloating = isFocused || innerValue !== '';

  // all useCallbacks:
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setOuterValue = useCallback(
    Number.isInteger(debounceTime) ? wrapInDebounce(setValue, debounceTime) : setValue,
    [debounceTime, setValue],
  );

  const onChange = useCallback(
    (e) => {
      const { change, newValue } = dontChangeRule(e, e.target.value);
      if (change) {
        setInnerValue(newValue);
        setOuterValue(newValue);
        onInputChange?.({ newValue });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setValue, dontChangeRule, onInputChange],
  );

  // all on functions:
  const onFocus = () => {
    setIsFocused(true);
    onInputFocus?.();
  };
  const onBlur = (e) => {
    setIsFocused(false);
    setIsTouched?.((prevState) => ({ ...prevState, [name]: true }));
    onInputBlur?.(e, { setIsFocused, setInnerValue }); // A SelectFloat will validate in here
    validateFunc?.(innerValue); // While used as a normal InputFloat, it will validate here.
  };
  const onClick = () => {
    setIsFocused(true);
    onInputClick?.();
  };
  const onKeyDown = (e) => onInputKeyDown?.(e, { setIsFocused });
  const onMouseEnter = useCallback(() => setIsHovered(true), []);
  const onMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div className={clsx(CLASSES.topLevelWrapper, wrapperClassName)}>
      <div
        className={clsx(
          CLASSES.commonInputAndInputWrapper,
          CLASSES.inputWrapper,
          isError && !isFocused && 'border-red-500 text-red-500 dark:border-red-500',
          isDisabled ? 'bg-gray-100' : 'bg-white',
        )}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ direction: type === 'password' ? 'ltr' : undefined }}
      >
        {labelContent && (
          <label
            className={clsx(
              CLASSES.label,
              isFloating ? 'scale-80 top-0 ltr:-translate-x-10 rtl:translate-x-10' : 'translate-y-half top-1/2',
              isDisabled && 'text-slate-400',
              isFocused
                ? 'text-blue-700 dark:text-sky-400'
                : isError
                  ? 'text-red-600'
                  : isHovered && 'text-blue-300 transition-none',
            )}
            style={{ direction: isRTL === undefined ? undefined : isRTL ? 'rtl' : 'ltr' }}
          >
            {labelContent}
          </label>
        )}

        {iconRenderer?.()}

        <input
          type={isPasswordVisible ? 'text' : type}
          value={innerValue}
          onChange={onChange}
          className={clsx(
            CLASSES.commonInputAndInputWrapper,
            CLASSES.input,
            type === 'password' && 'text-left',
            textSecurity && !isPasswordVisible && 'text-security-disc',
            inputClass,
          )}
          style={inputStyle}
          onFocus={onFocus}
          onBlur={onBlur}
          onClick={onClick}
          onKeyDown={onKeyDown}
          autoFocus={autoFocus}
          autoComplete='off'
          name={name}
          disabled={isDisabled}
          data-test-id={`${testId}Input`}
        />
        {(type === 'password' || textSecurity) && (
          <button type='button' className='mr-3'>
            <MyEyeIcon
              size={20}
              aria-label='peek'
              data-test-id={`${testId}InputPeek`}
              onMouseDown={() => setIsPasswordVisible(true)}
              onMouseUp={() => setIsPasswordVisible(false)}
              isPasswordHidden={!isPasswordVisible}
            />
          </button>
        )}
      </div>
      {isError && !isFocused && (
        <div className='flex items-center justify-end px-1 py-0 text-lg text-red-500'>
          {`errors.${errorName}.${isError}`}
        </div>
      )}
    </div>
  );
}
