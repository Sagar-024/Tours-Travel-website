
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

import Home  from './Component/Home.jsx'
import About  from './Component/About.jsx'
import Contact  from './Component/Contact.jsx'
import Gallery  from './Component/Gallery.jsx'
import Packages  from './Component/Packages.jsx'
import Notfound from './Component/Notfound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'packages', element: <Packages /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'gallery' , element:<Gallery/>},
      { path: '*', element: <Notfound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
