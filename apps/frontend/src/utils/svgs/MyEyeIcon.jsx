/**
 * @param {{
 *    size?: number,
 *    isPasswordHidden: boolean,
 *    archColor?: string,
 *    sparkColor?: string,
 *    xColor?: string,
 *    className?: string,
 *    onMouseDown?: any,
 *    onMouseUp?: any,
 * }} props
 */
export default function MyEyeIcon({ size = 30, isPasswordHidden, archColor, sparkColor, xColor, className, ...rest }) {
  return (
    <svg
      style={{ width: size || 100, height: size ? size * 0.6 : 60 }}
      viewBox='0 0 100 50'
      focusable='false'
      aria-hidden='true'
      className={className}
      {...rest}
    >
      {/* Pupil: */}
      <circle strokeWidth='0' fill='rgba(0,0,0,0.8)' r='14' cx='50' cy='25' />
      {/* Eye Spark: */}
      <circle stroke={sparkColor || 'white'} strokeWidth='1' fill={sparkColor || 'white'} r='3' cx='60' cy='15' />
      {/* Upper arch: */}
      <path stroke={archColor || 'black'} strokeWidth='4' strokeLinecap='round' fill='none' d='M2 25 Q50 -30, 98 25' />
      {/* Lower arch: */}
      <path stroke={archColor || 'black'} strokeWidth='4' strokeLinecap='round' fill='none' d='M2 25 Q50 80, 98 25' />
      {/* X Lines: */}
      {isPasswordHidden && (
        <>
          <path stroke={xColor || '#36454F'} strokeWidth='5' strokeLinecap='round' fill='none' d='M5 50 L95 0' />
          <path stroke={xColor || '#36454F'} strokeWidth='5' strokeLinecap='round' fill='none' d='M5 0 L95 50' />
        </>
      )}
    </svg>
  );
}
