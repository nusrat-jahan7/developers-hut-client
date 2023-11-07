import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import "./index.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto px-5 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
