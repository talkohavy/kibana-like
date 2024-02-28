import { useState } from 'react';
import Button from '../../../../components/Button';
import DocumentIcon from '../../../../utils/svgs/DocumentIcon';
import FolderPlus from '../../../../utils/svgs/FolderPlus';
import UploadFileIcon2 from '../../../../utils/svgs/UploadFileIcon2';

export default function UploadLogFile() {
  const [data, setData] = useState(null);

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
            <Button label='Import' onClick={() => console.log('import file!')} />
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
