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

const App = () => {
  return (
    <Template>
      <h1>Main content</h1>
    </Template>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
