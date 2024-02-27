export default function HamburgerIcon({ size, color = 'black', className = undefined }) {
  return (
    <svg
      style={{ width: size, height: size }}
      xmlns='http://www.w3.org/2000/svg'
      fill={color}
      viewBox='0 0 16 16'
      role='img'
      data-icon-type='menu'
      data-is-loaded='true'
      aria-hidden='true'
      className={className}
    >
      <path d='M0 2h16v2H0V2Zm0 5h16v2H0V7Zm16 5H0v2h16v-2Z' />
    </svg>
  );
}
