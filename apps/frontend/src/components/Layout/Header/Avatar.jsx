export default function Avatar({ initials = 'E' }) {
  return (
    <div className='flex size-6 cursor-pointer items-center justify-center rounded-full bg-[#588fc1] text-xs active:bg-[#d3dae633]'>
      {initials}
    </div>
  );
}
