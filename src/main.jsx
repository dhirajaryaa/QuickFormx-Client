import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage, Register, Login, Dashboard, NotFound, FormPage, CreateForm } from './pages';
import { Provider } from 'react-redux';
import { Store } from './app/store.js';
import ProtectedRoute from './components/custom/ProtectedRoute';

// create routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/home", element: <LandingPage /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      // protected Routes 
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/dashboard", element: <Dashboard /> },
          // Form routes 
          { path: "/forms", element: <FormPage /> },
          { path: "/forms/create", element: <CreateForm /> },
        ]
      },
      { path: "*", element: <NotFound /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>
)
