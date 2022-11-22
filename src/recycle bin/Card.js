import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "./PopModule";

function Card() {
  const [alldata, setAllData] = useContext(DataContext);
  const [itemChange, setitemChange] = useState(false);

  const deleteItem = (id) => {
    // console.log("called id")
    setitemChange(!itemChange);
    setAllData((prev) => {
      prev.userData = prev.userData.filter((element) => {
        return element.id !== id;
      });
      return prev;
    });
  };

  const editItem = (cureElem) => {
    setAllData({
      ...alldata,
      setpopup: true,
      setChoice: "Student Form",
      edit: cureElem.id,
    });
  };

  useEffect(() => {
    // setAllData(alldata);
  }, [itemChange]);

  return (
    <div>
      {alldata.userData === undefined || alldata.userData.length === 0 ? (
        <></>
      ) : (
        <div className="showItems w-full">
          <div className="each_items">
            <div className="data ">
              <div className="col ">
                <h3>UserName</h3>
                <h3>email</h3>
                <h3>phone number</h3>
                <h3>Edit</h3>
                <h3>Delete</h3>
              </div>

              {alldata.userData.map((cureElem) => {
                return (
                  <div className="col2  " key={cureElem.id}>
                    <p>{cureElem.username}</p>
                    <p>{cureElem.email}</p>
                    <p> {cureElem.phone}</p>
                    <div className="btn" onClick={() => editItem(cureElem)}>
                      <i className="fa-solid fa-plus"></i>
                    </div>
                    <div
                      className="btn"
                      onClick={() => deleteItem(cureElem.id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
