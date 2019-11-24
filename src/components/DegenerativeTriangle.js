import React, { Component, Fragment } from 'react';
import SticksInput from './SticksInput';
import FormInputButton from './FormSubmitButton'

class DegenerativeTriangle extends Component {
  constructor(props) {
    super(props);
    this.state = { fields: [""] };
    this.onClickSticksNewInput = this.onClickSticksNewInput.bind(this);
    this.onClickSticksSubmit = this.onClickSticksSubmit.bind(this);
  }

  onClickSticksNewInput(event) {
    event.preventDefault();
    this.setState({
      fields: ["", ...this.state.fields]
    });
  }

  onClickFormGroupButton(index) {
    let fields = [...this.state.fields];
    fields.splice(index, 1);
    this.setState({ fields });
  }

  onChangeFormGroupInput(index, event) {
    let fields = [...this.state.fields];
    fields[index] = event.target.value;
    this.setState({ fields });
  }

  onClickSticksSubmit(event) {
    event.preventDefault();
    const filteredValues = this.state.fields.filter(value => value);
    if(filteredValues.length <= 0) {
      alert('No sticks entered!');
      return;
    }
    console.log('Filtered values', filteredValues);
    this.props.history.push('/results', {fields: filteredValues});
  }

  render() {
    const removeSticksInput =
      this.state.fields.length > 1 ? true : false;

    return (
      <Fragment>
        <div className="header">
          <h1 className="header__title">Maximum Perimeter Triangle</h1>
          <p className="header__help">Hit "Enter" to add new line. Click 'X' to remove.</p>
        </div>
      <form className="dynamicForm">
        <div className="dynamicForm__buttonWrapper">
          <FormInputButton
            click={this.onClickSticksNewInput}
            type="ghost"
            innerHtml="Add Field"
          />
          <FormInputButton click={this.onClickSticksSubmit} innerHtml="Calculate" />
        </div>

        {this.state.fields.map((value, index) => (
          <SticksInput
            inputChange={this.onChangeFormGroupInput.bind(this, index)}
            buttonClick={this.onClickFormGroupButton.bind(this, index)}
            buttonDisabled={index === 0 ? !removeSticksInput : undefined}
            value={value}
            key={index}
          />
        ))}
      </form>
      </Fragment>
    );
  }
}

export default DegenerativeTriangle;


