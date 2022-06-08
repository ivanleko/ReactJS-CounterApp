import "./App.css";
import React from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0, like: false },
      { id: 2, value: 0, like: false },
      { id: 3, value: 0, like: false },
      { id: 4, value: 0, like: false }
    ]
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  handleIncrement = counter => {
    console.log(
      `Item added.  Item ID: ${counter.id} Item Value:  ${counter.value + 1}`
    );
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleMinus = counter => {
    console.log(
      `Item removed.  Item ID: ${counter.id}, Item value: ${counter.value - 1}`
    );
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log(`Item deleted.  Item ID: ${counterId}`);
    const counters = this.state.counters.filter(
      majmun => majmun.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    console.log("Items Reset.");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleLike = counter => {
    console.log(`Item liked. Item ID: ${counter.id} ${counter.like}`);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].like = !false;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
          totalLikes={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onMinus={this.handleMinus}
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onLike={this.handleLike}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
