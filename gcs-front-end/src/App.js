import './App.css';
import ArmButton from './components/armButton';
import DisarmButton from './components/disarmButton';
import TakeoffButton from './components/takeoffButton';
import LandButton from './components/landButton';

function App() {
  return (
    <div className="App">
      <ArmButton/>
      <DisarmButton/>
      <TakeoffButton/>
      <LandButton/>
    </div>
  );
}

export default App;
