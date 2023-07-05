import * as React from 'react';
// amount of checkboxes
const n = 3;

class CheckboxSingle extends React.Component {
  constructor() {
    super();
    this.state = {
      // checked/unchecked is stored here
      // initially the first one is checked:
      // [true, false, false]
      checkboxes: new Array(n).fill().map((_, i) => !i)
    };
    // const requiredProp = (props.rules === 'accepted' ? { 'required' : true  } : null);
    // console.log('selectControl props', props);
    // {...requiredProp}
  
  }
  onChange(e, changedIndex) {
    // it is a good habit to extract things from event variable
    const { checked } = e.target;

    this.setState((state) => ({
      // this lets you unselect all.
      // but selected can be anly one at a time
      checkboxes: state.checkboxes.map((_, i) =>
        i === changedIndex ? checked : false
      )
    }));
  }
  render() {
    const { checkboxes } = this.state;

    return (
      <div>
        {checkboxes.map((item, i) => (
          <input
            key={i}
            type="checkbox"
            checked={item}
            onChange={
              (e) =>
                this.onChange(e, i) /* notice passing an index. we will use it */
            }
            required={true}
          />
        ))}
      </div>
    );
  }
}

export default CheckboxSingle;
