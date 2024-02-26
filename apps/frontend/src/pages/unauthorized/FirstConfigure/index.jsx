import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '../../../components/Box';
import Button from '../../../components/Button';
import LogoCircle from '../../../components/LogoCircle';
import TextareaFloat from '../../../components/TextareaFloat';
import CogWheel from '../../../utils/svgs/CogWheel';
import Background from './Background';

export default function FirstConfigure() {
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  return (
    <Background>
      <LogoCircle />

      <h1 className='mb-20 text-3xl'>Configure Elastic to get started</h1>

      <Box className='min-w-md'>
        <h2 className='text-lg font-bold text-blue-600'>Enrollment token</h2>

        <TextareaFloat value={token} setValue={setToken} wrapperClassName='h-28' />

        <p className='font-xs cursor-pointer text-blue-800'>Where do I find this?</p>

        <div className='flex w-full items-center justify-end gap-3'>
          <button
            type='button'
            onClick={() => {
              console.log('manually');
            }}
            className='flex items-center justify-center gap-2 text-blue-700'
          >
            <CogWheel color='blue' />
            <span>Configure manually</span>
          </button>

          <Button color='blue' label='Configure Elastic' onClick={() => navigate('/login')} size='md' />
        </div>
      </Box>
    </Background>
  );
}
