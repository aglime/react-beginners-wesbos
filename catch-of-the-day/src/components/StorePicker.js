import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers.js";

class StorePicker extends React.Component {
  // This is the old way to make sure that you can access THIS in the custom methods
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  myInput = React.createRef();
  static propTypes = {
    history: PropTypes.object
  };

  // The new way allows you to turn the below method into an arrow function - which will result in the method becomgin a property
  // Recommended method for binding - turn the method to a property
  goToStore = event => {
    // 1. stop the form from submitting
    event.preventDefault();
    //2. get the text from that input
    // console.log(this.myInput.value.value);
    const storeName = this.myInput.value.value;
    //3. change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };

  // error: unable to access THIS - using goToStore method
  // goToStore(event) {
  //   // 1. stop the form from submitting
  //   event.preventDefault();
  //   //2. get the text from that input
  //   console.log(this.myInput);
  //   //3. change the page to /store/whatever-they-entered
  // }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required
          ref={this.myInput}
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

export default StorePicker;
