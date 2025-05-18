import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './Components/Home.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import CoffeeDetails from './Components/CoffeeDetails.jsx';
import Signin from './Components/Signin.jsx';
import Signup from './Components/Signup.jsx';

import AuthProvider from './Context/AuthProvider.jsx';
import Users from './Components/Users.jsx';


const router = createBrowserRouter([
  {
    path: "/",
   Component:MainLayout,
   children:[
    {
      index:true,
      loader:()=> fetch("https://coffee-shop-server-fawn-one.vercel.app/coffees"),
      Component:Home
    },
    {
      path:"/addCoffee",
      Component:AddCoffee
    },
    {
      path:"/updateCoffee/:id",
      loader:({params})=> fetch(`https://coffee-shop-server-fawn-one.vercel.app/coffees/${params.id}`),
      Component:UpdateCoffee
    },
    {
      path:'/coffee/:id',
      loader:({params})=> fetch(`https://coffee-shop-server-fawn-one.vercel.app/coffees/${params.id}`),
      Component:CoffeeDetails
    },
    {
      path:"/signin",
      Component:Signin
    },
    {
      path:"/signup",
      Component:Signup
    },
    {
     path:"/users",
     loader:()=> fetch("https://coffee-shop-server-fawn-one.vercel.app/users"),
     Component:Users

    }
   ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
             <RouterProvider router={router} />
    </AuthProvider>
  
  </StrictMode>,
)
