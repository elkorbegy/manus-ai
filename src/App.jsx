import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MatchList from './components/MatchList';
import MatchDetail from './components/MatchDetail';

function App() {
  return (
    
      
        <Routes>
          <Route path="/" element={<MatchList />} />
          <Route path="/events/:homeTeamVsAwayTeam" element={<MatchDetail />} />
        </Routes>
      
    
  );
}

export default App;
