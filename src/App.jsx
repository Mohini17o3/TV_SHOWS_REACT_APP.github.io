import { useState } from 'react'
import './App.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import ShowList from './components/showList';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowSummary from './components/showSummary';

const router  = createBrowserRouter([{
  path: '/',
  element: <ShowList />,
  errorElement : <div><h2> 404 Not found</h2></div>
},
{
  path: '/show/:id',
  element: <ShowSummary />
}]);
function App() {
  return (
    <>
     <RouterProvider router ={router} />
    </>
  )
}

export default App;
