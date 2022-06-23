import './App.css';
import ArmButton from './components/armButton';
import DisarmButton from './components/disarmButton';
import TakeoffButton from './components/takeoffButton';
import LandButton from './components/landButton';
import GpsCoords from './components/gpsCoords';

function App() {
  return (
    <div className="App">
      <ArmButton/>
      <DisarmButton/>
      <TakeoffButton/>
      <LandButton/>
      <GpsCoords/>
    </div>
  );
}

export default App;
