import React from "react";
// import User from "./usersBrowser/components/User";
// import Dashboard from "./mainDashboard/Dashboard";
import Header from "./usersBrowser/components/Header";
import Main from "./usersBrowser/components/Main";
import Footer from "./usersBrowser/components/Footer";
import SignIn from "./usersBrowser/components/SignIn";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductPage from "../src/usersBrowser/components/Main/ProductPage";
import Search from "./usersBrowser/components/Main/Search";
import { useNavigate } from "react-router-dom";
import { users } from "./util/data";

function App() {
  const [signIn, setSignIn] = useState();
  const [data, setData] = useState(false);

  const Navigate = useNavigate();
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
      <Header setSign={setSignIn} />
      {signIn ? <SignIn sign={setSignIn} /> : null}

      <Routes>
        <Route
          path="/sing"
          element={
            <SignIn
              users={data}
              setData={setData}
              loginHandler={loginHandler}
            />
          }
        />
        <Route path="/Page/:id" element={<ProductPage />} />
        <Route path="/" element={<Main />} />
        <Route path="/search/:product" element={<Search />} />
        {/* <Route path="/search/:product" element={<User />} /> */}
        {/* <Route path="/admin" element={<Dashboard />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
