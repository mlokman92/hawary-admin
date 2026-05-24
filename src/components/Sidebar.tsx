import { NavLink } from 'react-router-dom'
import Icon, { type IconName } from './Icon'

interface NavItem {
  to: string
  label: string
  icon: IconName
  end?: boolean
}

const mainNav: NavItem[] = [
  { to: '/', label: 'Dashboard', icon: 'dashboard', end: true },
  { to: '/classrooms', label: 'Classrooms', icon: 'classrooms' },
  { to: '/students', label: 'Students', icon: 'students' },
  { to: '/staff', label: 'Staff', icon: 'staff' },
  { to: '/invoicing', label: 'Invoicing', icon: 'invoicing' },
]

const secondaryNav: NavItem[] = [
  { to: '/settings', label: 'Settings', icon: 'settings' },
  { to: '/help', label: 'Help & Support', icon: 'help' },
]

interface SidebarProps {
  onClose: () => void
}

export default function Sidebar({ onClose }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="logo-mark">H</div>
        <div className="brand-text">
          <span className="brand-name">Hawary Pro</span>
          <span className="brand-sub">Admin</span>
        </div>
        <button
          type="button"
          className="sidebar-close"
          aria-label="Close navigation"
          onClick={onClose}
        >
          <Icon name="close" size={18} />
        </button>
      </div>

      <div className="sidebar-section-label">Menu</div>
      <nav className="sidebar-nav">
        {mainNav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              isActive ? 'sidebar-link active' : 'sidebar-link'
            }
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-section-label">General</div>
      <nav className="sidebar-nav">
        {secondaryNav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive ? 'sidebar-link active' : 'sidebar-link'
            }
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="avatar">NS</div>
          <div className="sidebar-user-info">
            <span className="name">Linda</span>
            <span className="role">Principal</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
