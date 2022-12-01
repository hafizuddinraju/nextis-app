import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup';
import Test from '../test/Test'

 export const router = createBrowserRouter([
    {path:'/', element:<Signup></Signup>},
    {path:'/signup', element:<Signup></Signup>},
    {path:'/login', element:<Login></Login>},
    {path:'/test', element:<Test></Test>},
])