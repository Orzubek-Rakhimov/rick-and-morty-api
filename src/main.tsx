import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
// import 'normalize.css'
import './sass/main.scss'
import router from './utils/route'
import { Loader } from './components'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <React.Suspense fallback={
        <div className='spinner-container'>
          <Loader size={64} />
        </div>
      }>
        <RouterProvider router={router} />
      </React.Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)
