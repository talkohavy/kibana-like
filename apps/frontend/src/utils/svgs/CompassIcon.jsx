export default function CompassIcon({ size, color = 'black', className = undefined }) {
  return (
    <svg
      style={{ width: size, height: size }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      fill={color}
      role='img'
      data-icon-type='discoverApp'
      aria-hidden='true'
      className={className}
    >
      <path d='m8.33 23.67 4.79-10.55 10.55-4.79-4.79 10.55-10.55 4.79Zm6.3-9-2.28 5 5-2.28 2.28-5-5 2.28Z' />
      <path d='M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16A16 16 0 0 0 16 0Zm1 29.95V28h-2v1.95A14 14 0 0 1 2.05 17H4v-2H2.05A14 14 0 0 1 15 2.05V4h2V2.05A14 14 0 0 1 29.95 15H28v2h1.95A14 14 0 0 1 17 29.95Z' />
    </svg>
  );
}
