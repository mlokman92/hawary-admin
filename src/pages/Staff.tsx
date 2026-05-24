import Icon from '../components/Icon'

interface StaffMember {
  name: string
  initials: string
  role: string
  email: string
  phone: string
  accent: string
  status: 'on-duty' | 'leave' | 'off'
}

const staff: StaffMember[] = [
  { name: 'Nurul Syazwani', initials: 'NS', role: 'Principal', email: 'syazwani@hawary.my', phone: '+60 12-100 2200', accent: 'var(--accent-violet)', status: 'on-duty' },
  { name: 'Cikgu Aisyah Mohd', initials: 'CA', role: 'Teacher · Pelangi', email: 'aisyah@hawary.my', phone: '+60 13-241 5567', accent: 'var(--accent-blue)', status: 'on-duty' },
  { name: 'Cikgu Fatimah Yusof', initials: 'CF', role: 'Teacher · Cempaka', email: 'fatimah@hawary.my', phone: '+60 11-330 4421', accent: 'var(--accent-pink)', status: 'on-duty' },
  { name: 'Cikgu Siti Khadijah', initials: 'CS', role: 'Teacher · Mawar', email: 'siti.k@hawary.my', phone: '+60 17-882 9911', accent: 'var(--accent-rose)', status: 'on-duty' },
  { name: 'Cikgu Nadia Hisham', initials: 'CN', role: 'Teacher · Bintang', email: 'nadia@hawary.my', phone: '+60 19-441 7733', accent: 'var(--accent-amber)', status: 'on-duty' },
  { name: 'Cikgu Zara Hakim', initials: 'CZ', role: 'Teacher · Teratai', email: 'zara@hawary.my', phone: '+60 14-552 6688', accent: 'var(--accent-emerald)', status: 'leave' },
  { name: 'Cikgu Rahimah Ali', initials: 'CR', role: 'Teacher · Anggerik', email: 'rahimah@hawary.my', phone: '+60 16-991 4422', accent: 'var(--accent-cyan)', status: 'on-duty' },
  { name: 'Cikgu Farah Diana', initials: 'CF', role: 'Assistant Teacher', email: 'farah@hawary.my', phone: '+60 18-202 8800', accent: 'var(--accent-lime)', status: 'on-duty' },
  { name: 'Encik Halim Razak', initials: 'HR', role: 'Admin Officer', email: 'halim@hawary.my', phone: '+60 12-700 1144', accent: 'var(--accent-blue)', status: 'on-duty' },
  { name: 'Puan Norliza Ahmad', initials: 'NA', role: 'Nurse', email: 'norliza@hawary.my', phone: '+60 13-808 5577', accent: 'var(--accent-pink)', status: 'on-duty' },
  { name: 'Cikgu Liyana Rusli', initials: 'LR', role: 'Assistant Teacher', email: 'liyana@hawary.my', phone: '+60 11-444 1100', accent: 'var(--accent-violet)', status: 'off' },
  { name: 'Encik Faizal Hassan', initials: 'FH', role: 'Driver', email: 'faizal@hawary.my', phone: '+60 19-660 2233', accent: 'var(--accent-amber)', status: 'on-duty' },
]

const statusBadge = {
  'on-duty': { label: 'On duty', cls: 'success' },
  leave: { label: 'On leave', cls: 'warning' },
  off: { label: 'Off today', cls: 'info' },
} as const

export default function Staff() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Staff</h1>
          <p>24 staff members · 22 on duty today</p>
        </div>
        <div className="filter-group">
          <button className="btn btn-secondary">
            <Icon name="filter" />
            Filter
          </button>
          <button className="btn btn-primary">
            <Icon name="plus" />
            Add staff
          </button>
        </div>
      </div>

      <div className="staff-grid">
        {staff.map((s) => {
          const badge = statusBadge[s.status]
          return (
            <div key={s.email} className="staff-card">
              <div className="staff-card-top">
                <div
                  className="avatar-sm"
                  style={{
                    background: s.accent,
                    width: 44,
                    height: 44,
                    fontSize: 14,
                  }}
                >
                  {s.initials}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="staff-card-name">{s.name}</div>
                  <div className="staff-card-role">{s.role}</div>
                </div>
                <span className={`badge ${badge.cls}`}>
                  <span className="dot-sm" />
                  {badge.label}
                </span>
              </div>
              <div className="staff-card-meta">
                <div>
                  <Icon name="mail" />
                  <span>{s.email}</span>
                </div>
                <div>
                  <Icon name="phone" />
                  <span>{s.phone}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
