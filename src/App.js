// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Breakfast from './components/Breakfast/Breakfast';
import Lunch from './components/Lunch/Lunch';
// import Dinner from './components/Dinner/Dinner';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
        <Route path="/breakfast" component={Breakfast} />
        <Route path="/lunch" component={Lunch} />
      </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
