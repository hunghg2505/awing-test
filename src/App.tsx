import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Demo from '@/pages/Demo';
import Home from '@/pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/demo',
    element: <Demo />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
