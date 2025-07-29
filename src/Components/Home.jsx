import React from 'react'
import "./Header.css"
import Data from './Data'
import Header from './Header'
import Footer from './Footer'
import About from '../About'
import Error from './Error'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Contact from './Contact'
import RestaurantMenu from './RestaurantMenu'


const Home = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const appRouter = createBrowserRouter(
  [
    {
      path : "/",
      element: <Home/>,
      children:[
        {
          path: "/",
          element:<Data/>
        },
        {
      path : "/about",
      element: <About/>
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      path : "/restaurant/:id", //resid is a dynamic path
      element: <RestaurantMenu/>
    }
      ],
      errorElement:<Error/>
    },
    
  ]
)


const AppRouter = () => <RouterProvider router={appRouter} />;

export default AppRouter;