import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const { isLoggedIn } = useSelector(state => state.user);

  return isLoggedIn ? <Outlet /> : <Navigate to="/users/login" replace />;
};

export default PrivateRoute;
