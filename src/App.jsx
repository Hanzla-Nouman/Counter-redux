import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import Value from "./Components/Value";
import Controls from "./Components/Controls";
import { useSelector } from "react-redux";
import Privacy from "./Components/Privacy";

function App() {
  const privacy = useSelector(store => store.privacy)
  return (
    <>
    <div className="container">
      <div className="card text-center card-body" style={{ width: "18rem" }}>
      <Header/>
       {privacy? <Privacy/> : <Value /> }
        
        <Controls/>
      </div>
      </div>
    </>
  );
}

export default App;
