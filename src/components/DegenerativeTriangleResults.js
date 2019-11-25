import React, { Component, Fragment } from 'react';
import FormInputButton from './FormSubmitButton';
import TableHeaders from './TableHeaders';
import TableRow from './TableRow';

class DegenerativeTriangleResults extends Component {
  constructor(props) {
    super(props);
    this.state = { sticksList: [], results: [] };
    this.computeMaxPerimeter = this.computeMaxPerimeter.bind(this);
    this.onClickNewInput = this.onClickNewInput.bind(this);
  }

  isInt(n) {
    n = parseInt(n);
    return Number(n) === n && n % 1 === 0;
  }

  isFloat(n) {
    n = parseFloat(n);
    return Number(n) === n && n % 1 !== 0;
  }

  isValid(n) {
    if (this.isInt(n) && !this.isFloat(n)) {
      return true;
    }
    return false;
  }

  componentDidMount() {
    const { state } = this.props.location;
    
    if(state.sticksList) {
      const sticksList = state.sticksList;
      const results = sticksList.map((sticks) => {
        sticks = sticks.replace(/\s\s+/g, ' ').split(' ');
        
        // check only integers have been entered
        const valid = sticks.some(i => this.isValid(i));
        if (!valid) {
          return -1;
        }  
        
        return this.computeMaxPerimeter(sticks);
      })

      this.setState({ results, sticksList })
    
    }
    console.log('LOCATION PROP', this.props.location);
  }

  onClickNewInput(event) {
    event.preventDefault();
    this.props.history.push("/");
  }

  /*
  Given a list of sides, find the maximum perimeter triangle
  */
  computeMaxPerimeter(sides) {
    // sort array in descending order
    sides.sort();
    sides.reverse();
    let found = -1;

    /* 
    max perimeter triangle will be the first 3 sides that
    are non-degenerative
    */
    for (let i = 0; i < sides.length - 2; i++) {
        if (!this.degenerativeTriangle(sides[i], sides[i+1], sides[i+2])) {
            found = sides[i] + " " + sides[i+1] + " " + sides[i+2];
            break;
        }
    }

    return found;
  }

  /*
  Given 3 sides, a, b, c; a triangle is degenerative 
  if any of the following conditions fail:
    a + b > c
    a + c > b
    b + c > a
  */
  degenerativeTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        return false;
    } else {
        return true;
    }
  }

  render() {

    const { sticksList, results } = this.state;
    return (
      <Fragment>
        <div className="header">
          <h1 className="header__title">Maximum Perimeter Triangle</h1>
          <p className="header__help">-1: Degenerate Triangle / Incorrect Input</p>
        </div>
        <div className="dynamicForm">
          <div className="dynamicForm__buttonWrapper">
            <FormInputButton click={this.onClickNewInput} innerHtml="New Input" />
          </div>

          <table className="results">
            <thead>
              <TableHeaders headers={["Sticks", "Maximum Perimeter"]} />
            </thead>
            <tbody>
            {
              sticksList.map((sticks, index) => {
                return <TableRow key={index} data={[sticks, results[index]]} />
              })
            }
            </tbody>
          </table>
        </div>
        <div className="githubLink">
        <a target="_blank" href="https://github.com/yahyajideh/maximum-perimeter-triangle">view code here: <i class="fab fa-github"></i></a> 
      </div>
      </Fragment>
    );
  }
}

export default DegenerativeTriangleResults;


