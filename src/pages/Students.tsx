import Icon from '../components/Icon'

interface Student {
  name: string
  initials: string
  age: number
  classroom: string
  parent: string
  parentPhone: string
  status: 'present' | 'absent' | 'leave'
  accent: string
}

const students: Student[] = [
  { name: 'Aiman Hakimi bin Razali', initials: 'AH', age: 5, classroom: 'Pelangi', parent: 'Encik Razali', parentPhone: '+60 12-345 6789', status: 'present', accent: 'var(--accent-blue)' },
  { name: 'Nur Sofea Damia', initials: 'NS', age: 5, classroom: 'Pelangi', parent: 'Puan Marina', parentPhone: '+60 13-987 6543', status: 'present', accent: 'var(--accent-pink)' },
  { name: 'Adam Iqmal Hakim', initials: 'AI', age: 4, classroom: 'Cempaka', parent: 'Puan Suriana', parentPhone: '+60 11-222 3344', status: 'leave', accent: 'var(--accent-emerald)' },
  { name: 'Mei Ling Tan', initials: 'ML', age: 4, classroom: 'Pelangi', parent: 'Mr. Tan Wei Sheng', parentPhone: '+60 16-555 8899', status: 'present', accent: 'var(--accent-amber)' },
  { name: 'Krishnan Raj a/l Mahendran', initials: 'KR', age: 5, classroom: 'Mawar', parent: 'Mrs. Priya', parentPhone: '+60 17-441 9921', status: 'present', accent: 'var(--accent-violet)' },
  { name: 'Putri Aisha Zafira', initials: 'PA', age: 6, classroom: 'Mawar', parent: 'Encik Faris', parentPhone: '+60 19-877 6655', status: 'present', accent: 'var(--accent-rose)' },
  { name: 'Daniel Wong Jun Hao', initials: 'DW', age: 5, classroom: 'Mawar', parent: 'Mr. Wong', parentPhone: '+60 12-998 1234', status: 'absent', accent: 'var(--accent-cyan)' },
  { name: 'Iman Najwa binti Hafiz', initials: 'IN', age: 3, classroom: 'Bintang', parent: 'Puan Salina', parentPhone: '+60 14-321 0987', status: 'present', accent: 'var(--accent-blue)' },
  { name: 'Lucas Chong Wei Jie', initials: 'LC', age: 4, classroom: 'Cempaka', parent: 'Mrs. Chong', parentPhone: '+60 18-666 7777', status: 'present', accent: 'var(--accent-lime)' },
  { name: 'Zara Adriana binti Imran', initials: 'ZA', age: 5, classroom: 'Teratai', parent: 'Puan Hidayah', parentPhone: '+60 13-444 5566', status: 'present', accent: 'var(--accent-pink)' },
  { name: 'Harith Danial bin Azlan', initials: 'HD', age: 3, classroom: 'Bintang', parent: 'Encik Azlan', parentPhone: '+60 11-110 2030', status: 'present', accent: 'var(--accent-emerald)' },
  { name: 'Sarah Lim Xin Yi', initials: 'SL', age: 4, classroom: 'Anggerik', parent: 'Mrs. Lim', parentPhone: '+60 12-777 8899', status: 'present', accent: 'var(--accent-violet)' },
]

const statusBadge = {
  present: { label: 'Present', cls: 'success' },
  absent: { label: 'Absent', cls: 'danger' },
  leave: { label: 'On leave', cls: 'warning' },
} as const

export default function Students() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Students</h1>
          <p>136 enrolled · 12 new this term</p>
        </div>
        <div className="filter-group">
          <button className="btn btn-secondary">
            <Icon name="download" />
            Export
          </button>
          <button className="btn btn-primary">
            <Icon name="plus" />
            Add student
          </button>
        </div>
      </div>

      <div className="filter-row">
        <div className="filter-group">
          <button className="chip active">All · 136</button>
          <button className="chip">Pelangi · 20</button>
          <button className="chip">Cempaka · 16</button>
          <button className="chip">Mawar · 22</button>
          <button className="chip">Bintang · 12</button>
          <button className="chip">Teratai · 20</button>
        </div>
        <div className="filter-group">
          <button className="btn btn-secondary">
            <Icon name="filter" />
            More filters
          </button>
        </div>
      </div>

      <div className="card">
        <div className="card-body flush">
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Age</th>
                  <th>Classroom</th>
                  <th>Primary Parent</th>
                  <th>Contact</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => {
                  const badge = statusBadge[s.status]
                  return (
                    <tr key={s.name}>
                      <td>
                        <div className="cell-avatar">
                          <div
                            className="avatar-sm"
                            style={{ background: s.accent }}
                          >
                            {s.initials}
                          </div>
                          <span className="cell-strong">{s.name}</span>
                        </div>
                      </td>
                      <td className="cell-muted">{s.age} yrs</td>
                      <td>
                        <span className="badge primary">{s.classroom}</span>
                      </td>
                      <td>{s.parent}</td>
                      <td className="cell-muted">{s.parentPhone}</td>
                      <td>
                        <span className={`badge ${badge.cls}`}>
                          <span className="dot-sm" />
                          {badge.label}
                        </span>
                      </td>
                      <td className="right">
                        <button className="btn btn-ghost" aria-label="More">
                          <Icon name="more" />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
