import { faExchange } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, watch, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          style={{ display: "flex", flexDirection: "column" }}
          {...register("email", { required: true })}
          placeholder="Email"
        />
        <input
          {...register("firstName", {
            required: "firstName required",
            minLength: 10,
          })}
          placeholder="First Name"
        />
        <input
          {...register("lastName", {
            required: true,
            minLength: {
              value: 5,
              message: "lastname need more than 5 letter",
            },
          })}
          placeholder="Last Name"
        />
        <input
          {...register("username", { required: true, minLength: 10 })}
          placeholder="Username"
        />
        <input
          {...register("password", { required: true, minLength: 5 })}
          placeholder="Password"
        />
        <input
          {...register("password1", { required: true, minLength: 5 })}
          placeholder="Password1"
        />

        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
