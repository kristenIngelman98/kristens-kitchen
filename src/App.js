// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import Breakfast from './components/Breakfast/Breakfast';


function App() {
  return (
    <Router>
    
    
    <div className="App">
      <NavBar />
      <Footer />
    </div>

    <Switch>
      <Route path="/breakfast" component={Breakfast} />
    </Switch>
    </Router>
  );
}

export default App;
