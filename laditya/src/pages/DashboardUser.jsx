import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Sidebar from '../UserDashboardComp/Sidebar/Sidebar';
import Dashboard from '../UserDashboardComp/Dashboard/Dashboard';
import Cart from '../UserDashboardComp/Cart/Cart';
import History from '../UserDashboardComp/History/History';
import Settings from '../UserDashboardComp/Settings/Settings';


const DashboardUser = () => {
    return (
        <div>
            <Sidebar />
            <Routes>
                <Route exact path='/' element={<Dashboard />} />
                <Route exact path='/cart' element={<Cart />} />
                <Route exact path='/history' element={<History />} />
                <Route exact path='/settings' element={<Settings />} />
            </Routes>
        </div>
    )
}

export default DashboardUser