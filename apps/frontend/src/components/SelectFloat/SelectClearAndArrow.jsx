import { twMerge } from 'tailwind-merge';
import DownArrow from '../../utils/svgs/DownArrow';
import MyX from '../../utils/svgs/MyX';

export default function SelectClearAndArrow({ isMenuOpen, isFocused, isHovered, onClearClick, isValue }) {
  return (
    <>
      <div className='pointer-events-none absolute top-1/2 z-10 flex translate-y-half items-center justify-center ltr:right-4 rtl:left-4'>
        <DownArrow className={twMerge('relative top-0.5 stroke-blue-600', isMenuOpen && 'top-0 rotate-180')} />
      </div>

      <button
        type='button'
        onClick={onClearClick}
        className='absolute top-1/2 z-10 flex translate-y-half items-center justify-between ltr:right-10 rtl:left-10'
      >
        <MyX
          size={20}
          className={twMerge(
            'rounded-full stroke-gray-400 hover:stroke-red-600',
            isValue && (isFocused || isHovered) ? 'visible' : 'invisible',
          )}
          title='Clear'
        />
      </button>
    </>
  );
}
