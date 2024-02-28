import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from '../../../../components/Button';
import ArrowIcon from '../../../../utils/svgs/ArrowIcon';
import ExploreIcon from '../../../../utils/svgs/ExploreIcon';

export default function UploadSampleData() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <div className='mx-auto w-full max-w-7xl space-y-6 p-6'>
      <div className='flex w-full items-start justify-between gap-10 rounded-md border border-neutral-300 p-8'>
        <div className='flex h-60 w-full flex-col items-start justify-center gap-2'>
          <h2 className='text-xl font-bold'>Explore our live demo environment</h2>

          <p>
            Browse real-world data in a demo environment where you can explore search, observability, and security use
            cases like yours.
          </p>

          <Button
            label={
              <div className='flex items-center justify-between gap-2'>
                <span>Start exploring</span>
                <ExploreIcon size={16} color='white' />
              </div>
            }
            onClick={() => console.log('start exploring')}
            className='mt-3'
          />
        </div>
        <div className='h-60 w-full'>
          <figure className='h-full w-full'>
            <img
              alt='Illustration of Elastic data integrations'
              src='/static/images/graph-data.png'
              className='h-full w-full object-contain'
            />
          </figure>
        </div>
      </div>

      <div>
        <button
          type='button'
          className='group flex items-center justify-start gap-1'
          onClick={() => setIsAccordionOpen(!isAccordionOpen)}
        >
          <ArrowIcon
            size={24}
            color='black'
            className={twMerge('cursor-pointer rounded-md p-1 group-hover:bg-gray-100', isAccordionOpen && 'rotate-90')}
          />
          <span className='text-sm'>Other sample data sets</span>
        </button>

        {isAccordionOpen && <div>You can see me</div>}
      </div>
    </div>
  );
}
