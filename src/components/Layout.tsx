import { useEffect, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [navOpen, setNavOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setNavOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [navOpen])

  return (
    <div className={`layout${navOpen ? ' nav-open' : ''}`}>
      <Sidebar onClose={() => setNavOpen(false)} />
      <button
        type="button"
        className="nav-backdrop"
        aria-label="Close navigation"
        onClick={() => setNavOpen(false)}
      />
      <div className="main-area">
        <Topbar onMenuClick={() => setNavOpen(true)} />
        {children}
      </div>
    </div>
  )
}
