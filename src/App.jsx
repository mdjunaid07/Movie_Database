import Footer from "./components/Footer"
import Header from "./components/Header"
import { AllRoutes } from "./routes/AllRoutes"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {
  return (
    <>
     <ToastContainer/>
     <Header/>
     <AllRoutes/>
     <Footer/>
    </>
  )
}

export default App