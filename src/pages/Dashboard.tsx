import Icon from '../components/Icon'
import StatCard from '../components/StatCard'

const attendance = [
  { classroom: 'Pelangi (4–5 yrs)', present: 18, total: 20, accent: 'var(--accent-blue)' },
  { classroom: 'Cempaka (3–4 yrs)', present: 14, total: 16, accent: 'var(--accent-pink)' },
  { classroom: 'Mawar (5–6 yrs)', present: 19, total: 22, accent: 'var(--accent-violet)' },
  { classroom: 'Bintang (2–3 yrs)', present: 11, total: 12, accent: 'var(--accent-amber)' },
  { classroom: 'Teratai (4–5 yrs)', present: 16, total: 20, accent: 'var(--accent-emerald)' },
]

const activity = [
  {
    icon: 'check' as const,
    tone: 'success' as const,
    title: <><strong>Aiman Hakimi</strong> was checked in by Cikgu Aisyah</>,
    time: '8 minutes ago',
  },
  {
    icon: 'invoicing' as const,
    tone: 'info' as const,
    title: <>Invoice <strong>#INV-2026-0421</strong> paid by Nur Hidayah</>,
    time: '24 minutes ago',
  },
  {
    icon: 'students' as const,
    tone: 'primary' as const,
    title: <>New enrollment: <strong>Mei Ling Tan</strong> joined Pelangi class</>,
    time: '1 hour ago',
  },
  {
    icon: 'clock' as const,
    tone: 'warning' as const,
    title: <><strong>Adam Iqmal</strong> marked absent — leave note from parent</>,
    time: '2 hours ago',
  },
  {
    icon: 'check' as const,
    tone: 'success' as const,
    title: <>Health screening completed for <strong>Cempaka</strong> class</>,
    time: '3 hours ago',
  },
]

const pickups = [
  { time: '12:30 PM', student: 'Aiman Hakimi', picker: 'Encik Razali (Father)', verified: true },
  { time: '12:30 PM', student: 'Sofea Damia', picker: 'Puan Marina (Mother)', verified: true },
  { time: '1:00 PM', student: 'Krishnan Raj', picker: 'Mrs. Priya (Mother)', verified: true },
  { time: '1:00 PM', student: 'Mei Ling Tan', picker: 'Auntie Lim (Authorized)', verified: true },
  { time: '5:30 PM', student: 'Putri Aisha', picker: 'Encik Faris (Father)', verified: false },
  { time: '5:30 PM', student: 'Daniel Wong', picker: 'Mr. Wong (Father)', verified: false },
]

export default function Dashboard() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Good morning, Linda 👋</h1>
          <p>Here's what's happening at Tadika Hawary today, Monday, 25 May 2026.</p>
        </div>
        <div className="filter-group">
          <button className="btn btn-secondary">
            <Icon name="download" />
            Export
          </button>
          <button className="btn btn-primary">
            <Icon name="plus" />
            Quick add
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard
          label="Total Students"
          value="128"
          icon="students"
          tone="indigo"
          trend="up"
          delta="+4"
          deltaLabel="this week"
        />
        <StatCard
          label="Present Today"
          value="118"
          icon="check"
          tone="emerald"
          trend="up"
          delta="92%"
          deltaLabel="attendance rate"
        />
        <StatCard
          label="Active Staff"
          value="24"
          icon="staff"
          tone="amber"
          trend="flat"
          delta="22 on duty"
        />
        <StatCard
          label="Outstanding Invoices"
          value="RM 4,580"
          icon="invoicing"
          tone="rose"
          trend="down"
          delta="-12%"
          deltaLabel="vs last month"
        />
      </div>

      <div className="grid-2col">
        <div className="card">
          <div className="card-header">
            <div>
              <h3>Today's Attendance</h3>
              <div className="subtitle">Live check-ins across all classrooms</div>
            </div>
            <button className="btn btn-ghost">View all</button>
          </div>
          <div className="card-body flush">
            {attendance.map((row) => {
              const pct = Math.round((row.present / row.total) * 100)
              return (
                <div key={row.classroom} className="attendance-row">
                  <div>
                    <div className="attendance-classroom">{row.classroom}</div>
                    <div className="attendance-meta">
                      {pct}% present · {row.total - row.present} absent
                    </div>
                  </div>
                  <div>
                    <div
                      className="attendance-bar"
                      role="progressbar"
                      aria-valuenow={pct}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span
                        style={{ width: `${pct}%`, background: row.accent }}
                      />
                    </div>
                    <div className="attendance-numbers">
                      <strong style={{ color: 'var(--text)' }}>{row.present}</strong> / {row.total}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div>
              <h3>Recent Activity</h3>
              <div className="subtitle">Latest events across the school</div>
            </div>
          </div>
          <div className="card-body flush">
            <div className="activity-list">
              {activity.map((item, i) => (
                <div key={i} className="activity-item">
                  <div className={`activity-icon ${item.tone}`}>
                    <Icon name={item.icon} />
                  </div>
                  <div className="activity-content">
                    <div className="title">{item.title}</div>
                    <div className="time">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div>
            <h3>Today's Pickup Schedule</h3>
            <div className="subtitle">Verified pickers and pickup windows</div>
          </div>
          <button className="btn btn-ghost">
            View schedule
            <Icon name="chevronRight" />
          </button>
        </div>
        <div className="card-body flush">
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Student</th>
                  <th>Picker</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {pickups.map((p, i) => (
                  <tr key={i}>
                    <td className="cell-strong">{p.time}</td>
                    <td>{p.student}</td>
                    <td className="cell-muted">{p.picker}</td>
                    <td>
                      {p.verified ? (
                        <span className="badge success">
                          <Icon name="check" size={12} />
                          Verified
                        </span>
                      ) : (
                        <span className="badge warning">
                          <span className="dot-sm" />
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="right">
                      <button className="btn btn-ghost" aria-label="More">
                        <Icon name="more" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
