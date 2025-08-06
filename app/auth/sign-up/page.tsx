"use client";
import React from "react";
import z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignUpPage = () => {
  type SignUpTypes = {
    name: String;
    email: String;
    image?: String;
    password: String;
  };

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpTypes>();
  //TODO: Add Zod form validation
  const SignUpSubmit: SubmitHandler<SignUpTypes> = async (e: SignUpTypes) => {
    console.log(e);
  };
  return (
    <div className="w-screen h-screen flex flex-col gap-6 justify-center items-center">
      SignUpPage
      <form
        className="gap-3 flex flex-col"
        onSubmit={handleSubmit(SignUpSubmit)}
      >
        <Input type="text" placeholder="name" {...register("name")} />
        {/*TODO Add Errors here */}
        <Input type="email" placeholder="email" {...register("email")} />
        <Input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};
export default SignUpPage;
