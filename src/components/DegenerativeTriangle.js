import React, { Component, Fragment } from 'react';
import SticksInput from './SticksInput';
import FormInputButton from './FormSubmitButton';

class DegenerativeTriangle extends Component {
  constructor(props) {
    super(props);
    this.state = { sticksList: [""] };
    this.onClickSticksNewInput = this.onClickSticksNewInput.bind(this);
    this.onClickSticksSubmit = this.onClickSticksSubmit.bind(this);
  }

  onClickSticksNewInput(event) {
    event.preventDefault();
    this.setState({
      sticksList: ["", ...this.state.sticksList]
    });
  }

  onClickSticksInput(index) {
    let sticksList = [...this.state.sticksList];
    sticksList.splice(index, 1);
    this.setState({ sticksList });
  }

  onChangeSticksInput(index, event) {
    let sticksList = [...this.state.sticksList];
    sticksList[index] = event.target.value;
    this.setState({ sticksList });
  }

  onClickSticksSubmit(event) {
    event.preventDefault();
    const sticksList = this.state.sticksList;
    if(sticksList.length <= 0) {
      alert('No sticks entered!');
      return;
    }
    console.log('Filtered values', sticksList);
    this.props.history.push('/results', {sticksList});
  }

  render() {
    const removeSticksInput =
      this.state.sticksList.length > 1 ? true : false;

    return (
      <Fragment>
        <div className="header">
          <h1 className="header__title">Maximum Perimeter Triangle</h1>
          <p className="header__help">Hit "Enter" to add new line. Click 'X' to remove.</p>
          <p className="header__help">Each input is a new triangle.</p>
        </div>
      <form className="dynamicForm">
        <div className="dynamicForm__buttonWrapper">
          <FormInputButton
            click={this.onClickSticksNewInput}
            type="ghost"
            innerHtml="Add New Triangle"
          />
          <FormInputButton click={this.onClickSticksSubmit} innerHtml="Calculate" />
        </div>

        {this.state.sticksList.map((value, index) => (
          <SticksInput
            inputChange={this.onChangeSticksInput.bind(this, index)}
            buttonClick={this.onClickSticksInput.bind(this, index)}
            buttonDisabled={index === 0 ? !removeSticksInput : undefined}
            value={value}
            key={index}
          />
        ))}
      </form>
      <div className="githubLink">
        <a target="_blank" href="https://github.com/yahyajideh/maximum-perimeter-triangle">view code here: <i class="fab fa-github"></i></a> 
      </div>
      </Fragment>
    );
  }
}

export default DegenerativeTriangle;


