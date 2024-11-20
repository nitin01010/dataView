import { Outlet, Navigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const PublicRoute = () => {
  const { user, isLoading } = useAuth0();
  
  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return user ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoute;
