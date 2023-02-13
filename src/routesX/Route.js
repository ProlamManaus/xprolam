import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/auth'

export default function RouteWrapper({
  element: Element,
  isPrivate,
  ...rest
}) {
  const { signed, loading } = useContext(AuthContext)

  if (loading) {
    return <div></div>
  }

  if (!signed && isPrivate) {
    return <Navigate to="/" />
  }

  if (signed && !isPrivate) {
    return <Navigate to="/dashboard" />
  }

  return (
    <Outlet {...rest} render={(props) => <Element {...props} />} />
  )
}
