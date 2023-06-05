// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,

    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="container1">
        <p className="latest-match-competing-team-name">{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        className="competing-team-logo"
        alt={`latest match ${competingTeam}`}
        src={competingTeamLogo}
      />
      <div className="container2">
        <p className="heading1">First Innings</p>
        <p className="heading2">{firstInnings}</p>
        <p className="heading1">Second Innings</p>
        <p className="heading2">{secondInnings}</p>
        <p className="heading1">Man Of The Match</p>
        <p className="heading2">{manOfTheMatch}</p>
        <p className="heading1">Umpires</p>
        <p className="heading2">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
