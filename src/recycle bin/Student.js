import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "./PopModule";
import validator from "validator";
const Student = () => {
  const [alldata, setAllData] = useContext(DataContext);

  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const addItems = () => {
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
      }
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value, id: Date.now() });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (alldata.edit) {
      alldata.userData.map((e) => {
        if (alldata.edit === e.id) {
          setUser({
            username: e.username,
            email: e.email,
            phone: e.phone,
          });
        }
      });
    }
  }, []);

  return (
    <div>
      <div className="bg-white dark:bg-gray-900">
        <div className="py-8  px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className=" lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Student Enquirements htmlForms
          </p>
          <form action="" onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                value={user.email}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                username
              </label>
              <input
                type="text"
                name="username"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                value={user.username}
                onChange={handleInput}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your number
              </label>
              <input
                type="mobile"
                name="phone"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                value={user.phone}
                onChange={handleInput}
                required
              />
            </div>
            <button
              type="submit"
              onClick={addItems}
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Student;
