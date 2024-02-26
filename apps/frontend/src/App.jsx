import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/index';

const FirstConfigure = lazy(() => import('./pages/unauthorized/FirstConfigure'));
const Login = lazy(() => import('./pages/unauthorized/Login'));
const HomePage = lazy(() => import('./pages/authorized/Home'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

const isNotAuthorized = true;

function App() {
  const store = useSelector((state) => state);
  console.log('store is:', store);

  if (isNotAuthorized)
    return (
      <Suspense>
        <Routes>
          <Route path='/index.html' element={<FirstConfigure />} />
          <Route path='/' element={<FirstConfigure />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Suspense>
    );

  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path='/index.html' element={<HomePage />} />
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/list' element={<ListPage />} /> */}
          {/* <Route path='/list/:id' element={<SinlgeItemPage />} /> */}

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
