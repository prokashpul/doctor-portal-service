import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Spinner from "../../../Sheared/Spinner/Spinner";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data: service, isLoading } = useQuery("service", () =>
    fetch("http://localhost:5000/services").then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  const onSubmit = (data) => console.log(data);

  return (
    <div className="max-w-[500px] mx-auto shadow-2xl rounded-lg my-10  min-h-[85vh]">
      <h2 className="text-center text-2xl my-3">Add Doctor</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-5"
      >
        <div>
          <label className="label" htmlFor="name">
            <span className="label-text">
              Name<span className="text-red-500">*</span>:
            </span>
          </label>
          <input
            id="name"
            className="input input-bordered input-accent w-full"
            {...register("name", {
              required: { value: true, message: "Name field is required" },
            })}
          />
          {errors.name?.type === "required" && (
            <span className="text-red-500 mb-1">{errors.name?.message}</span>
          )}
        </div>

        <div>
          <label className="label" htmlFor="email">
            <span className="label-text">
              Email<span className="text-red-500">*</span>:
            </span>
          </label>
          <input
            id="email"
            className="input input-bordered input-accent w-full"
            type="email"
            {...register("email", {
              required: { value: true, message: "Email field is required.." },
            })}
          />
          {errors.email?.type === "required" && (
            <span className="text-red-500 mb-1">{errors.email?.message}</span>
          )}
        </div>
        <div>
          <label className="label" htmlFor="specialist">
            <span className="label-text">
              Specialist<span className="text-red-500">*</span>:
            </span>
          </label>
          <select
            {...register("specialist")}
            class="select select-bordered w-full "
          >
            {service?.map((s) => (
              <option key={s?._id}>{s.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="label" htmlFor="image">
            <span className="label-text">
              Image<span className="text-red-500">*</span>:
            </span>
          </label>
          <input
            id="image"
            className="form-control
          block
          w-full
          px-2
          py-1.5
          text-xl
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            {...register("image", {
              required: { value: true, message: "image field is required.." },
            })}
          />
          {errors.email?.type === "required" && (
            <span className="text-red-500 mb-1">{errors.image?.message}</span>
          )}
        </div>
        <input
          className="input input-bordered input-accent w-full mb-10"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
