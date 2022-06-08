import React from "react";
import { _replaceRootDirTags } from "jest-config/build/utils";
import Counters from "./counters";

class Counter extends React.Component {
  render() {
    {
      return (
        <div>
          {this.props.children}
          <span className={this.getBadgeClasses()}>{this.formatvalue()}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm "
          >
            +
          </button>
          <button
            onClick={() => this.props.onMinus(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Remove
          </button>
          <button
            onClick={() => this.props.onLike(this.props.counter.id, true)}
            className="btn btn-primary btn-sm m-2"
          >
            Like
          </button>
        </div>
      );
    }
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatvalue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
