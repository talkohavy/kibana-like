import Resizable from '../../../components/Resizable';
import Background from './Background';
import MainView from './MainView';
import Sidebar from './Sidebar';

export default function ViewLogs() {
  return (
    <Background>
      <div className='flex h-14 w-full items-center justify-start border-b p-2'>ViewLogs top bar</div>

      <div className='flex flex-grow'>
        <Resizable axis='x' initial={200} min={100} max={600} className='max-w-50/100'>
          {({ position: x }) => <Sidebar width={x} />}
        </Resizable>

        <MainView />
      </div>
    </Background>
  );
}
