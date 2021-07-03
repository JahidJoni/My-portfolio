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
import { useEffect, useState } from 'react';
import LoaderComp from './loader';



function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  })

  return (<>
    {
      loading === true ? <LoaderComp></LoaderComp> :

        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/projects">
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
        </Router>}
  </>
  );
}

export default App;
