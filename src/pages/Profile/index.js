// import { useState, useContext } from 'react';
import './profile.css'
import Header from '../../components/Header'
import Title from '../../components/Title'
// import avatar from '../../assets/avatar.png';
// import { toast } from 'react-toastify';

// import firebase from '../../services/firebaseConnection';
// import { AuthContext } from '../../contexts/auth';

import { FiSettings, FiUpload } from 'react-icons/fi'

export default function Profile() {
  return (
    <div>
      <Header />
      {/* <h1>----------------------------------------Meu perfil</h1> */}

      <div className="content">
        <Title name="Meu perfil">
          <FiSettings size={25} />
        </Title>
      </div>

      <span>
        <FiUpload color="#FFF" size={25} />
      </span>
    </div>
  )
}
