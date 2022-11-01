import { faExchange } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }
    setError("extraError", { message: "Server offline" });
  };
  console.log(errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is Required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: "Your FirstName is required",
            validate: {
              noShit: (value) => (value.includes("psw") ? "no psw" : true),
              noWoo: (value) => (value.includes("woo") ? "no woo" : true),
            },
            minLength: {
              value: 10,
              message: "need 10 more letters",
            },
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", {
            required: "Your LastName is required",
            minLength: {
              value: 5,
              message: "need 5 more letters",
            },
          })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("username", {
            required: "Your Username is required",
            minLength: {
              value: 5,
              message: "need 5 more letters",
            },
          })}
          placeholder="Username"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register("password", {
            required: "Your Password is required",
            minLength: {
              value: 5,
              message: "need 5 more letters",
            },
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "Your Password is required",
            minLength: {
              value: 5,
              message: "need 5 more letters",
            },
          })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>

        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
