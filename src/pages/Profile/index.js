import { useState, useContext } from 'react'
import './profile.css'
import Header from '../../components/Header'
import Title from '../../components/Title'
import avatar from '../../assets/avatar.png'

// import { toast } from 'react-toastify';

// import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth'

import { FiSettings, FiUpload } from 'react-icons/fi'

export default function Profile() {
  const { user, signOut, setUser, storageUser } =
    useContext(AuthContext)

  const [nome, setNome] = useState(user && user.nome)
  const [email, setEmail] = useState(user && user.email)

  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl)
  const [imageAvatar, setImageAvatar] = useState(null)

  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Meu perfil">
          <FiSettings size={25} />
        </Title>

        <div className="container">
          {/* <form className="form-profile" onSubmit={handleSave}> */}
          <form className="form-profile">
            <label className="label-avatar">
              <span>
                <FiUpload color="#FFF" size={25} />
              </span>
              {/* <input type="file" accept="image/*" onChange={handleFile} /><br /> */}
              <input type="file" accept="image/*" />
              <br />
              {avatarUrl === null ? (
                <img
                  src={avatar}
                  width="250"
                  height="250"
                  alt="Foto de perfil do usuario"
                />
              ) : (
                <img
                  src={avatarUrl}
                  width="250"
                  height="250"
                  alt="Foto de perfil do usuario"
                />
              )}
            </label>
            <label>Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <label>Email</label>

            {user.email === 'marcell.souza@prolam.com.br' ? (
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              //        desabilita o e-mail -> disabled
              <input type="text" value={email} disabled={true} />
            )}

            <button type="submit">Salvar</button>
          </form>
        </div>
        <div className="container">
          <button className="logout-btn" onClick={() => signOut()}>
            Sair do Sistema
          </button>
        </div>
      </div>
    </div>
  )
}
