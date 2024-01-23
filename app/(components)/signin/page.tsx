"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
import { TSignInSchema, signInSchema } from "@/lib/zsigninschema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignIn() {
  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/api/auth/signin?callbackUrl=/client");
  //   },
  // });
  const { register, handleSubmit, formState: {errors, isSubmitting}, reset, getValues, setError } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })
  const router = useRouter();
  const [servererr, setServererr] = useState("");
  const onSubmit = async (value: TSignInSchema) => {
    try {
      const res = await signIn("credentials", {
        email: value.email,
        password: value.password,
        redirect: false,
      });
      console.log(res)
      if (res?.error) {
        const errored = res.error;
        setServererr(errored);
        return;
      }
      reset()
      router.replace("/");
    } catch (error) {
      setServererr("something went wrong");
    }
  };

  return (
    <section>
      <div className="flex flex-col sm:flex-row">
        <div className="flex items-center justify-center w-full sm:w-1/2 px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Sign in
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                title=""
                className="font-semibold transition-all duration-200 hover:underline"
              >
                Create a free account
              </Link>
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900 dark:text-gray-100"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-red-500">{`${errors.email.message}`}</p>
                    )}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900 dark:text-gray-100"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <a
                      href="#"
                      title=""
                      className="text-sm font-semibold hover:underline"
                    >
                      {" "}
                      Forgot password?{" "}
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      {...register("password")}
                    />
                    {errors.email && (
                      <p className="text-red-500">{`${errors.password?.message}`}</p>
                    )}
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black dark:bg-white px-3.5 py-2.5 font-semibold leading-7 text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/90"
                    disabled={isSubmitting ? true : false}
                  >
                    {isSubmitting ? "Loading..." : "Get started"}{" "}
                  </button>
                </div>
              </div>
            </form>
            {servererr !== "" && (
              <div className="bg-red-500 mt-2 p-2 text-white text-center capitalize rounded-md transition-all">
                {servererr}
              </div>
            )}
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <Image src='/i2.jpg' alt="ice" height={500} width={500} className="h-[500px] w-[500px] object-contain drop-shadow-2xl p-4" />
        </div>
      </div>
    </section>
  );
}
