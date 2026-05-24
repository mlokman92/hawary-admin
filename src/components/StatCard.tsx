import Icon, { type IconName } from './Icon'

type Tone = 'indigo' | 'emerald' | 'amber' | 'rose'
type Trend = 'up' | 'down' | 'flat'

interface StatCardProps {
  label: string
  value: string
  icon: IconName
  tone: Tone
  trend: Trend
  delta: string
  deltaLabel?: string
}

export default function StatCard({
  label,
  value,
  icon,
  tone,
  trend,
  delta,
  deltaLabel = 'vs last week',
}: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <span className="stat-card-label">{label}</span>
        <div className={`stat-card-icon ${tone}`}>
          <Icon name={icon} />
        </div>
      </div>
      <div className="stat-card-value">{value}</div>
      <div className={`stat-card-trend ${trend}`}>
        {trend !== 'flat' && (
          <Icon name={trend === 'up' ? 'arrowUp' : 'arrowDown'} size={12} />
        )}
        <span>{delta}</span>
        <span className="delta-label">{deltaLabel}</span>
      </div>
    </div>
  )
}
