import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

const About = () => {
  return (
    
  )
}

ReactDOM.render((
  <Router>
    <Route path="/" render={Home} />
  </Router>), document.getElementById('root')
);
