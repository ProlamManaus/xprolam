import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/auth";
import Routes from "./routesX";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    // <div className="App">
    //   <h1>Prolam</h1>
    // </div>
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer autoClose={2000} />
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
