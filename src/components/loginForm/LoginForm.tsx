import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-5 md:px-[5.5rem]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label className="block mb-2 text-neutral-50 text-bold font-medium">
          Email or username
        </label>
        <input
          type="text"
          {...register("email", {
            required: "Email is required",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          })}
          className="bg-black border border-white-300 mb-2 font-spotifyMix text-xl rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-3.5"
          placeholder="Email or username"
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label className="block mb-2 text-neutral-50 font-medium">
          Password
        </label>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
          placeholder="Password"
          className="bg-black border border-white-300 text-xl rounded-md mb-2 focus:border-neutral-50 block w-full p-3.5"
        />
        {errors.password && (
          <p className="text-red-500 text-xs italic">
            {errors.password.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="w-full px-8 h-14 p-3.5 rounded-full bg-green-500 text-base text-neutral-900 font-semibold flex items-center justify-center hover:scale-105 ease-in-out duration-100"
      >
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
