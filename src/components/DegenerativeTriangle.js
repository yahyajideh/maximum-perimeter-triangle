import React, { Component } from 'react';
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
      alert('No value entered!');
      return;
    }
    console.log('Filtered values', filteredValues);
    this.props.history.push('/results', {fields: filteredValues});
  }

  render() {
    const removeSticksInput =
      this.state.fields.length > 1 ? true : false;

    return (
      <form className="dynamicForm">
        <div className="dynamicForm__buttonWrapper">
          <FormInputButton
            click={this.onClickSticksNewInput}
            type="ghost"
            innerHtml="Add Field"
          />
          <FormInputButton click={this.onClickSticksSubmit} innerHtml="Submit" />
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
    );
  }
}

export default DegenerativeTriangle;


