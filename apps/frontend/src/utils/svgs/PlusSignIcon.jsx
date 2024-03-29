export default function PlusSignIcon({ size, color = 'black', className = undefined }) {
  return (
    <svg
      style={{ width: size, height: size }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
      fill={color}
      role='img'
      data-icon-type='plusInCircle'
      aria-hidden='true'
      className={className}
    >
      <path
        fillRule='evenodd'
        d='M8 7h3.5a.5.5 0 1 1 0 1H8v3.5a.5.5 0 1 1-1 0V8H3.5a.5.5 0 0 1 0-1H7V3.5a.5.5 0 0 1 1 0V7Zm-.5-7C11.636 0 15 3.364 15 7.5S11.636 15 7.5 15 0 11.636 0 7.5 3.364 0 7.5 0Zm0 .882a6.618 6.618 0 1 0 0 13.236A6.618 6.618 0 0 0 7.5.882Z'
      />
    </svg>
  );
}
