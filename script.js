//pure function - react won't let you change value of props in your functions. i can't say total=+unit or something.
// const Temperature = (props) => {
//   console.log("Props: ", props);
//   return (
//     <h1>
//       The current temperature in {props.city} is {props.degree} degree{" "}
//       {props.unit}
//     </h1>
//   );
// };

// const element = <Temperature degree={25} unit={"F"} city={"Knoxville"} />;

// <Temperature city="london" degree={20} unit={"C"} />
// <Temperature city="knoxville" degree={60} unit={"F"} />
// <Temperature city="cary" degree={50} unit={"F"} />

// const App = () => {
//   return (
//     <div>
//       <Template>
//         <h1>Main content</h1>
//       </Template>
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));

const DateDisplay = (props) => {
  return <h2>The time now is {props.date.toLocaleTimeString()}.</h2>;
};

DateDisplay.defaultProps = {
  date: new Date(),
};

class Clock extends React.Component {
  constructor(props) {
    super(props); // when you extend something you include super and what you're
    const date = new Date();
    date.setSeconds(date.getSeconds() + props.secondsShift);
    this.state = { date };
    // this is equivalent to { date: date }, we can do this if the variable name is the same as the property name when defining objects.
  }

  componentDidMount() {
    this.timer = setInterval(() => this.updateTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateTime() {
    const date = new Date();
    date.setSeconds(date.getSeconds() + this.props.secondsShift);
    this.setState({ date });
  }

  render() {
    console.log(this.state.date);
    return (
      <div>
        <DateDisplay date={this.state.date} />
      </div>
    );
  }
}

Clock.defaultProps = {
  secondsShift: 0,
};

// ReactDOM.render(
//   <Clock secondsShift={0} />, //what to show, and defining props that i will need to call in side the function
//   document.getElementById("root2") //where to show it
// );

class Counter extends React.Component {
  constructor(props) {
    super(props);

    // count value starts at 0
    this.state = { count: 0 };

    // This binding ensures `this` refers to the class object in the callback. Do this is you get a window object when using this.
    this.addCount = this.addCount.bind(this);
  }

  addCount(amount) {
    // add 1 to this.state.count
    this.setState({
      count: this.state.count + amount,
    });
  }

  handleClick = (e) => {
    e.preventDefault();
    window.alert(
      "use an arrow function if you don't want to bind, but you can only use it if you're using the callback within the compenent"
    );
  };

  render() {
    return (
      <div>
        <h2>Count {this.state.count}</h2>
        <button onClick={() => this.addCount(1)}>+1</button>
        <button onClick={() => this.addCount(2)}>+2</button>
        <button onClick={() => this.addCount(3)}>+3</button>
        <br />
        <button onClick={(e) => this.handleClick(e)}>Try this no bind.</button>
      </div>
    );
  }
}

class ScrollLogger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0,
    };

    // bind to the class object so updateScrollY can access this.setState
    this.updateScrollY = this.updateScrollY.bind(this);
  }

  updateScrollY(e) {
    this.setState({ scrollY: Math.round(window.scrollY) });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.updateScrollY);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateScrollY);
  }

  render() {
    return (
      <div className="position-fixed bg-white p-3" style={{ right: 0, top: 0 }}>
        Scrolled: {this.state.scrollY}px
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <Clock />
      <Clock secondsShift={10} />
      <Clock secondsShift={20} />
      <Counter />
      <ScrollLogger />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
