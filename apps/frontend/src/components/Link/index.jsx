import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

/**
 * @param {{
 *    children?: import('react').ReactNode,
 *    to: string,
 *    onClick?: () => void,
 *    onMouseOver?: () => void,
 *    className?: string,
 *    style?: any,
 *    testId?: string,
 * }} props
 */
export default function MyLink({ children, to, onClick, onMouseOver, className, style, testId }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      onMouseOver={onMouseOver}
      className={twMerge('inline-flex cursor-pointer items-center justify-center text-blueish-600', className)}
      style={style}
      data-test-id={`${testId}Link`}
    >
      {children}
    </Link>
  );
}
