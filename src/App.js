
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Shared/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route path="/home"><HomePage /></Route>
            <Route path="/"><HomePage /></Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
