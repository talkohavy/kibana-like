import { twMerge } from 'tailwind-merge';
import CheckMark from '../../utils/svgs/CheckMark';

export default function SingleStage({ title, tooltip, status, isLastStage, stageNumber }) {
  return (
    <li className='relative flex-grow basis-0'>
      {isLastStage && <div className='absolute left-1/2 top-[40px] h-px w-full bg-teal-400' />}
      <button
        type='button'
        data-step-status={status}
        title={tooltip}
        className='group relative flex cursor-pointer flex-col items-center justify-start'
        style={{ inlineSize: '100%', paddingInline: 16, paddingBlock: '24px 16px' }}
      >
        <span
          className={twMerge(
            'inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-white',
            status === 'to-do' && 'border border-neutral-300',
            status === 'in-progress' && 'bg-blue-600 text-white',
            status === 'completed' && 'bg-[#4dd2ca]',
            'group-focus:border group-focus:border-black',
          )}
        >
          {status === 'completed' ? <CheckMark size={14} /> : stageNumber}
        </span>
        <span className='mt-2 font-bold'>{title}</span>
      </button>
    </li>
  );
}
