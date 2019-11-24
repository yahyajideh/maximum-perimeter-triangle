import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        return this.computeSides(field.split(' '));
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
      <form className="dynamicForm">
        <div className="dynamicForm__buttonWrapper">
          <FormInputButton click={this.onClickSticksSubmit} innerHtml="Submit" />
        </div>

        <table>
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
          {/* <TableRow key={0} data={["1 1 1 3 3", "3 3 1"]} /> */}
        </table>

      </form>
    );
  }
}

export default DegenerativeTriangleResults;


