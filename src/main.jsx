import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Use react-router-dom
import './index.css'
import { Outlet } from 'react-router-dom';
import BuyerLayout from './Layouts/BuyerLayout';
import DashboardLayout from './Layouts/DashboardLayout';
import BuyerDashboard from './Components/Buyer/BuyerDashboard';
import SellerLayout from './Layouts/SellerLayout';
import Inventory from './Components/Seller/Inventory';
import AdminLayout from './Layouts/AdminLayout';
import Shop from './Components/Buyer/Shop';

// src/main.jsx
const router = createBrowserRouter([
  // 1. BUYER ROUTES
  {
    path: "/",
    element: <BuyerLayout/>,
    children: [
      // { index: true, element: <Home /> },
       { path: "shop", element: <Shop/> },
      {
        path:"dashboard",
        element:<DashboardLayout/>,
        children:[
         {index:true, element:<BuyerDashboard/>} 
        ]
      }
    ]
  },
  // // 2. ADMIN ROUTES
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      // { index: true, element: <AdminDashboard /> },
      // { path: "sellers", element: <SellerManagement /> },
    ]
  },
  
  // 3. SELLER ROUTES
  {
    path: "/seller",
    element: <SellerLayout/>,
   children: [
    { index: true, element: <div className="p-8 text-2xl font-black">Seller Overview</div> },
    { path: "inventory", element: <Inventory /> }, // Add this line
  ]
  }
]);
// 2. Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)