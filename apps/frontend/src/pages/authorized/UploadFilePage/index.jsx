import { useState } from 'react';
import TopBar from './TopBar';

export default function UploadFilePage() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className='h-full w-full'>
      <TopBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      <div>hello</div>
    </div>
  );
}
