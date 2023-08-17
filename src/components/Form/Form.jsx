import React, { useEffect, useState } from "react";

export default function Form() {
  const [array, setarray] = useState([]);
  const [temp, settemp] = useState("add");
  const [num, setnum] = useState(0);

  function addToArray(value) {
    if (value !== "") {
      setarray([...array, value]);
      document.querySelector(".inp").value = "";
    }
  }

  function del(ele) {
    setarray(array.filter((item) => item !== ele));
  }

  function update(ele) {
    document.querySelector(".inp").value = ele;
    setnum(array.indexOf(ele));
    settemp("update");
  }

  function splice() {
    array.splice(num, 1, document.querySelector(".inp").value);
    document.querySelector(".inp").value = "";
    settemp("add");
  }

  return (
    <>
      <div action="" className="container my-5 d-flex ">
        <input className=" form-control inp w-75" type="text" />
        <button
          onClick={function () {
            if (temp === "add") {
              addToArray(document.querySelector(".inp").value);
            } else {
              splice();
            }
          }}
          type="button"
          className={`btn  ${
            temp === "add" ? "Adbtn-primaryd" : "btn-success"
          } btn-primary ms-3`}
        >
          {temp === "add" ? "Add" : "Update"}
        </button>
      </div>
      <div className="container">
        {array.map(function (ele, i) {
          return (
            <div key={i} className=" d-flex w-100 justify-content-between my-2">
              <div>{ele}</div>
              <div className="d-flex">
                <button
                  onClick={function () {
                    del(ele);
                  }}
                  className="btn btn-danger me-2"
                >
                  delete
                </button>
                <button
                  onClick={function () {
                    update(ele);
                  }}
                  className="btn btn-success"
                >
                  Update
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
