import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation/Navigation.jsx';


import MainContent from './pages/MainContent';

function App() {
  return (
    <div className="App">
      <Navigation />
      
      <MainContent/>

    </div>
  );
}

export default App;
