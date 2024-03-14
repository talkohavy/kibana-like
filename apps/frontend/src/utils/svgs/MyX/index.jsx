/**
 * @param {{
 *   size?: number,
 *   color?: string,
 *   className?: string,
 *   title?: string,
 * }} props
 */
export default function MyX({ size = 100, color = 'currentColor', className, title }) {
  return (
    <svg
      viewBox='0 0 100 100'
      strokeWidth={8}
      stroke={color}
      strokeLinecap='round'
      style={{ width: size, height: size }}
      className={className}
    >
      <title>{title}</title>
      <line x1='20' y1='20' x2='80' y2='80' />
      <line x1='20' y1='80' x2='80' y2='20' />
    </svg>
  );
}
