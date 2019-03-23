import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Time from './components/Time/index';
import Bus from './Bus/Bus';
import Events from './Events/Events';
import SignUpEvents from './Events/SignUpEvents';
import Abakus from './components/Abakus';
import './styles.css';

class Main extends Component {
  routes = [
    { path: '/', name: 'Home', Component: Events },
    { path: '/bus', name: 'Bus', Component: Bus },
    { path: '/signup', name: 'SignUp', Component: SignUpEvents },
  ];

  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }


  render() {
    return (
      <Router>
        <>
          <React.Fragment>
            <Time displayTime />
          </React.Fragment>

          <CSSTransition
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {currentComponent}
          </CSSTransition>

          <Abakus />
        </>
      </Router>
    );
  }
}

export default Main;

/*
<Route exact path="/" component={() => <Redirect to="/events" />} />
            <Route path="/events" component={Events} />
            <Route path="/bus" component={Bus} />
            <Route path="/signup" component={SignUpEvents} />
*/

/*
Setter opp en setInterval som endrer storen gjør et action kall som endrer staten hvert 15. sekund
Kan ha en slags state som viser hvilken komponent som skal vise
*/
