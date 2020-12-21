// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import Breakfast from './components/Breakfast/Breakfast';
import Lunch from './components/Lunch/Lunch';
// import Dinner from './components/Dinner/Dinner';


function App() {
  return (
    <Router>
    
    
    <div className="App">
      <NavBar />
      <Footer />
    </div>

    <Switch>
      <Route path="/breakfast" component={Breakfast} />
      <Route path="/lunch" component={Lunch} />

    </Switch>
    </Router>
  );
}

export default App;
