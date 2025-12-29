import React from 'react';
import './App.css';
import Header from './components/Header';
import WhereToMove from './components/WhereToMove';
import CardActivities from './components/CardActivities';
import LoveMost from './components/LoveMost';
import TopTravelPicks from './components/TopTravelPicks';
import TravelConsultation from './components/TravelConsultation';
import ExperienceUnforgettable from './components/ExperienceUnforgettable';
import TripsAdoraAdvantage from './components/TripsAdoraAdvantage';
import ExploreMore from './components/ExploreMore';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="dashboard-main">
        <WhereToMove />
        <CardActivities />
        <LoveMost />
        <TopTravelPicks />
        <TravelConsultation />
        <ExperienceUnforgettable />
        <TripsAdoraAdvantage />
        <ExploreMore />
      </main>
      <Footer />
    </div>
  );
}

export default App;

