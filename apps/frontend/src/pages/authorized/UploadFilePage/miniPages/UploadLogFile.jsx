import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from '../../../../components/Button';
import CheckMark from '../../../../utils/svgs/CheckMark';
import CompassIcon from '../../../../utils/svgs/CompassIcon';
import DocumentIcon from '../../../../utils/svgs/DocumentIcon';
import FolderPlus from '../../../../utils/svgs/FolderPlus';
import UploadFileIcon2 from '../../../../utils/svgs/UploadFileIcon2';

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

export default function UploadLogFile() {
  const [data, setData] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
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

  // all function:
  const loadMyFiles = async (e) => {
    const { files } = e.target;
    // Step 1: get the file/s from the form
    // Note: has to be an old-school for loop, since files is not an Array type, it's a FileList type.
    const formData = new FormData();
    for (const file of files) formData.append('myFiles', file, file.name);
    // const formData = e.target.files.reduce((acc, file) => acc.append('myFiles', file, file.name), new FormData());

    // Step 2: start uploading that file
    // uploadToServer(formData);
    setData(formData);
  };

  console.log(data);

  if (isUploading) {
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

  if (data) {
    const { name } = data.get('myFiles');

    return (
      <div className='space-y-6 p-12'>
        <div className='flex items-center justify-start gap-8'>
          <h1 className='text-2xl font-bold'>{name}</h1>

          <button type='button' onClick={() => setData(null)} className='text-blueish-600 hover:text-blue-500'>
            Select different file
          </button>
        </div>

        <div className='space-y-2 rounded-lg border p-4'>
          <h2 className='text-lg font-bold'>File Contents</h2>

          <p>First 1,000 lines</p>

          <div className='h-52 overflow-auto bg-slate-50' />
        </div>

        <div className='space-y-6 rounded-lg border p-4'>
          <h2 className='text-lg font-bold'>Summary</h2>

          <dl className='grid w-lg grid-cols-2 gap-2'>
            <dt className='font-bold'>Number of lines analyzed</dt>
            <dd>1000</dd>
            <dt className='font-bold'>Format</dt>
            <dd>ndjson</dd>
            <dt className='font-bold'>Time field</dt>
            <dd>timestamp</dd>
            <dt className='font-bold'>Time format</dt>
            <dd>yyyy-MM-dd HH:mm:ss</dd>
          </dl>

          <div className='flex items-center justify-start gap-2'>
            <Button label='Import' onClick={() => setIsUploading(true)} />
            <Button isPrimary={false} label='Override settings' onClick={() => console.log('props')} />
            <button type='button' onClick={() => console.log('open modal')} className='text-blue-600'>
              Analysis explanation
            </button>
          </div>
        </div>

        <div className='space-y-6 rounded-lg border p-4'>
          <h2 className='text-lg font-bold'>File Stats</h2>

          <div className='flex items-center justify-between'>
            <div>
              <span className='font-bold'>All fields&nbsp;</span>
              <span className='mx-1 rounded bg-[#e0e5ee] px-2 py-1 font-bold'>8</span>
              <span>&nbsp;of 8 total</span>
            </div>

            <div>
              <span className='font-bold'>Number fields&nbsp;</span>
              <span className='mx-1 rounded bg-[#e0e5ee] px-2 py-1 font-bold'>0</span>
              <span>&nbsp;of 0 total</span>
            </div>

            <div>Actions</div>
          </div>

          <div className='h-52 overflow-auto bg-slate-50'>TABLE</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <input id='fileUpload' type='file' accept='*' className='h-0 w-0' onChange={loadMyFiles} />

      <div className='space-y-6 p-12'>
        <div className='flex w-full items-center justify-between gap-10'>
          <div className='h-full rounded-lg p-6'>
            <FolderPlus size={100} />
          </div>
          <div className='space-y-3 text-lg'>
            <h1 className='text-3xl font-bold'>Visualize data from a log file</h1>

            <p>Upload your file, analyze its data, and optionally import the data into an Elasticsearch index.</p>

            <p>The following file formats are supported:</p>

            <ul className='space-y-5 px-8 py-4'>
              <li className='flex items-center justify-start gap-4'>
                <DocumentIcon size={16} />
                <span>Delimited text files, such as CSV and TSV</span>
              </li>

              <li className='flex items-center justify-start gap-4'>
                <DocumentIcon size={16} />
                <span>Newline-delimited JSON</span>
              </li>

              <li className='flex items-center justify-start gap-4'>
                <DocumentIcon size={16} />
                <span>Log files with a common format for the timestamp</span>
              </li>
            </ul>

            <p>You can upload files up to 100 MB.</p>
          </div>
        </div>

        <hr />

        <label
          htmlFor='fileUpload'
          className='group flex h-32 cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500'
        >
          <UploadFileIcon2 size={44} color='#016bb8' className='transition-all group-hover:scale-110' />
          <p>Select or drag and drop a file</p>
        </label>
      </div>
    </>
  );
}
