import './App.css';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Project from './Component/Project/Project';
import Service from './Component/Services/Service';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/contact', // Use lowercase for path
      element: <Contact />,
    },
    {
      path: '/about', // Use lowercase for path
      element: <About />,
    },
    {
      path: '/project', // Use lowercase for path
      element: <Project />,
    },
    {
      path: '/service', // Use lowercase for path
      element: <Service />,
    },
  ]);

  return <RouterProvider router={router} />;
}
