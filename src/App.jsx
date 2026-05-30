import './index.css'
import { AdminPage } from './pages/AdminPage'
import { BioPage } from './pages/BioPage'
import { HomePage } from './pages/HomePage'

function App() {
  const route = window.location.pathname

  if (route.startsWith('/bio')) {
    return <BioPage />
  }

  if (route.startsWith('/admin')) {
    return <AdminPage />
  }

  return <HomePage />
}

export default App
