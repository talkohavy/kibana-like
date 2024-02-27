export default function SecurityShieldIcon({ size, className = undefined }) {
  return (
    <svg
      style={{ width: size, height: size }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      role='img'
      aria-hidden='true'
      data-icon-type='logoSecurity'
      className={className}
    >
      <path fill='#FA744E' d='M9 7.008V0h20v16.744c0 3.913-6.378 6.477-9.015 7.256V7.008H9Z' />
      <path fill='#1DBAB0' d='M3 20.073V10h14v22C7.667 27.98 3 24.004 3 20.073Z' />
      <path d='M9 10h8v14c-2.983-1.14-8-3.756-8-7.043V10Z' className='euiIcon__fillNegative' />
    </svg>
  );
}
