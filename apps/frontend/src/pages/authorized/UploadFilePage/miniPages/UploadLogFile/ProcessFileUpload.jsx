import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from '../../../../../components/Button';
import CheckMark from '../../../../../utils/svgs/CheckMark';
import CompassIcon from '../../../../../utils/svgs/CompassIcon';

/**
 * @typedef {{
 *   name: string,
 *   title: string,
 *   status: 'completed' | 'in-progress' | 'to-do'
 * }} Stage
 */

/** @type {Array<Stage>} */
const stagesInitialState = [
  {
    name: 'File processed',
    title: 'Step 1: File processed is complete',
    status: 'to-do',
  },
  {
    name: 'Index created',
    title: 'Step 2: ...',
    status: 'to-do',
  },
  {
    name: 'Ingest pipeline created',
    title: 'Step 3: ...',
    status: 'to-do',
  },
  {
    name: 'Data uploaded',
    title: 'Step 4: ...',
    status: 'to-do',
  },
  {
    name: 'Data view created',
    title: 'Step 5: ...',
    status: 'to-do',
  },
];

export default function ProcessFileUpload({ isUploading }) {
  const [stagesUpdated, setStagesUpdated] = useState(() => [...stagesInitialState]);

  useEffect(() => {
    if (!isUploading) return;

    setStagesUpdated((prevState) => {
      const newState = [...prevState];
      newState[0].status = 'in-progress';
      return newState;
    });

    setTimeout(() => {
      setStagesUpdated((prevState) => {
        const newState = [...prevState];
        newState[0].status = 'completed';
        newState[1].status = 'in-progress';
        return newState;
      });
    }, 2000);

    setTimeout(() => {
      setStagesUpdated((prevState) => {
        const newState = [...prevState];
        newState[1].status = 'completed';
        newState[2].status = 'in-progress';
        return newState;
      });
    }, 5000);

    setTimeout(() => {
      setStagesUpdated((prevState) => {
        const newState = [...prevState];
        newState[2].status = 'completed';
        newState[3].status = 'in-progress';
        return newState;
      });
    }, 10000);

    setTimeout(() => {
      setStagesUpdated((prevState) => {
        const newState = [...prevState];
        newState[3].status = 'completed';
        newState[4].status = 'in-progress';
        return newState;
      });
    }, 11000);

    setTimeout(() => {
      setStagesUpdated((prevState) => {
        const newState = [...prevState];
        newState[4].status = 'completed';
        return newState;
      });
    }, 14000);
  }, [isUploading]);

  return (
    <div className='space-y-6 p-12'>
      <div className='space-y-6 rounded-lg border p-4 shadow-down'>
        <ol className='flex items-stretch bg-transparent'>
          {stagesUpdated.map(({ name, title, status }, index) => (
            <li key={name} className='relative flex-grow basis-0'>
              {index < stagesUpdated.length - 1 && (
                <div className='absolute left-1/2 top-[40px] h-px w-full bg-teal-400' />
              )}
              <button
                type='button'
                data-step-status={status}
                title={title}
                className='relative flex cursor-pointer flex-col items-center justify-start'
                style={{ inlineSize: '100%', paddingInline: 16, paddingBlock: '24px 16px' }}
              >
                <span
                  className={twMerge(
                    'inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-white',
                    status === 'to-do' && 'border border-neutral-300',
                    status === 'in-progress' && 'bg-blue-600 text-white',
                    status === 'completed' && 'bg-[#4dd2ca]',
                  )}
                >
                  {status === 'completed' ? <CheckMark size={14} /> : index + 1}
                </span>
                <span className='mt-2 font-bold'>{name}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>

      <Button
        label={
          <div className='flex items-center justify-between gap-2'>
            <CompassIcon size={18} color='white' />
            <span>View Log Results</span>
          </div>
        }
        className='mx-auto'
        isDisabled
      />
    </div>
  );
}
