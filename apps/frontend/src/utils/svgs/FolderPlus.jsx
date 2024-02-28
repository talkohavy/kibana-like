export default function FolderPlus({ size, color = 'black', plusColor = '#007871', className = undefined }) {
  return (
    <svg
      style={{ width: size, height: size }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      fill={color}
      role='img'
      data-icon-type='folder plus'
      aria-hidden='true'
      className={className}
    >
      <path d='M32 30H0V3h12.57l3 5H32v22ZM2 28h28V10H14.43l-3-5H2v23Z' />
      <path d='M21 18h-4v-4h-2v4h-4v2h4v4h2v-4h4z' fill={plusColor} />
    </svg>
  );
}
