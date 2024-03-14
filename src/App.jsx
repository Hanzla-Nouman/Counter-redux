import Container from "./Components/Container";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import Value from "./Components/Value";
import Controls from "./Components/Controls";

function App() {
  return (
    <>
    <div className="container">
      <div className="card text-center card-body" style={{ width: "18rem" }}>
        <Header></Header>
        <Value />
        <Controls/>
      </div>
      </div>
    </>
  );
}

export default App;
