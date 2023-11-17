import React from 'react'
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from 'react';

import DefaultLayout from './Layouts/DefaultLayout';

import Homepage from './Pages/Homepage';

const App = () => {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <Routes>
      <Route path="" element={<DefaultLayout />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  )
}

export default App
