export default function ArrowIcon({ size, color = 'black', className = undefined }) {
  return (
    <svg
      style={{ width: size, height: size }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
      fill={color}
      role='img'
      data-icon-type='arrow'
      aria-hidden='true'
      className={className}
    >
      <path
        fillRule='evenodd'
        d='M4.982 14.043a.75.75 0 0 1-.025-1.06l4.591-4.81a.25.25 0 0 0 0-.346l-4.59-4.81a.75.75 0 0 1 1.085-1.035l4.59 4.81a1.75 1.75 0 0 1 0 2.416l-4.59 4.81a.75.75 0 0 1-1.06.024Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
