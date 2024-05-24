// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
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
  } = latestMatch

  return (
    <>
      <div className="match-details-left">
        <p className="match-head">{competingTeam}</p>
        <p className="match-date">{date}</p>
        <p className="match-venue-result">{venue}</p>
        <p className="match-venue-result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match {competingTeam}`}
        className="match-logo"
      />
      <div className="match-details-right">
        <p className="innings">First Innings</p>
        <p className="innings-text">{firstInnings}</p>
        <p className="innings">Second Innings</p>
        <p className="innings-text">{secondInnings}</p>
        <p className="match-umpire">Man Of The Match</p>
        <p className="match-umpire-text">{manOfTheMatch}</p>
        <p className="match-umpire">Umpires</p>
        <p className="match-umpire-text">{umpires}</p>
      </div>
    </>
  )
}

export default LatestMatch
