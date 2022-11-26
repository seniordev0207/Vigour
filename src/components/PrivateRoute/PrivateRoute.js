import React from 'react';
import { Redirect, Route } from 'react-router';
import useUserContext from '../../hooks/useUserContext';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, userLoading } = useUserContext();
    return (
        <Route {...rest}
            render={
                ({ location }) => user ? children :
                    userLoading ? (<h1
                        className="display-2 text-center fw-bold py-5 my-5"><span className='gradient-text'>Loading...</span></h1>)
                        : (<Redirect to={{
                            pathname: '/login',
                            state: { from: location }
                        }} />)

            } />
    )
}
export default PrivateRoute;