import { createBrowserRouter } from 'react-router-dom';
import CS2 from './pages/CS2/CS2Page';
import VALORANT from './pages/VALORANT/ValorantPage';
import Error from './pages/error/error';
import Home from './pages/Homepage/homepage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/CS2',
    element: <CS2 />,
    errorElement: <Error />,
  },
  {
    path: '/VALORANT',
    element: <VALORANT />,
    errorElement: <Error />,
  },
]);
