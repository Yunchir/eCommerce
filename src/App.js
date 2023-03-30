import React, { createContext, useEffect, useState } from "react";
import Header from "./usersBrowser/components/Header";
import Main from "./usersBrowser/components/Main";
import Footer from "./usersBrowser/components/Footer";
import SignIn from "./usersBrowser/components/SignIn";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProductPage from "../src/usersBrowser/components/Main/ProductPage";
import Search from "./usersBrowser/components/Main/Search";
import { users } from "./util/data";
import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

function App() {
  const [signIn, setSignIn] = useState(false);
  const [data, setData] = useState();

  const Navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:6060/products").then((res) => {
      setData(res.data);
    });
  }, []);

  function loginHandler(userName, userPassword) {
    users.map((user) => {
      if (userName === user.userName && userPassword === user.password) {
        if (userName.role === "admin") {
          Navigate("/admin");
          setSignIn(true);
        } else {
          Navigate("/");
          setSignIn(true);
        }
      }
    });
  }

  return (
    <div className="app container">
      <DataContext.Provider value={{ data, setData, loginHandler, setSignIn }}>
        <Header />
        {signIn ? <SignIn sign={setSignIn} /> : null}
        <Routes>
          <Route path="/sing" element={<SignIn />} />
          <Route path="/Page/:id" element={<ProductPage />} />
          <Route path="/" element={<Main />} />
          <Route path="/search/:product" element={<Search />} />
        </Routes>
        <Footer />
      </DataContext.Provider>
    </div>
  );
}

export default App;
