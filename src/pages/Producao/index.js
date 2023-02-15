// import { useState, useContext } from 'react'
import './producao.css'
import Header from '../../components/Header'
import Title from '../../components/Title'
// import avatar from '../../assets/avatar.png'

// import { toast } from 'react-toastify'

// import firebase from '../../services/firebaseConnection'
// import { AuthContext } from '../../contexts/auth'

import { FiSettings } from 'react-icons/fi'

export default function Producao() {
 
  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Produção">
          <FiSettings size={25} />
        </Title>
     

      </div>
    </div>
  )
}
