// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageUrl} = teamDetails
  console.log(id)
  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li>
        <div className="team-card-container">
          <img className="team-logo" alt={name} src={teamImageUrl} />
          <p className="team-heading">{name}</p>
        </div>
      </li>
    </Link>
  )
}
export default TeamCard
