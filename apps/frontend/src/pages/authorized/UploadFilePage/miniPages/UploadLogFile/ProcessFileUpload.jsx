import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../../components/Button';
import ProgressStages from '../../../../../components/ProgressStages.jsx';
import CompassIcon from '../../../../../utils/svgs/CompassIcon';

/**
 * @typedef {{
 *   title: string,
 *   tooltip: string,
 *   status: 'completed' | 'in-progress' | 'to-do'
 * }} Stage
 */

/** @type {Array<Stage>} */
const stagesInitialState = [
  {
    title: 'File processed',
    tooltip: 'Step 1: File processed is complete',
    status: 'to-do',
  },
  {
    title: 'Index created',
    tooltip: 'Step 2: Index created is complete',
    status: 'to-do',
  },
  {
    title: 'Ingest pipeline created',
    tooltip: 'Step 3: Ingest pipeline created is complete',
    status: 'to-do',
  },
  {
    title: 'Data uploaded',
    tooltip: 'Step 4: Data uploaded is complete',
    status: 'to-do',
  },
  {
    title: 'Data view created',
    tooltip: 'Step 5: Data view created is complete',
    status: 'to-do',
  },
];

export default function ProcessFileUpload({ isUploading }) {
  const navigate = useNavigate();

  const [stagesUpdated, setStagesUpdated] = useState(() => [...stagesInitialState]);
  const [isViewButtonDisabled, setIsViewButtonDisabled] = useState(true);

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
      setIsViewButtonDisabled(false);
    }, 14000);
  }, [isUploading]);

  return (
    <div className='mx-auto max-w-7xl space-y-6 p-12'>
      <div className='space-y-6 rounded-lg border p-4 shadow-down'>
        <ProgressStages stages={stagesUpdated} />
      </div>

      <Button
        label={
          <div className='flex items-center justify-between gap-2'>
            <CompassIcon size={18} color='white' />
            <span>View Log Results</span>
          </div>
        }
        onClick={() => navigate('/view-logs')}
        className='mx-auto'
        isDisabled={isViewButtonDisabled}
      />
    </div>
  );
}
