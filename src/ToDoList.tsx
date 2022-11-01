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
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: any) => {
    console.log(data);
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
      </form>
    </div>
  );
}

export default ToDoList;
