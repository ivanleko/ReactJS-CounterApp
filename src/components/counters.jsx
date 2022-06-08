import React, { Component } from "react";
import Counter from "./counter";
import { set } from "harmony-reflect";

class Counters extends React.Component {
  render() {
    const {
      onReset,
      counters,
      onIncrement,
      onDelete,
      onMinus,
      onLike
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-info btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            onLike={onLike}
            onMinus={onMinus}
            onIncrement={onIncrement}
            onDelete={onDelete}
            key={counter.id}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
