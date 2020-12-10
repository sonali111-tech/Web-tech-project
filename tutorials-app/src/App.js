import React, { Component } from "react";
import { Link, Switch } from 'react-router-dom'
import { Route } from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";
import TutorialsList from "./components/tutorials-list.component"
import AddTutorial from "./components/add-tutorial.component"
import Tutorial from "./components/tutorial.component"

class App extends Component {
  render() {
    return (
      <div>
         <marquee><strong>Music is the soundtrack of your life</strong></marquee>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            Welcome 
          </a>

          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Songs
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>

          </div>
        </nav>

        <div className="container mt-3">
          <Switch>//to distinguish nested URL's
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
    
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
