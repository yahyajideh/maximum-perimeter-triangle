import React from 'react';
import {Switch, Route } from 'react-router-dom';
import DegenerativeTriangle from './components/DegenerativeTriangle';
import DegenerativeTriangleResults from './components/DegenerativeTriangleResults';

// https://codepen.io/bertdida/pen/EOdYxG used throughout the project

function App(props) {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={DegenerativeTriangle}/>
          <Route path="/results" exact component={DegenerativeTriangleResults}/>
          <Route path="**" render={() => <h1>Page Not Found!</h1>} />
        </Switch>
      </div>
    );
}

export default App;