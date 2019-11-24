import React from 'react';
import { 
  Switch,
  Route,
  Link
} from 'react-router-dom';
import DegenerativeTriangle from './components/DegenerativeTriangle';
import DegenerativeTriangleResults from './components/DegenerativeTriangleResults';

export default class App extends React.Component {
  render() {
    return <div>
      <Switch>
        <Route path="/" exact component={DegenerativeTriangle}/>
        <Route path="/results" exact component={DegenerativeTriangleResults}/>
        <Route path="**" render={() => <h3>Page Not Found!</h3>} />
      </Switch>
    </div>
  }
}