export default function WeirdMoon({ size, className = undefined }) {
  return (
    <svg
      style={{ width: size, height: size }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      role='img'
      aria-hidden='true'
      className={className}
    >
      <path
        fill='#00BFB3'
        fillRule='evenodd'
        d='M16 0c-2.918 0-5.645.794-8 2.158 4.777 2.768 8 7.923 8 13.842 0 5.919-3.223 11.074-8 13.842A15.907 15.907 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0z'
        clipRule='evenodd'
      />
      <path
        fill='#FEC514'
        fillRule='evenodd'
        d='M8 24h2.222A12.996 12.996 0 0 0 13 16c0-2.935-1.012-5.744-2.778-8H8a8 8 0 0 0 0 16z'
        clipRule='evenodd'
      />
      <path
        fillRule='evenodd'
        d='M16 8h-2.152A15.877 15.877 0 0 1 16 16c0 2.918-.786 5.647-2.152 8H16a8 8 0 0 0 0-16z'
        clipRule='evenodd'
      />
    </svg>
  );
}
