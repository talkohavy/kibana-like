import { useSelector } from 'react-redux';
import Header from './Header/index';
import Main from './Main/index';
import Sidebar from './Sidebar/index';

/** @typedef {import('../../store/types').State} State */

export default function Layout({ children }) {
  const { isSidebarOpen } = useSelector(
    /** @param {State} state */
    (state) => state,
  );

  return (
    <div className='flex h-full flex-col items-start justify-start'>
      <Header />

      <div className='flex w-full flex-grow items-center justify-center'>
        {isSidebarOpen && <Sidebar />}

        <Main>{children}</Main>
      </div>
    </div>
  );
}
