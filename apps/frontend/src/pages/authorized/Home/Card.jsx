/**
 * @param {{
 *   color: string,
 *   icon: {
 *     size: number,
 *     element: any,
 *   }
 *   title: string,
 *   description: string,
 * }} props
 */
export default function Card({ color, icon, title, description }) {
  const CardIcon = icon.element;

  return (
    <div
      className='col-span-1 h-72 w-full rounded-lg'
      style={{
        boxShadow:
          'rgba(0, 0, 0, 0.08) 0px 0.9px 4px, rgba(0, 0, 0, 0.06) 0px 2.6px 8px, rgba(0, 0, 0, 0.05) 0px 5.7px 12px, rgba(0, 0, 0, 0.04) 0px 15px 15px',
      }}
    >
      <div className='flex items-center justify-center rounded-t-lg p-6' style={{ backgroundColor: color }}>
        <div
          className='rounded-full bg-white p-4'
          style={{ boxShadow: '0 0.7px 1.4px #00000012, 0 1.9px 4px #0000000d, 0 4.5px 10px #0000000d' }}
        >
          <CardIcon size={icon.size} />
        </div>
      </div>

      <div className='p-4'>
        <h2 className='text-center text-lg font-bold'>{title}</h2>
        <p className='line-clamp-5 text-center'>{description}</p>
      </div>
    </div>
  );
}
