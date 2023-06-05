// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

let team = ''

class TeamMatches extends Component {
  state = {teamsMatches: [], recentMatch: {}, bannerImage: '', isLoading: true}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const teamData = await response.json()
    team = id
    const formattedData = {
      latestMatchDetails: teamData.latest_match_details,
      recentMatches: teamData.recent_matches,
      teamBannerUrl: teamData.team_banner_url,
    }
    const data = formattedData.latestMatchDetails
    const latestMatchFormattedData = {
      umpires: data.umpires,
      result: data.result,
      manOfTheMatch: data.man_of_the_match,
      id: data.id,
      date: data.date,
      venue: data.venue,
      competingTeam: data.competing_team,
      competingTeamLogo: data.competing_team_logo,
      firstInnings: data.first_innings,
      secondInnings: data.second_innings,
      matchStatus: data.match_status,
    }
    const recentMatchFormattedData = formattedData.recentMatches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: data.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    this.setState({
      recentMatch: latestMatchFormattedData,
      teamsMatches: recentMatchFormattedData,
      bannerImage: formattedData.teamBannerUrl,
      isLoading: false,
    })
  }

  renderTeamMatches = () => {
    const {bannerImage, recentMatch, teamsMatches} = this.state
    return (
      <div className={`team-matches-container ${team}`}>
        <img
          className="team-banner-image"
          alt="team banner"
          src={bannerImage}
        />
        <LatestMatch latestMatchDetails={recentMatch} />
        <ul className="match-cards-container">
          {teamsMatches.map(each => (
            <MatchCard matchDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </>
    )
  }
}
export default TeamMatches
