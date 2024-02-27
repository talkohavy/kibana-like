import clsx from 'clsx';

const CLASSES = {
  common:
    'flex cursor-pointer items-center justify-center rounded-md px-3 py-1 text-white hover:rounded-lg disabled:pointer-events-none disabled:cursor-default disabled:bg-gray-200 active:rounded-xl',
  sizes: {
    xs: 'h-8',
    sm: 'h-10',
    md: 'h-12',
    lg: 'h-14',
  },
  colors: {
    red: 'bg-red-400 hover:bg-red-500 active:bg-red-400',
    blue: 'bg-blueish-400 hover:bg-blueish-300 active:bg-blueish-500',
    green: 'bg-green-400 hover:bg-green-500 active:bg-green-400',
  },
};

/**
 * @param {{
 *    size?: 'xs' | 'sm' | 'md' | 'lg',
 *    color?: 'red' | 'blue' | 'green',
 *    onClick?: () => void,
 *    onFocus?: () => void,
 *    isDisabled?: boolean,
 *    onMouseOver?: () => void,
 *    className?: string,
 *    style?: any,
 *    label: import('react').ReactNode,
 *    testId?: string,
 * }} props
 */
export default function Button({
  size = 'md',
  color,
  onClick,
  onFocus,
  isDisabled,
  onMouseOver,
  className,
  style,
  testId = '',
  label,
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      onFocus={onFocus}
      disabled={isDisabled}
      onMouseOver={onMouseOver}
      className={clsx(CLASSES.common, CLASSES.sizes[size], CLASSES.colors[color], className)}
      style={style}
      data-test-id={`${testId}Button`}
    >
      {label}
    </button>
  );
}
