// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {teamImageUrl, id, name} = teamData
  return (
    <Link to={`/ipl/${id}`} className="team">
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="team-img" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
