import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// 1- configuração
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from 'react-router-dom'

// import SignIn from './pages/SignIn'
// import SignUp from './pages/SignUp'

// const router = createBrowserRouter (
//   [
//     {
//     path:"/", element:<SignIn />
//   },
//   {
//     path:"SignUp", element:<SignUp />
//   }
// ])

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
)
