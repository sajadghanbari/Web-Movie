import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Movies from './components/Movies.jsx';
import Movie from './components/Movie.jsx';
import Home from './components/home.jsx';
import Genres from './components/Genres.jsx';
import EditMovie from './components/EditMovie.jsx';
import ManageCatalogue from './components/ManageCatalogue.jsx';
import GraphQL from './components/GraphQL.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/movies',
        element: <Movies />
      },
      {
        path: '/movies/:id',
        element: <Movie />
      },
      {
        path: '/genres',
        element: <Genres />
      },
            {
        path: '/admin/add-movie',
        element: <EditMovie />
      },
            {
        path: '/admin/manage-catalogue',
        element: <ManageCatalogue />
      },
            {
        path: '/graphql',
        element: <GraphQL />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
