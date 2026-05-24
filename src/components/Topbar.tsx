import Icon from './Icon'

interface TopbarProps {
  onMenuClick: () => void
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button
          type="button"
          className="icon-button menu-button"
          aria-label="Open navigation"
          onClick={onMenuClick}
        >
          <Icon name="menu" />
        </button>
        <div className="search">
          <Icon name="search" />
          <input
            type="text"
            placeholder="Search students, parents, classrooms…"
          />
        </div>
      </div>
      <div className="topbar-actions">
        <button className="icon-button hide-mobile" aria-label="Calendar">
          <Icon name="calendar" />
        </button>
        <button className="icon-button" aria-label="Notifications">
          <Icon name="bell" />
          <span className="dot" />
        </button>
      </div>
    </header>
  )
}
