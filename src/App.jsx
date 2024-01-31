import "./App.css";
import ComponentWillUnmount from "./Components/Unmount/ComponentWillUnmount";
// import ComponentDidMount from "./Components/Mounting/componentDidMount";
// import ComponentDidUpdate from "./Components/Updating/ComponentDidUpdate";
// import GetSnapshotBeforeUpdate from "./Components/Updating/GetSnapshotBeforeUpdate";

function App() {
  return (
    <>
      {/* <ComponentDidMount color="blue" /> */}
      {/* <ComponentDidUpdate /> */}
      {/* <GetSnapshotBeforeUpdate /> */}

      <ComponentWillUnmount />
    </>
  );
}

export default App;
