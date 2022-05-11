import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase.init";
import Spinner from "../../Sheared/Spinner/Spinner";

const Register = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, eUser, eLoading, eError] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  if (loading || updating || eLoading) {
    return <Spinner></Spinner>;
  }
  let logInError;
  if (error) {
    logInError = error?.message;
  } else if (eError) {
    logInError = eError?.message;
  } else if (updateError) {
    logInError = updateError?.message;
  }
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };

  if (user || eUser) {
    console.log(user || eUser);
    navigate(from, { replace: true });
  }
  return (
    <div className="flex justify-center items-center w-[100%] min-h-[87vh] my-20">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="font-bold text-2xl mb-5 text-center text-primary">
            Sin Up
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="label" htmlFor="name">
              <span className="label-text">Name</span>
            </label>

            {errors.name?.type === "required" && (
              <span className="text-red-500 mb-1">{errors.name?.message}</span>
            )}
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="input input-bordered w-full mb-3"
              {...register("name", {
                required: { value: true, message: "Name field is required" },
              })}
            />
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
            <p className="text-primary mb-1">Forgat password ?</p>
            <p className="text-red-500 mb-1">{logInError}</p>
            <input
              className="btn btn-outline bg-accent text-neutral w-full my-3"
              type="submit"
              value=" Sin Up"
            />
          </form>
          <p>
            Already have an account ?
            <Link className="text-secondary ml-1" to="/login">
              Log in
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

export default Register;
