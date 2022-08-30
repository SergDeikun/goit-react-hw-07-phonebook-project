import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function PublicRoute() {
  const { isLoggedIn } = useSelector(state => state.user);

  // const showRedirect = isLoggedIn && restricted;

  return isLoggedIn ? <Outlet /> : <Navigate to="/contacts" replace />;
}
