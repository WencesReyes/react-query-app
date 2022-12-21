import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Home from './pages/Home'
import Superheroes from './pages/Superheroes'
import RQSuperheroes from './pages/RQSuperheroes'
import NavLayout from './components/NavLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavLayout />}>
      <Route index element={<Home />} />
      <Route path="superheroes" element={<Superheroes />} />
      <Route path="rqsuperheroes" element={<RQSuperheroes />} />
    </Route>
  )
);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </ QueryClientProvider>
  )
}

export default App
