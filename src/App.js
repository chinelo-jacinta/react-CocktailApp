import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/Home';
import Error from './components/Error';
import About from './components/About';
import Logins from './components/Logins';
import Dashboard from './components/Dashboard';
import SingleProduct from './components/SingleProduct';
import GeneralSharedLayout from './components/GeneralSharedLayout';
import DashboardProtection from './components/DashboardProtection';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GeneralSharedLayout />}>
            <Route index element={<Home />} />
            <Route path='*' element={<Error />} />
            <Route path='about' element={<About />} />

            <Route path='login' element={<Logins />} />
            <Route path='products/:name' element={<SingleProduct />} />
            <Route
              path='/dashboard'
              element={
                <DashboardProtection>
                  <Dashboard />
                </DashboardProtection>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
