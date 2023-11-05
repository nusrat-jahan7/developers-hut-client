import NavBar from './components/Navbar'
import './index.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
            <NavBar/>
            <Outlet/> 
    </>
  )
}

export default App
