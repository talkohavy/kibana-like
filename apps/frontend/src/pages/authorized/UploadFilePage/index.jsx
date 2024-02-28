import { useState } from 'react';
import UploadLogFile from './miniPages/UploadLogFile';
import UploadSampleData from './miniPages/UploadSampleData';
import TopBar from './TopBar';

const RENDERER = {
  0: (props) => <UploadSampleData {...props} />,
  1: (props) => <UploadLogFile {...props} />,
};

export default function UploadFilePage() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className='h-full w-full'>
      <TopBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      {RENDERER[selectedTab]()}
    </div>
  );
}
