export default function DocumentIcon({ size, color = 'black', className = undefined }) {
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
      <path d='M10.8 0c.274 0 .537.113.726.312l3.2 3.428c.176.186.274.433.274.689V15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h8.8ZM14 5h-3.5a.5.5 0 0 1-.5-.5V1H2v14h12V5Zm-8.5 7a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5Zm0-3a.5.5 0 0 1 0-1h5a.5.5 0 1 1 0 1h-5Z' />
    </svg>
  );
}
