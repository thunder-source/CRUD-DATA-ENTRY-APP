import React, { useState } from "react";

const NewTask = () => {
  const [input, setInput] = useState();
  const [salary, setSalary] = useState();

  const openInput = () => {};
  const updateSlary = () => {};

  return (
    <div className="main-div">
      <h1>Income-Expense Manager</h1>
      <div className="mainbtn">
        <button
          onClick={openInput}
          className="bg-blue-500 m-2 my-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Income
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Expense
        </button>
        <button className="bg-red-500 m-2 my-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Display
        </button>
      </div>
      <div className="unlock">
        <input type="text" name="salary" placeholder="Enter Salary" value={salary} onChange={updateSlary}/>
        </div>
        </div>
        );
    };
    // <input type="text"  />

export default NewTask;
