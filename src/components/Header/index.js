import { useContext } from 'react'
import './header.css'
import { AuthContext } from '../../contexts/auth'
import avatar from '../../assets/avatar.png'

import { Link } from 'react-router-dom'
import {
  FiPower,
  FiHome,
  FiUser,
  FiSettings,
  FiUsers,
} from 'react-icons/fi'

export default function Header() {
  const { user, signOut } = useContext(AuthContext)

  return (
    <div className="sidebar">
      <div>
        <img
          src={user.avatarUrl === null ? avatar : user.avatarUrl}
          alt="Foto avatar"
        />
        <p className="user_nome">{user.nome}</p>
        <p className="user_email">{user.email}</p>
      </div>

      <Link to="/dashboard">
        <FiHome color="#FFF" size={24} />
        Home
      </Link>
      <Link to="/dashboard">
        <FiUser color="#FFF" size={24} />
        Expedição
      </Link>
      <Link to="/customers">
        <FiUser color="#FFF" size={24} />
        Fiscal
      </Link>
      <Link to="/profile">
        <FiUsers color="#FFF" size={24} />
        Gente & Gestão
      </Link>
      <Link to="/profile">
        <FiUser color="#FFF" size={24} />
        Gerência
      </Link>
      <Link to="/profile">
        <FiUser color="#FFF" size={24} />
        Laboratório
      </Link>
      <Link to="/profile">
        <FiUser color="#FFF" size={24} />
        Manutenção
      </Link>
      <Link to="/profile">
        <FiUser color="#FFF" size={24} />
        PCP
      </Link>
      <Link to="/profile">
        <FiUser color="#FFF" size={24} />
        Produção
      </Link>
      <Link to="/profile">
        <FiUser color="#FFF" size={24} />
        Qualidade
      </Link>
      <Link to="/profile">
        <FiUser color="#FFF" size={24} />
        Rebobinadeira
      </Link>
      <Link to="/profile">
        <FiUser color="#FFF" size={24} />
        Refeitório
      </Link>
      <Link to="/profile">
        <FiUser color="#FFF" size={24} />
        Seg. Trabalho
      </Link>
      <Link to="/profile">
        <FiUser color="#FFF" size={24} />
        SGQ
      </Link>
      <Link to="/profile">
        <FiUser color="#FFF" size={24} />
        TI
      </Link>
      <Link to="/profile">
        <FiSettings color="#FFF" size={24} />
        Configurações
      </Link>

      <Link onClick={() => signOut()}>
        <FiPower color="#FFF" size={24} />
        Sair
      </Link>
    </div>
  )
}
