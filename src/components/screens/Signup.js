import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector(selectUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.error("Something went wrong", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        toast.error("Something went wrong", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  return (
    <>
      {user && <Navigate to="/" replace={true} />}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 w-72 mt-48 md:w-96 flex flex-col items-start mx-auto md:mt-44 px-6 py-6 md:px-12 md:py-12 rounded-sm"
      >
        <h1 className="text-xl font-semibold">Signup to continue</h1>
        <input
          name="email"
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-transparent outline-none border-b-2 border-cyan-400 text-md mt-6 w-full pb-2"
        />

        <input
          name="password"
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          className="bg-transparent outline-none border-b-2 border-cyan-400 text-md my-6 w-full pb-2"
        />

        <button className="bg-cyan-600 hover:bg-cyan-500 w-full py-3 text-lg font-semibold rounded-sm">
          Continue
        </button>
        <h5 className="text-sm mt-5">
          If you have already have an account,{" "}
          <Link to="/login" className="text-cyan-400 hover:underline">
            log in
          </Link>
        </h5>
      </form>
    </>
  );
};

export default Signup;
