import React from 'react'

export const PrivateRoute = ({children}) => {
  
    const { user } = useSelector((state) => state.user);
    return user?.uid ? children : <Navigate to="/signin" />;
  
}
