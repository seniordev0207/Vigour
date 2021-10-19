
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Shared/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';
import NotFound404 from './components/NotFound404';
import AuthContext from './components/AuthContext/AuthContext';
import AuthenticationPages from './components/AuthenticationPages/AuthenticationPages';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserProfile from './components/UserProfile/UserProfile';
import ContactPage from './components/ContactPage/ContactPage';


function backToTop() {
  for (let viewport = window.pageYOffset; viewport > 0; viewport--) {
    window.scrollTo(0, viewport);
  }
}
window.addEventListener('scroll', () => {
  const topBut = document.getElementById('back-to-top-button');
  window.scrollY > 150 ? topBut.style.display = 'flex' : topBut.style.display = 'none';
})


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
              <PrivateRoute path="/profile"><UserProfile /></PrivateRoute>
              <PrivateRoute path="/contact"><ContactPage /></PrivateRoute>
              <Route path="*"><NotFound404 /></Route>
            </Switch>
            <Footer />
            <button id="back-to-top-button" onClick={backToTop}>
              <i class="fas fa-arrow-up"></i>
            </button>
          </div>
        </Router>
      </AuthContext>
    </>
  );
}

export default App;
