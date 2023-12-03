import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { GamePage } from './pages/GamePage';
import { MonumentListPage } from './pages/MonumentListPage';
import { MonumentPage } from './pages/MonumentPage';
import { ErrorPage } from './pages/ErrorPage';
import { AboutProject } from './pages/AboutProject';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage></HomePage> },
      { path: '/aboutproject', element: <AboutProject></AboutProject> },
      { path: 'game', element: <GamePage></GamePage> },
      { path: 'monuments', element: <MonumentListPage></MonumentListPage> },
      {
        path: 'monuments/:idMonument',
        element: <MonumentPage></MonumentPage>,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router}></RouterProvider>,
);
