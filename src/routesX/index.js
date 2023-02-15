import { Routes as Switch } from 'react-router-dom'
import { Navigate, Outlet, Route } from 'react-router-dom'
// import Route from './Route'

import { useContext } from 'react'

import { AuthContext } from '../contexts/auth'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

import Profile from '../pages/Profile';
import Expedicao from '../pages/Expedicao';
import Fiscal from '../pages/Fiscal';
import GenteGestao from '../pages/GenteGestao';
import Gerencia from '../pages/Gerencia';
import Laboratorio from '../pages/Laboratorio';
import Manutencao from '../pages/Manutencao';
import PCP from '../pages/PCP';
import Producao from '../pages/Producao';
import Qualidade from '../pages/Qualidade';
import Portaria from '../pages/Portaria';
import Rebobinadeira from '../pages/Rebobinadeira';
import Refeitorio from '../pages/Refeitorio';
import SegTrabalho from '../pages/SegTrabalho';
import SGQ from '../pages/SGQ';
import TI from '../pages/TI';
// import Customers from '../pages/Customers';
// import New from '../pages/New';

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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/expedicao" element={<Expedicao />} />
        <Route path="/fiscal" element={<Fiscal />} />
        <Route path="/genteGestao" element={<GenteGestao />} />
        <Route path="/gerencia" element={<Gerencia />} />
        <Route path="/laboratorio" element={<Laboratorio />} />
        <Route path="/manutencao" element={<Manutencao />} />
        <Route path="/pcp" element={<PCP />} />
        <Route path="/producao" element={<Producao />} />
        <Route path="/qualidade" element={<Qualidade />} />
        <Route path="/portaria" element={<Portaria />} />
        <Route path="/rebobinadeira" element={<Rebobinadeira />} />
        <Route path="/refeitorio" element={<Refeitorio />} />
        <Route path="/segTrabalho" element={<SegTrabalho />} />
        <Route path="/sgq" element={<SGQ />} />
        <Route path="/ti" element={<TI />} />
      </Route>
    </Switch>
  )
}
