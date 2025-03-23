import React from 'react';
import { useParams } from 'react-router-dom';

function MatchDetail() {
  const { homeTeamVsAwayTeam } = useParams();

  // Dummy data, replace with actual data fetching
  const match = {
    homeTeam: homeTeamVsAwayTeam.split('-vs-')[0].replace(/-/g, ' '),
    awayTeam: homeTeamVsAwayTeam.split('-vs-')[1].replace(/-/g, ' '),
    // Add other match details here
  };

  return (
    <>
      <h2>Match Details</h2>
      <h3>{match.homeTeam} vs {match.awayTeam}</h3>
      {/* Display other match details here */}
    </>
  );
}

export default MatchDetail;
