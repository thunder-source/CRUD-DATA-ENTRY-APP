import React, { createContext, useState } from "react";
import Mui from "../components/Mui";
import Card from "./Card";

export const DataContext = createContext();
function PopModule() {
  const [alldata, setAllData] = useState({
    setChoice: "default",
    setpopup: false,
  });

  const handleClickOpen = (e) => {
    if (e.target.value == "Student Form") {
      setAllData({ ...alldata, setpopup: true, setChoice: e.target.value });
    } else {
      setAllData({ ...alldata, setpopup: false, setChoice: e.target.value });
    }
  };

  const closePopup = () => {
    setAllData({ ...alldata, setChoice: "default", setpopup: false });
  };

  return (
    <DataContext.Provider value={[alldata, setAllData]}>
      <div className="flex-col flex items-center justify-center ">
        <select
          onChange={handleClickOpen}
          value={alldata.setChoice}
        >
          <option value={"default"} disabled>
            Choose an option
          </option>
          <option value="Student Form">Student Form</option>
          <option value="Addres">Addres</option>
          <option value="city">city</option>
        </select>
        <div>
          {alldata.setpopup ? (
            <div className="w-screen">
              <div className="flex ak flex-col">
                <div className="popup">
                  <h1 onClick={closePopup} className="">
                    X
                  </h1>
                </div>
                <Mui />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      </DataContext.Provider>
      );
    }
    export default PopModule;
    // <Card />
