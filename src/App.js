import './App.css';
import PrimarySearchAppBar from './Components/AppBar/Appbar';
import HomePage from './Screens/HomeScreen'
import { Card, Divider, Grid } from '@material-ui/core';
import QuestionScreen from './Screens/QuestionsScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FooterAll from './Components/Footer/FooterAll';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Container } from './Components/DragandDrop/Container'
import Details from './Screens/Details/index'
import UpcomingCarScreen from './Screens/UpcomingCars'
import TipsScreen from './Screens/TipsScreen'
import LoginScreen from './Screens/LoginScreen'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router basename="/guessyourcar">
        <div className="App">
          <PrimarySearchAppBar />
          <Divider />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/quiz" component={QuestionScreen} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/upcoming-cars" component={UpcomingCarScreen} />
            <Route exact path="/tips" component={TipsScreen} />
            <Route exact path="/login" component={LoginScreen} />

          </Switch>
          <Divider />
          <Grid container className="mt-3" justify="center">
            <FooterAll />
          </Grid>
        </div>
      </Router>
    </DndProvider>
  );
}

export default App;
