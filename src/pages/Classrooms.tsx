import Icon from '../components/Icon'

interface Classroom {
  name: string
  ageGroup: string
  teacher: string
  teacherInitials: string
  assistant: string
  enrolled: number
  capacity: number
  banner: string
  accent: string
}

const classrooms: Classroom[] = [
  {
    name: 'Pelangi',
    ageGroup: '4–5 years',
    teacher: 'Cikgu Aisyah',
    teacherInitials: 'CA',
    assistant: 'Cikgu Farah',
    enrolled: 20,
    capacity: 22,
    banner: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
    accent: 'var(--accent-blue)',
  },
  {
    name: 'Cempaka',
    ageGroup: '3–4 years',
    teacher: 'Cikgu Fatimah',
    teacherInitials: 'CF',
    assistant: 'Cikgu Hana',
    enrolled: 16,
    capacity: 18,
    banner: 'linear-gradient(135deg, #ec4899, #f472b6)',
    accent: 'var(--accent-pink)',
  },
  {
    name: 'Mawar',
    ageGroup: '5–6 years',
    teacher: 'Cikgu Siti',
    teacherInitials: 'CS',
    assistant: 'Cikgu Liyana',
    enrolled: 22,
    capacity: 24,
    banner: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
    accent: 'var(--accent-violet)',
  },
  {
    name: 'Bintang',
    ageGroup: '2–3 years',
    teacher: 'Cikgu Nadia',
    teacherInitials: 'CN',
    assistant: 'Cikgu Maya',
    enrolled: 12,
    capacity: 14,
    banner: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
    accent: 'var(--accent-amber)',
  },
  {
    name: 'Teratai',
    ageGroup: '4–5 years',
    teacher: 'Cikgu Zara',
    teacherInitials: 'CZ',
    assistant: 'Cikgu Iman',
    enrolled: 20,
    capacity: 22,
    banner: 'linear-gradient(135deg, #10b981, #34d399)',
    accent: 'var(--accent-emerald)',
  },
  {
    name: 'Anggerik',
    ageGroup: '3–4 years',
    teacher: 'Cikgu Rahimah',
    teacherInitials: 'CR',
    assistant: 'Cikgu Yati',
    enrolled: 17,
    capacity: 18,
    banner: 'linear-gradient(135deg, #06b6d4, #22d3ee)',
    accent: 'var(--accent-cyan)',
  },
  {
    name: 'Kenanga',
    ageGroup: '5–6 years',
    teacher: 'Cikgu Aminah',
    teacherInitials: 'CA',
    assistant: 'Cikgu Eliza',
    enrolled: 19,
    capacity: 22,
    banner: 'linear-gradient(135deg, #f43f5e, #fb7185)',
    accent: 'var(--accent-rose)',
  },
  {
    name: 'Melati',
    ageGroup: '2–3 years',
    teacher: 'Cikgu Wati',
    teacherInitials: 'CW',
    assistant: 'Cikgu Nora',
    enrolled: 10,
    capacity: 14,
    banner: 'linear-gradient(135deg, #84cc16, #a3e635)',
    accent: 'var(--accent-lime)',
  },
]

export default function Classrooms() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Classrooms</h1>
          <p>8 active classrooms · 136 enrolled students</p>
        </div>
        <div className="filter-group">
          <button className="btn btn-secondary">
            <Icon name="filter" />
            Filter
          </button>
          <button className="btn btn-primary">
            <Icon name="plus" />
            Add classroom
          </button>
        </div>
      </div>

      <div className="classroom-grid">
        {classrooms.map((c) => {
          const pct = Math.round((c.enrolled / c.capacity) * 100)
          return (
            <div key={c.name} className="classroom-card">
              <div
                className="classroom-card-banner"
                style={{ background: c.banner }}
              />
              <div className="classroom-card-body">
                <div className="classroom-card-title">{c.name}</div>
                <div className="classroom-card-age">{c.ageGroup}</div>

                <div className="classroom-card-teacher">
                  <div
                    className="avatar-sm"
                    style={{ background: c.accent }}
                  >
                    {c.teacherInitials}
                  </div>
                  <div>
                    <div className="name">{c.teacher}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
                      Assistant: {c.assistant}
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: 14 }}>
                  <div className="classroom-card-capacity">
                    <span>Capacity</span>
                    <span>
                      <strong>{c.enrolled}</strong> / {c.capacity}
                    </span>
                  </div>
                  <div className="attendance-bar">
                    <span
                      style={{ width: `${pct}%`, background: c.accent }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
