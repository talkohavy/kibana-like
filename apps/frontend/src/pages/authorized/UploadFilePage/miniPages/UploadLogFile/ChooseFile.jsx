import DocumentIcon from '../../../../../utils/svgs/DocumentIcon';
import FolderPlus from '../../../../../utils/svgs/FolderPlus';
import UploadFileIcon2 from '../../../../../utils/svgs/UploadFileIcon2';

export default function ChooseFile({ setData }) {
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

  return (
    <>
      <input id='fileUpload' type='file' accept='*' className='h-0 w-0' onChange={loadMyFiles} />

      <div className='mx-auto max-w-5xl space-y-6 p-12'>
        <div className='flex w-full items-center justify-start gap-10'>
          <div className='h-full rounded-lg p-6'>
            <FolderPlus size={100} />
          </div>

          <div className='flex-grow space-y-3'>
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
