import { twMerge } from 'tailwind-merge';

export default function Background({ children, className = undefined }) {
  return <div className={twMerge('flex flex-col h-full w-full', className)}>{children}</div>;
}
