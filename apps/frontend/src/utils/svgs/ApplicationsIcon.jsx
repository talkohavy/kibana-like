export default function ApplicationsIcon({ size, color = 'black', className = undefined }) {
  return (
    <svg
      style={{ width: size, height: size }}
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
      role='img'
      data-icon-type='apps'
      data-is-loaded='true'
      aria-hidden='true'
      className={className}
    >
      <path d='M2 4V2h2v2H2Zm5 0V2h2v2H7Zm5 0V2h2v2h-2ZM2 9V7h2v2H2Zm5 0V7h2v2H7Zm5 0V7h2v2h-2ZM2 14v-2h2v2H2Zm5 0v-2h2v2H7Zm5 0v-2h2v2h-2Z' />
    </svg>
  );
}
