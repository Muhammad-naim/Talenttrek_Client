import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Router';
import './index.css'
import AuthProvider from './firebase/authProvider/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="container mx-auto font-poppins">
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </QueryClientProvider>


  </React.StrictMode>,
)
