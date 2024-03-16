import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import "../App.css";

const Controls = () => {
  const inputElemet = useRef();

  const dispatch = useDispatch();
  const handleInc = () => dispatch({ type: "+" });
  const handleDec = () => dispatch({ type: "-" });
  const handleAdd = () => {
    dispatch({ type: "ADD", payload: { num: inputElemet.current.value } });
    inputElemet.current.value = "";
  };
  const handleSub = () => {
    dispatch({ type: "SUB", payload: { num: inputElemet.current.value } });
    inputElemet.current.value = "";
  };
  const handlePrivacy = () => {
    dispatch({ type: "PRIVACY"});
  
  };
  return (
    <>
      <div>
        <button className="btn-success btn btn-md px-4 m-1" onClick={handleInc}>
          <b>+</b>
        </button>
        <button className="btn-danger btn btn-md px-4 m-1" onClick={handleDec}>
          <b>-</b>
        </button>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <button className="btn-primary btn btn-md px-2 m-2" onClick={handleSub}>
         <b> Sub</b>
        </button>
        <input
          type="text"
          class="form-control px-1"
          placeholder="Any Number"
          aria-label="Username"
          aria-describedby="basic-addon1"
          ref={inputElemet}

        />
        <button className="btn-info btn btn-md px-2 m-2" onClick={handleAdd}>
         <b> Add</b>
        </button>
      </div>
        <button className="btn-warning btn btn-md px-2 m-2" onClick={handlePrivacy}>
         <b>Privacy Toggle</b>
        </button>
    </>
  );
};

export default Controls;
