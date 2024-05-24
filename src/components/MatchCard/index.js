// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCard} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchCard

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team {competingTeam}`}
        className="match-card-logo"
      />
      <p className="match-card-head">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatus}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
