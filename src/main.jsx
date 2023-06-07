import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Router';
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container mx-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
