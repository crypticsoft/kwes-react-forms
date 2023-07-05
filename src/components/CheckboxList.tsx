import * as React from 'react';

class CheckboxList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ['apple', 'kiwi', 'banana', 'lime', 'orange', 'grape'],
      checkedValues: []
    };
  }
  handleCheck(index) {
    const values = this.state.checkedValues.some(
      (selected_index) => index === selected_index
    )
      ? this.state.checkedValues.filter((i) => i !== index)
      : this.state.checkedValues.concat([index]);
    this.setState({
      checkedValues: values
    });
  }
  render() {
    const checks = this.state.data.map((item, index) => {
      return (
        <span key={item}>
          <input
            id={`input-check-${index}`}
            type="checkbox"
            value={item}
            onChange={this.handleCheck.bind(this, index)} // Use .bind to pass params to functions
            checked={this.state.checkedValues.some(
              (selected_index) => index === selected_index
            )}
          />
          <label htmlFor={`input-check-${index}`}>{item}</label>
        </span>
      );
    });
    return <div>{checks}</div>;
  }
}
export default CheckboxList;
