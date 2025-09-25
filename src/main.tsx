
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayoutRoot from './pages/LayoutRoot.tsx';
import HomePage from './pages/HomePage.tsx';
import Login from './pages/Login.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      
    ],
  },
  {
    path: "/login",
    element: <Login />
  }
]);


const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RouterProvider router={router} />
);
