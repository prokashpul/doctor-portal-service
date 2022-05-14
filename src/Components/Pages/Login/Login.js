import React, { useEffect, useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase.init";
import useToken from "../../../Hooks/useToken/useToken";
import Spinner from "../../Sheared/Spinner/Spinner";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, eUser, eLoading, eError] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const [token] = useToken(user || eUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  if (loading || eLoading) {
    return <Spinner></Spinner>;
  }
  let logInError;
  if (error) {
    logInError = error?.message;
  } else if (eError) {
    logInError = eError?.message;
  }

  return (
    <div className="flex justify-center items-center w-[100%] min-h-[87vh] my-16">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="font-bold text-2xl mb-5 text-center text-primary">
            Log in
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            {errors.email?.type === "pattern" && (
              <span className="text-red-500 mb-1">{errors.email?.message}</span>
            )}
            {errors.email?.type === "required" && (
              <span className="text-red-500 mb-1">{errors.email?.message}</span>
            )}
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="input input-bordered w-full mb-3"
              {...register("email", {
                required: { value: true, message: "Email field is required" },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Provide a valid Email",
                },
              })}
            />
            <label className="label" htmlFor="password">
              <span className="label-text">Password</span>
            </label>
            {errors.password?.type === "pattern" && (
              <span className="text-red-500 mb-1">
                {errors.password?.message}
              </span>
            )}
            {errors.password?.type === "required" && (
              <span className="text-red-500 mb-1">
                {errors.password?.message}
              </span>
            )}
            <input
              type="password"
              id="password"
              placeholder="Password "
              className="input input-bordered w-full my-5"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password field is required",
                },
                pattern: {
                  value: /^[a-zA-Z0-9!@#$%^&*]{8,16}$/,
                  message:
                    "Password a-zA-Z0-9!@#$%^& and 8 character to 16  character ",
                },
              })}
            />
            <p>Forgat password ?</p>

            <input
              className="btn btn-outline bg-accent text-neutral w-full my-3"
              type="submit"
              value="Log in"
            />
          </form>
          <p className="text-red-500 mb-1">{logInError}</p>
          <p>
            New to Doctors Portal ?
            <Link className="text-secondary ml-1" to="/register">
              Create new account
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-accent flex gap-5 text-xl"
          >
            <img src="https://i.ibb.co/cvbHMw3/Google.png" alt="google" />{" "}
            Google Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
