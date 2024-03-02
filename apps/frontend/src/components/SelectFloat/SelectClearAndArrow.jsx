import clsx from 'clsx';
import { imgArrow3 as imgDownArrow } from '@src/paths/images';
import MyX from '@src/utils/DynamicImages/MyX';

export default function SelectClearAndArrow({ isMenuOpen, isFocused, isHovered, isError, onClearClick, onArrowClick }) {
  const handleClickOrKeyDown = (e) => {
    if (e.type === 'click' || (['Enter', 'NumpadEnter'].includes(e.code) && !e.shiftKey)) {
      e.preventDefault();

      onArrowClick();
    }
  };

  return (
    <div
      className='absolute top-1/2 flex h-10 w-12 translate-y-half items-center justify-between ltr:right-4 rtl:left-4'
      tabIndex={-1}
      onClick={handleClickOrKeyDown}
      onKeyDown={handleClickOrKeyDown}
    >
      <MyX
        width={20}
        strokeWidth={12}
        className={clsx(
          'cursor-pointer rounded-full stroke-gray-400 hover:stroke-gray-600 dark:stroke-blue-400',
          isError && !isFocused && '!dark:stroke-red-500 !stroke-red-500',
          isFocused || isHovered ? 'visible' : 'invisible',
        )}
        onClick={onClearClick}
      />
      <img
        className={clsx('relative top-0.5  h-3 w-5', isMenuOpen && '-top-0.5 rotate-180')}
        src={imgDownArrow}
        alt='down arrow'
        tabIndex={-1}
      />
    </div>
  );
}
