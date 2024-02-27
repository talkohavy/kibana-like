import ApplicationsIcon from '../../../utils/svgs/ApplicationsIcon';
import ElasticIcon from '../../../utils/svgs/ElasticIcon';
import ElasticWord from '../../../utils/svgs/ElasticWord';
import HamburgerIcon from '../../../utils/svgs/HamburgerIcon';
import NewsEventsIcon from '../../../utils/svgs/NewsEventsIcon';
import WheelIcon from '../../../utils/svgs/WheelIcon';
import DarkModeToggle from '../../DarkModeToggle';
import Avatar from './Avatar';

export default function Header() {
  return (
    <>
      <div className='flex h-12 items-center justify-between bg-[#25282f] px-4 shadow-sm dark:bg-gray-800 dark:shadow-dark-sm'>
        <div className='flex items-center justify-between'>
          <ElasticIcon size={25} className='cursor-pointer' />
          <ElasticWord size={64} className='ml-2' />
          <DarkModeToggle size={20} />
        </div>

        <div className='flex items-center justify-between gap-5'>
          <WheelIcon size={18} className='cursor-pointer' />
          <NewsEventsIcon size={18} className='cursor-pointer' />
          <Avatar />
        </div>
      </div>

      <div className='flex h-12 items-center justify-between border px-4'>
        <div className='flex items-center justify-between gap-5'>
          <HamburgerIcon size={18} className='cursor-pointer' />
          {/* <BreadCrumbs /> */}
        </div>

        <ApplicationsIcon size={18} className='cursor-pointer' />
      </div>
    </>
  );
}
