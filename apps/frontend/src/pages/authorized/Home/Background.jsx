import { twMerge } from 'tailwind-merge';

export default function Background({ children, className = undefined }) {
  return <div className={twMerge('h-full w-full bg-[#f7f8fc] py-4 px-6', className)}>{children}</div>;
}
