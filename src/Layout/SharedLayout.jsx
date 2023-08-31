import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';

const SharedLayout = () => {
    return (
        <div>
            <Header />
            <Suspense>
                {' '}
                <Outlet />
            </Suspense>
        </div>
    );
};

export default SharedLayout;
