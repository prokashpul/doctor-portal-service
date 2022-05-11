import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../../Firebase.init";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  if (user) {
    console.log(user);
  }

  return (
    <div className="flex justify-center items-center w-[100%] h-[87vh]">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="font-bold text-2xl mb-5 text-center text-primary">
            Log in
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label class="label" htmlFor="email">
              <span class="label-text">Email</span>
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
            <label class="label" htmlFor="password">
              <span class="label-text">Password</span>
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
              className="input input-bordered w-full mb-5"
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

            <input
              className="btn btn-outline btn-accent w-full mb-3"
              type="submit"
              value="Log in"
            />
          </form>
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
