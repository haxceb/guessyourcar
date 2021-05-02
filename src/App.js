import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from './Components/AppBar/Appbar';
import HomePage from './Screens/HomeScreen'
import { Divider } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <Divider />
      <HomePage />
    </div>
  );
}

export default App;
