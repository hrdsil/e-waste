import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Sidebar from '../VendorDashboardComp/Sidebar/Sidbebar';
import Dashboard from '../VendorDashboardComp/Dashboard/Dashboard';
import History from '../VendorDashboardComp/History/History';
import Cart from '../VendorDashboardComp/Cart/Cart';

const DashboardVendor = () => {
  return (
    <div>
        <Sidebar />
        <Routes>
            <Route exact path='/' element={<Dashboard />} />
            <Route exact path='/history' element={<History />} />
            <Route exact path='/cart' element={<Cart />} />
        </Routes>
    </div>
  )
}

export default DashboardVendor