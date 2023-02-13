// import { useContext } from 'react';
import {
  // Route,
  // Redirect,
  Navigate,
  Outlet,
  // Link
} from 'react-router-dom'
// import { AuthContext } from '../contexts/auth';

export default function RouteWrapper({
  element: Element,
  isPrivate,
  ...rest
}) {
  // export default function RouteWrapper({
  //   isPrivate,
  // }) {
  //  const { signed } = useContext(AuthContext);
  //  const { signed, loading } = useContext(AuthContext);

  const loading = false
  const signed = false

  if (loading) {
    return <div></div>
  }

  if (!signed && isPrivate) {
    // return <Redirect to="/" />
    return <Navigate to="/" />
  }

  if (signed && !isPrivate) {
    // return <Redirect to="/" />
    return <Navigate to="/" />
  }

  return (
    // <Route
    <Outlet
      {...rest}
      render={(props) => <Element {...props} />}
    />
  )
  // return <Outlet />
}
