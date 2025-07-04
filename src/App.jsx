import { Outlet } from 'react-router-dom';
import ScrollToTop from './Component/ScrollToTop.jsx';
import Navbar from './Component/Navbar.jsx'
import Footer from './Component/Footer.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar /> 
      
      <main>
        <Outlet />
      </main>

      <Footer /> 
    </>
  );
}
