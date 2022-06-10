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
      c.like = false;
      return c;
    });
    this.setState({ counters });
  };

  // Malo sam modificirao funkciju da prihvati iskljucivo dva parametra:
  // 1. "counterID" da mogu pronaci index
  // 2. "like" stanje koje zelim da bude (true ili false)
  // Ovu funkciju ne zanima nis drugo tako da sam sve ostalo ignorirao i bio eksplicitan
  // I to je upitno trebas li uopce drugi parametar al eto, ovako imas potpunu kontrolu nad time zelis li like ili ne
  // Pitanje je sad zelis li "toggle" da bude like on/off, to je mrvu drugacije
  // handleLike = (clickedCounterId, newLikeState) => {
  //console.log(`Item liked. Item ID: ${clickedCounterId}`, newLikeState);
  //let counters = [...this.state.counters];

  // Ovako je bolje naci index, direktno
  //const index = counters.findIndex(counter => counter.id === clickedCounterId)

  // U ovom trenutku, "like" na tom indexu je jos uvijek false jer prikazujem originalno stanje
  // Ovaj output ce biti FALSE
  //console.log(111, index, counters[index])

  // Ovdje sam zaista promjenio like, i ovdje ce biti TRUE
  //counters[index].like = newLikeState || false; // ovo kaze postavi like na newLikeState ili defaultno postavi "false" ako nisam nista proslijedio
  //console.log(222, index, counters[index])

  //this.setState({ counters });
  //};

  // Ovo je alternativni primjer gdje ne zelim newLikeState vec cu uvijek postavit "suprotno" od onog sto je trenutno
  // Znaci ako je like = true, kad ovo se okine postat ce false, i obrnuto. Efektivno treba biti Like/Unlike gumb
  handleLike = counterId => {
    console.log(`Item liked. Item ID: ${counterId}`);
    let counters = [...this.state.counters];
    const index = counters.findIndex(
      counter => counter.id === counterId
      //counter => counter.id === clickedCounterId
    );
    counters[index].like = !counters[index].like;
    console.log(index, counters[index]);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
          totalLikes={this.state.counters.filter(c => c.like === true).length}
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
