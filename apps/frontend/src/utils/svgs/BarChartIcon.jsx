export default function BarChartIcon({ size, className = undefined }) {
  return (
    <svg
      style={{ width: size, height: size }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      role='img'
      aria-hidden='true'
      className={className}
    >
      <path fill='#F04E98' d='M10 32H7.238C3.793 32 1 28.865 1 24.998V15h9v17Z' />
      <path d='M10 32h9V8h-9z' className='euiIcon__fillNegative' />
      <path fill='#07C' d='M31 32h-9V0l1.973.024C27.866.072 31 3.731 31 8.228V32Z' />
    </svg>
  );
}
