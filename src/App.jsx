import './index.css'
import { useEffect, useState } from 'react'
import { images } from './data/siteData'
import { AdminPage } from './pages/AdminPage'
import { BioPage } from './pages/BioPage'
import { HomePage } from './pages/HomePage'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const route = window.location.pathname

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1800)
    return () => window.clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <main className="app-loader" aria-live="polite" aria-busy="true">
        <img src={images.logo} alt="La Nave Restaurante e Pizzaria" />
        <span>Carregando</span>
        <div className="loader-bar">
          <i />
        </div>
      </main>
    )
  }

  if (route.startsWith('/bio')) {
    return <BioPage />
  }

  if (route.startsWith('/admin')) {
    return <AdminPage />
  }

  return <HomePage />
}

export default App
