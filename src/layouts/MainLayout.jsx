import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='max-w-6xl mx-auto'>
                 <Outlet></Outlet>
            </div>
           
        </div>
    );
};

export default MainLayout;