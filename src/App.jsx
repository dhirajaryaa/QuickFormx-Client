import { Toaster } from './components/ui/sonner';
import LandingPage from './pages/LandingPage';
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  )
}

export default App
