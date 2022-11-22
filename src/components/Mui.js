import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";
import validator from "validator";

const Mui = () => {
  const [alldata, setAllData] = useContext(DataContext);

  // name: "i_am_praditya",
  // email: "majhipraditya@gmail.com",
  // Mobile: "8839689090",
  // contactName: "PRADITYA MANJHI",
  // address: "Nai sadak braj vihar lashkar",
  // date: "4564-06-04",
  // message: "alphja ",
  // gender: "Male",
  // id: 1,
  const [user, setUser] = useState({
    name: "",
    email: "",
    Mobile: "",
    contactName: "",
    address: "",
    date: "",
    message: "",
    gender: "",
  });

  const [gender, setGender] = useState("");
  console.log(alldata);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value, id: Date.now() });
  };
  const handleClickOpen = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();

    const valiadation = () => {
      return validator.isEmail(user.email);
    };
    if (valiadation()) {
      if (alldata.edit) {
        console.log("data edited");
        setAllData((prev) => {
          prev.userData.map((e) => {
            if (e.id === alldata.edit) {
              e.email = user.email;
              e.phone = user.phone;
              e.username = user.username;
            }
          });
          return prev;
        });
        setAllData({
          ...alldata,
          setChoice: "default",
          setpopup: false,
          edit: null,
        });
      } else {
        setAllData((prev) => {
          prev.userData === undefined
            ? (prev.userData = [user])
            : prev.userData.push(user);
          return prev;
        });
        setAllData({ ...alldata, setChoice: "default", setpopup: false });
        console.log(JSON.stringify(alldata));
      }
    }
  };
  useEffect(() => {
    if (alldata.editData) {
      setUser({
        name: alldata.editData.name,
        email: alldata.editData.email,
        Mobile: alldata.editData.Mobile,
        contactName: alldata.editData.contactName,
        address: alldata.editData.address,
        date: alldata.editData.date,
        message: alldata.editData.message,
        gender: alldata.editData.gender,
      });
      console.log(user);
    }
  }, [alldata]);

  // const closePopup = () => {
  //   setAllData({ ...alldata, setChoice: "default", setpopup: false });
  // };
  // console.log(alldata.setpopup);

  return (
    alldata.setpopup && (
      <div className="form_div w-full">
        <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
          <h1 className="text-xl text-center font-bold text-white capitalize dark:text-white">
            student enquery forms
          </h1>
          <form action="#" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="username"
                >
                  Account Name
                </label>
                <input
                  onChange={handleInput}
                  value={user.name}
                  placeholder="enter you username"
                  name="name"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="emailAddress"
                >
                  Email Address
                </label>
                <input
                  onChange={handleInput}
                  value={user.email}
                  placeholder="enter you email"
                  name="email"
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="emailAddress"
                >
                  Mobile number
                </label>
                <input
                  onChange={handleInput}
                  value={user.Mobile}
                  placeholder="enter your mobile"
                  name="Mobile"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="emailAddress"
                >
                  contact Name
                </label>
                <input
                  onChange={handleInput}
                  placeholder="enter your contact Name"
                  value={user.contactName}
                  name="contactName"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="emailAddress"
                >
                  Address
                </label>
                <input
                  onChange={handleInput}
                  placeholder="enter your Address"
                  value={user.address}
                  name="address"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="passwordConfirmation"
                >
                  case Type
                </label>
                <select
                  value="default"
                  onChange={handleClickOpen}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                >
                  <option value="Surabaya">Surabaya</option>
                  <option value="Jakarta">Jakarta</option>
                  <option value="Tangerang">Tangerang</option>
                </select>
              </div>

              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="passwordConfirmation"
                >
                  Date of Birth
                </label>
                <input
                  onChange={handleInput}
                  value={user.date}
                  name="date"
                  type="date"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="passwordConfirmation"
                >
                  Text Area
                </label>
                <textarea
                  onChange={handleInput}
                  value={user.message}
                  name="message"
                  id="message"
                  type="textarea"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                ></textarea>
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="passwordConfirmation"
                >
                  Gender
                </label>
                <div>
                  <input
                    onChange={handleInput}
                    checked={gender === "Male"}
                    value="Male"
                    name="gender"
                    type="radio"
                    className="block  px-4 py-2 mt-1 mr-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="passwordConfirmation"
                  >
                    male
                  </label>
                </div>
                <div>
                  <input
                    onChange={handleInput}
                    checked={gender === "female"}
                    value="female"
                    type="radio"
                    name="gender"
                    className="block  px-4 py-2 mt-1 mr-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="passwordConfirmation"
                  >
                    female
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    )
  );
};

export default Mui;

// papa ka call hia ruk
