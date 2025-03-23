import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MatchDetail() {
  const { homeTeamVsAwayTeam } = useParams();

  // Extract team names
  const homeTeam = homeTeamVsAwayTeam.split('-vs-')[0].replace(/-/g, ' ');
  const awayTeam = homeTeamVsAwayTeam.split('-vs-')[1].replace(/-/g, ' ');

  useEffect(() => {
    document.title = `${homeTeam} vs ${awayTeam} - Live Stream`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `Watch ${homeTeam} vs ${awayTeam} live streaming in high quality.`);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = `Watch ${homeTeam} vs ${awayTeam} live streaming in high quality.`;
      document.head.appendChild(meta);
    }

    const metaOgTitle = document.querySelector('meta[property="og:title"]');
        if (metaOgTitle) {
            metaOgTitle.setAttribute('content', `${homeTeam} vs ${awayTeam}`);
        } else {
            const metaOg = document.createElement('meta');
            metaOg.setAttribute('property', 'og:title');
            metaOg.content = `${homeTeam} vs ${awayTeam}`;
            document.head.appendChild(metaOg);
        }

        const metaOgDescription = document.querySelector('meta[property="og:description"]');
        if (metaOgDescription) {
            metaOgDescription.setAttribute('content', `Watch ${homeTeam} vs ${awayTeam} live in high quality.`);
        } else {
            const metaOgDesc = document.createElement('meta');
            metaOgDesc.setAttribute('property', 'og:description');
            metaOgDesc.content = `Watch ${homeTeam} vs ${awayTeam} live in high quality.`;
            document.head.appendChild(metaOgDesc);
        }

    const metaRobots = document.querySelector('meta[name="robots"]');
        if (metaRobots) {
            metaRobots.setAttribute('content', 'index, follow');
        } else {
            const metaRobotsTag = document.createElement('meta');
            metaRobotsTag.name = 'robots';
            metaRobotsTag.content = 'index, follow';
            document.head.appendChild(metaRobotsTag);
        }
  }, [homeTeam, awayTeam]);

  // Dummy data, replace with actual data fetching
  const match = {
    homeTeam: homeTeam,
    awayTeam: awayTeam,
    status: 'Live', // Replace with actual status
  };

  return (
    <>
      <h2>{match.homeTeam} vs {match.awayTeam}</h2>
      <p>Status: {match.status}</p>
      {/* Display other match details here */}
    </>
  );
}

export default MatchDetail;
