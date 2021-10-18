
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Shared/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';
import NotFound404 from './components/NotFound404';
import AuthContext from './components/AuthContext/AuthContext';

function App() {
  return (
    <>
      <AuthContext>
        <Router>
          <Navbar />
          <div className="App">
            <Switch>
              <Route path="/home"><HomePage /></Route>
              <Route exact path="/"><HomePage /></Route>
              <Route path="*"><NotFound404 /></Route>
            </Switch>
            <Footer />
          </div>
        </Router>
      </AuthContext>
    </>
  );
}

export default App;
