import React, { useState, useLayoutEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Login from './Login';
import Dashboard from './dashboard/index';
import DashboardSecond from './dashboard/DashboardSecond';
import SidebarLeft from './layouts/SidebarLeft';
import SidebarRight from './layouts/SidebarRight';
import HeaderTabbar from './layouts/HeaderTabbar';

import Personal from './personal/index';
import CurrentAccount from './curaccount/index';

export default function App() {
    const [,setWindowWidth] = useState(1366);
    const [isSidebarCollapsed, setCollapsed] = useState(true);

    useLayoutEffect(() => {
        function updateSize() {
            setWindowWidth(prevWidth => {
                if (prevWidth >= 768 && window.innerWidth < 768) {
                    setCollapsed(true);
                }
                return window.innerWidth;
            });
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />

                <Route path="">
                    <div className="min-h-screen">
                        <SidebarLeft isSidebarCollapsed={isSidebarCollapsed} onToggle={setCollapsed} />

                        <div className={`pr-13 transition-all min-h-screen flex flex-col ${isSidebarCollapsed ? 'pl-13' : 'pl-60'}`}>
                            <HeaderTabbar />
                            <Switch>
                                <Route path="/dashboard" component={Dashboard} />

                                <Route path="/dashboard-second" component={DashboardSecond} />

                                <Route path="/personal" component={Personal} />

                                <Route path="/current-account" component={CurrentAccount} />
                                
                                <Redirect to="/login" />
                            </Switch>
                        </div>

                        <SidebarRight />
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}