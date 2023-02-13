import { useState, createContext, useEffect } from 'react'
import firebase from '../services/firebaseConnection'
import { toast } from 'react-toastify'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  // const [user, setUser] = useState({ id: 1, nome: 'Marcell Souza' });
  const [user, setUser] = useState(null)
  const [loadingAuth, setLoadingAuth] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    function loadStorage() {
      const storageUser = localStorage.getItem('SistemaUser')
      if (storageUser) {
        setUser(JSON.parse(storageUser))
        setLoading(false)
      }
      setLoading(false)
    }
    loadStorage()
  }, [])

  async function signUp(email, password, nome) {
    setLoadingAuth(true)

    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid

        // vamos no banco cadastrar
        await firebase
          .firestore()
          .collection('users')
          .doc(uid)
          .set({
            nome: nome,
            avatarUrl: null,
          })
          // Deu tudo certo, passa por aqui
          .then(() => {
            let data = {
              uid: uid,
              nome: nome,
              email: value.user.email,
              avatarUrl: null,
            }
            setUser(data)
            storageUser(data)
            setLoadingAuth(false)
            toast.success('Bem vindo a plataforma!')
          })
      })
      .catch((error) => {
        console.log(error)
        toast.error('Ops algo deu errado!')
        setLoadingAuth(false)
      })
  }

  // salvar no localStorage
  function storageUser(data) {
    localStorage.setItem('SistemaUser', JSON.stringify(data))
  }

  //Logout do usuario
  async function signOut() {
    await firebase.auth().signOut()
    localStorage.removeItem('SistemaUser') // limpar o localStorage
    toast.success('Sistema finalizado com sucesso!')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        signUp,
        signOut,
        // signIn,
        // loadingAuth,
        // setUser,
        // storageUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
