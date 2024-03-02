import Button from '../../../../../components/Button';

export default function FileDetails({ data, clearData, handleFileImport }) {
  const { name } = data.get('myFiles');

  return (
    <div className='space-y-6 p-12'>
      <div className='flex items-center justify-start gap-8'>
        <h1 className='text-2xl font-bold'>{name}</h1>

        <button type='button' onClick={clearData} className='text-blueish-600 hover:text-blue-500'>
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
          <Button label='Import' onClick={handleFileImport} />
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
