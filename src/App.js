import { createContext, useState } from "react";
import Mui from "./components/Mui";
import TableDashboardComponent from "./components/TableDashboardComponent";
import PopModule from "./recycle bin/PopModule";

export const DataContext = createContext();
function App() {
  const [alldata, setAllData] = useState({ userData: [], setpopup: false });
  // const [alldata, setAllData] = useState({
  //   userData: [
  //     {
  //       name: "i_am_praditya",
  //       email: "majhipraditya@gmail.com",
  //       Mobile: "8839689090",
  //       contactName: "PRADITYA MANJHI",
  //       address: "Nai sadak braj vihar lashkar",
  //       date: "4564-06-04",
  //       message: "alphja ",
  //       gender: "Male",
  //       id: 1,
  //     },
  //     {
  //       name: "alpha",
  //       email: "hello@gmail.com",
  //       Mobile: "2556",
  //       contactName: "PRADITYA ",
  //       address: "Nyasdai sadak braj vihar colony lashkar",
  //       date: "4564-236-04",
  //       message: "xlphja ",
  //       gender: "Male",
  //       id: 2,
  //     },
  //     {
  //       name: "sam",
  //       email: "sam@gmail.com",
  //       Mobile: "148956226",
  //       contactName: "PRADITYA MANJHI8",
  //       address: "heram gali pareshan ",
  //       date: "4564-06-0122",
  //       message: "rlphja ",
  //       gender: "Male",
  //       id: 3,
  //     },
  //     {
  //       name: "sam",
  //       email: "sam@gmail.com",
  //       Mobile: "148956226",
  //       contactName: "PRADITYA MANJHI8",
  //       address: "heram gali pareshan ",
  //       date: "4564-06-0122",
  //       message: "rlphja ",
  //       gender: "Male",
  //       id: 4,
  //     },
  //   ],
  //   setpopup: false,
  // });
  return (
    <DataContext.Provider value={[alldata, setAllData]}>
      <div className="App ">
        <TableDashboardComponent />
        <Mui />
        {/* <PopModule /> */}
      </div>
    </DataContext.Provider>
  );
}
export default App;
