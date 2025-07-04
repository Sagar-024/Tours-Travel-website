import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar.jsx'

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
export default MainLayout
