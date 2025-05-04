import React, { use } from "react";
import { IoCheckboxOutline } from "react-icons/io5";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

    const {createUser} = use(AuthContext)


  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, password, photo, email);

    createUser(email, password)
    .then(result=> {
        console.log(result.user);
    })
    .catch(error =>{
        console.log(error);
    })


  };

  return (
    <div className="flex justify-center items-center">
      <div className=" bg-base-100 w-full max-w-xl shrink-0 ">
        <div className="px-12  py-5 ">
          <h1 className="text-2xl text-[#403F3F] text-center py-8 border-b-1 border-gray-300 font-bold">
            Register your account
          </h1>
          <form
            onSubmit={handleRegister}
            className="fieldset  mx-auto lg:w-9/12 mt-5 "
          >
            <label className="label text-sm  font-bold">Your Name</label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label className="label text-sm  font-bold">Photo URL</label>
            <input
              type="text"
              className="input"
              name="photo"
              placeholder="Enter your Photo URL"
              required
            />

            <label className="label text-sm  font-bold ">Email address</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Enter your email address"
              required
            />

            <label className="label text-sm  font-bold">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover flex items-center gap-1 ">
                {" "}
                <IoCheckboxOutline size={20} /> Accept Term & Conditions
              </a>
            </div>
            <button type="submit" className="btn bg-[#403F3F] text-white mt-4">
              Register
            </button>
          </form>
          <p className="text-xs text-center">
            Already Have An Account ?{" "}
            <Link to="/auth/login">
              <span className="text-red-400 font-semibold">Log In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
