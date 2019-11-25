import React, { Component, Fragment } from 'react';
import FormInputButton from './FormSubmitButton';
import TableHeaders from './TableHeaders';
import TableRow from './TableRow';

class DegenerativeTriangleResults extends Component {
  constructor(props) {
    super(props);
    this.state = { fields: [], results: [] };
    this.computeSides = this.computeSides.bind(this);
    this.onClickSticksSubmit = this.onClickSticksSubmit.bind(this);
  }

  componentDidMount() {
    const { state } = this.props.location;
    
    if(state.fields) {
      const fields = state.fields;
      const results = fields.map((field) => {
        return this.computeSides(field.replace(/\s\s+/g, ' ').split(' '));
      })

      this.setState({ results, fields })
    
    }
    console.log('LOCATION PROP', this.props.location);
  }

  onClickSticksSubmit(event) {
    event.preventDefault();
    this.props.history.push("/");
  }

  computeSides(sides) {
    sides.reverse();
    let found = -1;

    for (let i = 0; i < sides.length - 2; i++) {
        if (!this.degenerativeTriangle(sides[i], sides[i+1], sides[i+2])) {
            found = sides[i] + " " + sides[i+1] + " " + sides[i+2];
            break;
        }
    }

    return found;
  }

  degenerativeTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        return false;
    } else {
        return true;
    }
  }

  render() {

    const { fields, results } = this.state;
    return (
      <Fragment>
        <div className="header">
          <h1 className="header__title">Maximum Perimeter Triangle</h1>
          <p className="header__help">-1: Degenerate Triangle / Incorrect Input</p>
        </div>
        <div className="dynamicForm">
          <div className="dynamicForm__buttonWrapper">
            <FormInputButton click={this.onClickSticksSubmit} innerHtml="New Input" />
          </div>

          <table className="results">
            <thead>
              <TableHeaders headers={["Sticks", "Maximum Perimeter"]} />
            </thead>
            <tbody>
            {
              fields.map((field, index) => {
                return <TableRow key={index} data={[field, results[index]]} />
              })
            }
            </tbody>
          </table>
        </div>
        <div class="githubLink">
        <a target="_blank" href="https://github.com/yahyajideh/maximum-perimeter-triangle">view code here: <i class="fab fa-github"></i></a> 
      </div>
      </Fragment>
    );
  }
}

export default DegenerativeTriangleResults;


