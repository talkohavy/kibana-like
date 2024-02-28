import { twMerge } from 'tailwind-merge';

export default function Tab({ title, isSelected, handleClick }) {
  return (
    <div
      className={twMerge('h-8 cursor-pointer font-bold', isSelected && 'text-blueish-300 border-b-2 border-b-blue-600')}
      onClick={handleClick}
    >
      {title}
    </div>
  );
}
