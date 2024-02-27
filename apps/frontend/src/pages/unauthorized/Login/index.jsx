import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '../../../components/Box';
import Button from '../../../components/Button';
import InputFloat from '../../../components/InputFloat';
import LogoCircle from '../../../components/LogoCircle';
import { login } from '../../../store/user/actions';
import LockIcon from '../../../utils/svgs/LockIcon';
import Background from './Background';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => dispatch(login());

  return (
    <Background>
      <LogoCircle />

      <h1 className='mb-20 text-3xl'>Welcome to Elastic</h1>

      <Box className='min-w-md space-y-4'>
        <div>
          <label className='mb-2 inline-block font-bold'>Username</label>
          <InputFloat type='text' value={username} setValue={setUsername} />
        </div>

        <div>
          <label className='mb-2 inline-block font-bold'>Password</label>
          <InputFloat
            type='password'
            value={password}
            setValue={setPassword}
            iconRenderer={() => <LockIcon className='ml-2' />}
          />
        </div>

        <div className='flex w-full items-center justify-start'>
          <Button color='blue' label='Login' onClick={handleLogin} size='sm' />
        </div>
      </Box>
    </Background>
  );
}
