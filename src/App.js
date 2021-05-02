import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Blogs from './Components/Blogs/Blogs';
import Resume from './Components/Resume/Resume';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
