import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Router';
import './index.css'
import AuthProvider from './firebase/authProvider/AuthProvider';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <div className="container mx-auto font-poppins">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>

  </React.StrictMode>,
)
