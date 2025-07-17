import { StrictMode } from 'react'
import {createBrowserRouter , RouterProvider} from 'react-router'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './components/home.jsx';
import Movies from './components/Movies.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {
        path: '/movies',
        element: <Movies />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
