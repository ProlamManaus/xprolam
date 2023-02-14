import './dashboard.css'
// import { useState, useEffect, useContext } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import Header from "../../components/Header";
// import Title from "../../components/Title";
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
      <h1> ---------------------{'>'} Pagina de Dashboard</h1>
      <button onClick={() => signOut()}>
        -------------------------------------------------- Fazer Logout
      </button>
    </div>
    // <AuthProvider>
    //   <BrowserRouter>
    //     <ToastContainer autoClose={2000} />
    //     <Routes />
    //   </BrowserRouter>
    // </AuthProvider>
  )
}
