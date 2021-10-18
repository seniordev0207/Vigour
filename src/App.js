
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Shared/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';
import NotFound404 from './components/NotFound404';
import AuthContext from './components/AuthContext/AuthContext';
import AuthenticationPages from './components/AuthenticationPages/AuthenticationPages';

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
              <Route path="/login"><AuthenticationPages /></Route>
              <Route path="/signup"><AuthenticationPages /></Route>
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
