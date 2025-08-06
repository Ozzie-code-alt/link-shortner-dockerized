"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod"; // Add new import
import { useEffect, useState } from "react";

type FormValues = {
  link?: string;
};

export const formSchema = z.object({
  link: z.string().min(8, { message: "Link is too short" }).optional(),
});

export default function Home() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  const [minifiedLink, setMinifiedLink] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    const response = await fetch("/api/link", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        url: data,
      }),
    });

    const result = await response.json();
    setMinifiedLink(result.slug);
  };

  return (
    <div className="flex flex-col gap-2.5 w-screen h-screen  justify-center items-center">
      <form
        className="gap-2.5 flex justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="w-full flex justify-center max-w-[500px] items-center border border-blue-500 "
          {...register("link")}
        />
        {errors.link && (
          <span className="error-message">
            {"Error in Link Field " + errors.link.message}
          </span>
        )}
        <input type="submit" />
      </form>
      {minifiedLink ? (
        <a
          href={`http://localhost:3000/${minifiedLink}`}
          className="text-black border border-red-500"
        >
          {"Test Link"}
        </a>
      ) : (
        <p>Link will appear here</p>
      )}
    </div>
  );
}
