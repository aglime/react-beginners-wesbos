import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem(
      this.props.match.params.storeId
    );
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  // creating a new method to add fish to the STATE
  addFish = fish => {
    // using this syntax because we are going to need to access THIS inside of it
    // in order to update state - need to use existing set state api
    // 1. take a copy of the existing state using a object spread -
    const fishes = { ...this.state.fishes };
    // 2. add the new fish to the fishes variable - using the timestamp as a 'key'
    fishes[`fish${Date.now()}`] = fish;
    // 3. set the new fishes object to the state - this takes our copy of the old state (fishes) and then adds our new fishes to the current state - just sending the piece of state that we are updating
    this.setState({
      fishes
    });
  };

  updateFish = (key, updatedFish) => {
    //1 take a copy of current state
    const fishes = { ...this.state.fishes };
    // 2. update that state
    fishes[key] = updatedFish;
    //3 set that to state
    this.setState({ fishes });
  };

  deleteFish = key => {
    // 1. take a copy of state
    const fishes = { ...this.state.fishes };
    // 2. update the state
    fishes[key] = null;
    // 3. update state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    // 1 take a copy of state
    const order = { ...this.state.order };
    // 2 add to order or update number in order
    order[key] = order[key] + 1 || 1;
    // 3 call setState to update our state object
    this.setState({ order });
  };

  removeFromOrder = key => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. remove item from order
    delete order[key];
    // 3. call setState to update state object
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          {/* steps to automatically render the list of fishes - this can be handled via a component*/}
          <ul className="fishes">
            {/* we do not want to hard code in each fish- enable looping over all of the possible fishes - using object.keys*/}
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
        />
        {/* keep the name of the function addFish the same so it is easy to reference */}
      </div>
    );
  }
}

export default App;
