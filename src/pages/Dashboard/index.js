import './dashboard.css'
// import { useState, useEffect, useContext } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import Header from '../../components/Header'
import Title from '../../components/Title'

// import Title from "../../components/Title";

import { FiSettings } from 'react-icons/fi'
// import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from "react-icons/fi";

// import { Link } from 'react-router-dom'
// import { format } from "date-fns";

// import firebase from '../../services/firebaseConnection'
// import Modal from "../../components/Modal";

export default function Dashboard() {
  const { signOut } = useContext(AuthContext)
  // const [chamados, setChamados] = useState([])
  // const [loading, setLoading] = useState(true)
  // const [loadingMore, setLoadingMore] = useState(false)
  // const [isEmpty, setIsEmpty] = useState(false)
  // const [lastDocs, setLastDocs] = useState()

  // const [showPostModal, setShowPostModal] = useState(false)
  // const [detail, setDetail] = useState()

  return (
    <div className="App">
      <Header />

      <div className="content">
        <Title name="Prolam Manaus">
          <FiSettings size={25} />
        </Title>
        <button className="logout-btn" onClick={() => signOut()}>
            Sair do Sistema
          </button>
      </div>

    </div>
    // <AuthProvider>
    //   <BrowserRouter>
    //     <ToastContainer autoClose={2000} />
    //     <Routes />
    //   </BrowserRouter>
    // </AuthProvider>
  )
}
