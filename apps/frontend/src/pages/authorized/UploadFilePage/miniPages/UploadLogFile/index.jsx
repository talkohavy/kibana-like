import { useState } from 'react';
import ChooseFile from './ChooseFile';
import FileDetails from './FileDetails';
import ProcessFileUpload from './ProcessFileUpload';

export default function UploadLogFile() {
  const [data, setData] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  if (isUploading) return <ProcessFileUpload isUploading={isUploading} />;

  if (data)
    return <FileDetails data={data} clearData={() => setData(null)} handleFileImport={() => setIsUploading(true)} />;

  return <ChooseFile setData={setData} />;
}
