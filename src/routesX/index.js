import { Routes as Switch } from 'react-router-dom'
import { Navigate, Outlet, Route } from 'react-router-dom'
// import Route from './Route'

import { useContext } from 'react'

import { AuthContext } from '../contexts/auth'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

function RouteWrapper({ element: Element, isPrivate, ...rest }) {
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

export default function RoutesX() {
  return (
    <Switch>
      <Route element={<RouteWrapper />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/Register" element={<SignUp />} />
      </Route>
      <Route element={<RouteWrapper isPrivate />}>
        <Route path="/Dashboard" element={<Dashboard />} />
      </Route>
    </Switch>
  )
}
