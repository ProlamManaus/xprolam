import { Routes as Switch } from 'react-router-dom'
// import { Routes , Route } from 'react-router-dom'
// import { Routes } from 'react-router-dom'

import { Route } from 'react-router-dom'
// import Route from './Route'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'

// import { useState } from 'react'

export default function RoutesX() {

  // const [user, setUser] = useState(null)
  // if (user.nome === '') {
    // console.log(`Nome: [${user.nome}]`)
  // }

  return (
    <Switch>
      {/* <Route element={<Route />}> */}
      {/* <Route exact path="/" component={SignIn} /> */}

      <Route path="/" element={<SignIn />} />
      <Route path="/Register" element={<SignUp />} />
      <Route path="/Dashboard" element={<Dashboard />} />

      {/* </Route> */}
    </Switch>
  )
}
