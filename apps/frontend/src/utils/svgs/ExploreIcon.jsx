export default function ExploreIcon({ size, color = 'black', className = undefined }) {
  return (
    <svg
      style={{ width: size, height: size }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
      fill={color}
      role='img'
      data-icon-type='explorer'
      aria-hidden='true'
      className={className}
    >
      <path d='M13 8.5a.5.5 0 1 1 1 0V12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.5a.5.5 0 0 1 0 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8.5Zm-5.12.339a.5.5 0 1 1-.706-.707L13.305 2H10.5a.5.5 0 1 1 0-1H14a1 1 0 0 1 1 1v3.5a.5.5 0 1 1-1 0V2.72L7.88 8.838Z' />
    </svg>
  );
}
