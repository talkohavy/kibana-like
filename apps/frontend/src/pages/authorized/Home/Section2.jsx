import Button from '../../../components/Button';
import MyLink from '../../../components/Link';
import { COLORS } from '../../../utils/colors';
import DocumentsIcon from '../../../utils/svgs/DocumentsIcon';
import PlusSignIcon from '../../../utils/svgs/PlusSignIcon';
import UploadFileIcon from '../../../utils/svgs/UploadFileIcon';

export default function Section2() {
  return (
    <div className='mx-auto flex max-w-7xl items-start justify-between gap-5'>
      <div className='flex h-60 w-full flex-col items-start justify-between'>
        <h2 className='text-lg font-bold'>Get started by adding integrations</h2>

        <p className='text-lg'>
          To start working with your data, use one of our many ingest options. Collect data from an app or service, or
          upload a file. If you're not ready to use your own data, play with a sample data set.
        </p>

        <div className='flex w-full items-center justify-start gap-x-9'>
          <Button
            label={
              <div className='flex items-center justify-between gap-2'>
                <PlusSignIcon size={16} color='white' />
                <span>Add integrations</span>
              </div>
            }
          />

          <MyLink to='#' className='flex items-center justify-between gap-2'>
            <DocumentsIcon size={16} color={COLORS.blueish_600} />
            <span>Try sample data</span>
          </MyLink>

          <MyLink to='/upload-file' className='flex items-center justify-between gap-2'>
            <UploadFileIcon size={18} color={COLORS.blueish_600} />
            <span>Upload a file</span>
          </MyLink>
        </div>
      </div>

      <div className='flex h-60 w-full items-center justify-between gap-5 rounded-lg border bg-white px-6 shadow-sm'>
        <figure className='h-full w-full'>
          <img
            alt='Illustration for cloud data migration'
            className='h-full w-full object-contain'
            src='/static/images/illustration-cloud-migration.png'
          />
        </figure>
        <div>
          <h2 className='font-bold'>Try managed Elastic</h2>

          <p>Deploy, scale, and upgrade your stack faster with Elastic Cloud. We’ll help you quickly move your data.</p>

          <Button label='Move to Elastic Cloud' isPrimary={false} />
        </div>
      </div>
    </div>
  );
}
