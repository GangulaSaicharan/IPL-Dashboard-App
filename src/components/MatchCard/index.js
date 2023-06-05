// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails
  const won = matchStatus === 'Won' ? 'won' : 'loss'
  return (
    <li>
      <div className="match-card-container">
        <img
          className="match-card-image"
          alt={`competing team ${competingTeam}`}
          src={competingTeamLogo}
        />
        <p className="match-card-competing-team-heading">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={won}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
