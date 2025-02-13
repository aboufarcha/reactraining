import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ExternalApi from "../../api/externalApi";
import useUserStore from "../../hooks/useUserStore";
import { useNavigate } from "react-router-dom";

type FormFields = {
  username: string;
  password: string;
};

const fetchLogin = async (data: any) => {
  const response = await ExternalApi.post("/login/1", data);
  console.log("data fetchLogin: ", response.data);
  return response.data;
};

const LoginForm = () => {
  const { setUsername } = useUserStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log("onsubmit result : ", data);
    axios
      .post("https://wmwvg.wiremockapi.cloud/login/1", data)
      .then((response) => {
        console.log("data : ", response.data);
        setUsername(response.data.username);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
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
          {...register("username", {
            required: "Email is required",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          })}
          className="bg-black border border-white-300 mb-2 font-spotifyMix text-xl rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-3.5"
          placeholder="Email or username"
        />
        {errors.username && (
          <p className="text-red-500 text-xs italic">
            {errors.username.message}
          </p>
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
