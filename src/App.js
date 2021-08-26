import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation/Navigation.jsx';
import JourneyDetails from './components/JourneyDetails/JourneyDetails.jsx';
import PickupContact from './PickupContact';
import Sidebar from './components/Sidebar/Sidebar';

import MainContent from './MainContent';

function App() {
  return (
    <div className="App">
      <Navigation />
      
      <MainContent/>

    </div>
  );
}

export default App;
