import Icon from '../components/Icon'
import StatCard from '../components/StatCard'

interface Invoice {
  number: string
  student: string
  parent: string
  amount: string
  issued: string
  due: string
  status: 'paid' | 'pending' | 'overdue'
}

const invoices: Invoice[] = [
  { number: 'INV-2026-0501', student: 'Aiman Hakimi', parent: 'Encik Razali', amount: 'RM 480.00', issued: '01 May 2026', due: '15 May 2026', status: 'paid' },
  { number: 'INV-2026-0502', student: 'Nur Sofea Damia', parent: 'Puan Marina', amount: 'RM 480.00', issued: '01 May 2026', due: '15 May 2026', status: 'paid' },
  { number: 'INV-2026-0503', student: 'Adam Iqmal Hakim', parent: 'Puan Suriana', amount: 'RM 420.00', issued: '01 May 2026', due: '15 May 2026', status: 'pending' },
  { number: 'INV-2026-0504', student: 'Mei Ling Tan', parent: 'Mr. Tan Wei Sheng', amount: 'RM 480.00', issued: '01 May 2026', due: '15 May 2026', status: 'paid' },
  { number: 'INV-2026-0505', student: 'Krishnan Raj', parent: 'Mrs. Priya', amount: 'RM 520.00', issued: '01 May 2026', due: '15 May 2026', status: 'overdue' },
  { number: 'INV-2026-0506', student: 'Putri Aisha Zafira', parent: 'Encik Faris', amount: 'RM 520.00', issued: '01 May 2026', due: '15 May 2026', status: 'pending' },
  { number: 'INV-2026-0507', student: 'Daniel Wong', parent: 'Mr. Wong', amount: 'RM 520.00', issued: '01 May 2026', due: '15 May 2026', status: 'overdue' },
  { number: 'INV-2026-0508', student: 'Iman Najwa', parent: 'Puan Salina', amount: 'RM 380.00', issued: '01 May 2026', due: '15 May 2026', status: 'paid' },
  { number: 'INV-2026-0509', student: 'Lucas Chong', parent: 'Mrs. Chong', amount: 'RM 420.00', issued: '01 May 2026', due: '15 May 2026', status: 'paid' },
  { number: 'INV-2026-0510', student: 'Zara Adriana', parent: 'Puan Hidayah', amount: 'RM 480.00', issued: '01 May 2026', due: '15 May 2026', status: 'pending' },
]

const statusBadge = {
  paid: { label: 'Paid', cls: 'success' },
  pending: { label: 'Pending', cls: 'warning' },
  overdue: { label: 'Overdue', cls: 'danger' },
} as const

export default function Invoicing() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Invoicing</h1>
          <p>May 2026 billing cycle · 128 invoices issued</p>
        </div>
        <div className="filter-group">
          <button className="btn btn-secondary">
            <Icon name="download" />
            Export CSV
          </button>
          <button className="btn btn-primary">
            <Icon name="plus" />
            New invoice
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard
          label="Total Billed"
          value="RM 58,240"
          icon="invoicing"
          tone="indigo"
          trend="up"
          delta="+8%"
          deltaLabel="vs Apr"
        />
        <StatCard
          label="Collected"
          value="RM 53,660"
          icon="check"
          tone="emerald"
          trend="up"
          delta="92%"
          deltaLabel="collection rate"
        />
        <StatCard
          label="Pending"
          value="RM 2,840"
          icon="clock"
          tone="amber"
          trend="flat"
          delta="6 invoices"
        />
        <StatCard
          label="Overdue"
          value="RM 1,740"
          icon="invoicing"
          tone="rose"
          trend="down"
          delta="3 invoices"
        />
      </div>

      <div className="filter-row">
        <div className="filter-group">
          <button className="chip active">All · 128</button>
          <button className="chip">Paid · 112</button>
          <button className="chip">Pending · 13</button>
          <button className="chip">Overdue · 3</button>
        </div>
        <div className="filter-group">
          <button className="btn btn-secondary">
            <Icon name="calendar" />
            May 2026
          </button>
        </div>
      </div>

      <div className="card">
        <div className="card-body flush">
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Invoice</th>
                  <th>Student</th>
                  <th>Parent</th>
                  <th>Amount</th>
                  <th>Issued</th>
                  <th>Due</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => {
                  const badge = statusBadge[inv.status]
                  return (
                    <tr key={inv.number}>
                      <td className="cell-strong">{inv.number}</td>
                      <td>{inv.student}</td>
                      <td className="cell-muted">{inv.parent}</td>
                      <td className="cell-strong">{inv.amount}</td>
                      <td className="cell-muted">{inv.issued}</td>
                      <td className="cell-muted">{inv.due}</td>
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
