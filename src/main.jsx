import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/home/Home.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ShopItem from './pages/home/ShopItem.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/shop/:id",
        element:<ShopItem/>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
