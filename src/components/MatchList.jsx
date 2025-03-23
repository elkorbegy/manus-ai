import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MatchList() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://webws.365scores.com/web/games/current/?appTypeId=5&competitions=103');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        if (!data || !data.games) {
          throw new Error('No games found');
        }

        const matchesData = data.games
          .filter(sport => !["Ended", "WalkOver", "Postponed", "Final", "Final (OT)", "After Penalties", "Final (SO)", "Final (Ex)", "Abandoned"].includes(sport.statusText))
          .map(sport => {
            const homeTeam = sport.homeCompetitor.name;
            const awayTeam = sport.awayCompetitor.name;
            const matchTime = new Date(sport.startTime).toLocaleString();
            const status = sport.statusText;
            const seoLink = `${homeTeam.toLowerCase().replace(/ /g, "-")}-vs-${awayTeam.toLowerCase().replace(/ /g, "-")}`;

            return {
              league: data.competitions[0].name,
              homeTeam: homeTeam,
              awayTeam: awayTeam,
              matchTime: matchTime,
              status: status,
              link: `/events/${seoLink}`,
              seoLink: seoLink,
            };
          });

        setMatches(matchesData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 60000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h1>Live Sports Matches</h1>
      <ul>
        {matches.map((match, index) => (
          <li key={index}>
            <Link to={match.link}>
              {match.homeTeam} vs {match.awayTeam} - {match.league} ({match.matchTime}) - Status: {match.status}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MatchList;
