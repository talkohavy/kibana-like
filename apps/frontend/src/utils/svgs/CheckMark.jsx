export default function CheckMark({ size, color = 'black', className = undefined }) {
  return (
    <svg
      style={{ width: size, height: size }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
      fill={color}
      role='img'
      data-icon-type='document'
      aria-hidden='true'
      className={className}
    >
      <path
        fillRule='evenodd'
        d='M6.5 12a.502.502 0 0 1-.354-.146l-4-4a.502.502 0 0 1 .708-.708L6.5 10.793l6.646-6.647a.502.502 0 0 1 .708.708l-7 7A.502.502 0 0 1 6.5 12'
      />
    </svg>
  );
}
