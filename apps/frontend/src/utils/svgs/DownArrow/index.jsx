/**
 * @param {{
 *   size?: number,
 *   color?: string,
 *   className?: string,
 *   title?: string,
 * }} props
 */
export default function DownArrow({ size = 18, color = 'black', className, title }) {
  return (
    <svg
      viewBox='0 0 100 100'
      strokeWidth={10}
      stroke={color}
      style={{ width: size, height: size }}
      className={className}
    >
      <title>{title}</title>
      <line x1='10' y1='30' x2='50' y2='68' strokeLinecap='round' />
      <line x1='50' y1='68' x2='90' y2='30' strokeLinecap='round' />
    </svg>
  );
}
