"use client";
import React from "react";
import z, { email } from "zod";

import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type LoginType = {
  email: String;
  password: String;
};

const LoginPage = () => {
  //TODO: Move this schema to schemas folder
  const LoginSchema = z.object({
    email: z.string().min(3),
    password: z.string().min(3),
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(LoginSchema) });

  const onSubmit: SubmitHandler<LoginType> = async (e: LoginType) => {
    //TODO Add Connection string here
    console.log(e);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-screen h-screen">
      LoginPage
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <Input type="email" placeholder="email" {...register("email")} />
        {errors.email && <p>Error in Email Address , {errors.email.message}</p>}
        <Input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        {errors.password && <p>Error in Password, {errors.password.message}</p>}
        <Button type="submit">Login</Button>
      </form>
      <Link href={"/auth/sign-up"}>
        <p>Dont have an account ? Sign up here</p>
      </Link>
    </div>
  );
};

export default LoginPage;
