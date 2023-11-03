import { Link } from 'react-router-dom'

interface Props {
  title: string
  linkLabel: string
  destination: string
}

const Card: React.FC<Props> = ({ title, linkLabel, destination }) => {
  return (
    <div className="h-40 bg-slate-50 p-5 rounded-md">
      <h2 className="text-xl mb-2">{title}</h2>
      <hr />
      <br />
      <Link to={destination} className="text-sky-500">
        🛫 {linkLabel}
      </Link>
    </div>
  )
}

export default Card
