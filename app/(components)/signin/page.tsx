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
import Loading from "@/app/loading";
import { Button, Input } from "@nextui-org/react";
import { RiMailLine } from "react-icons/ri";
import { FaLock } from "react-icons/fa6";

export default function SignIn() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
    setError,
  } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [servererr, setServererr] = useState("");
  const onSubmit = async (value: TSignInSchema) => {
    try {
      const res = await signIn("credentials", {
        email: value.email,
        password: value.password,
        redirect: false,
        // callbackUrl
      });
      if (res?.error) {
        const errored = res.error;
        setServererr(errored);
        return;
      }
      reset();
      router.replace("/");
    } catch (error) {
      setServererr("something went wrong");
    }
  };

  if (status === "loading") {
    return <Loading />;
  } else if (status === "authenticated") {
    router.replace("/");
    return <></>;
  }
  return (
    <section>
      <div className="flex flex-col justify-center items-center m-8 sm:flex-row">
          <div className="p-4 w-[100%] sm:w-2/3 md:w-1/3 rounded-xl bg-white/20 dark:bg-black/20 shadow-lg dark:shadow-gray-700 ring-1 ring-black/5 dark:ring-white/10">
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
                  <div className="mt-2">
                    <Input
                      autoFocus
                      endContent={
                        <RiMailLine className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      label="Email"
                      placeholder="Enter your email"
                      variant="bordered"
                      isInvalid={errors?.email ? true : false}
                      errorMessage={errors?.email?.message}
                      {...register("email")}
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <Input
                      endContent={
                        <FaLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                      variant="bordered"
                      isInvalid={errors?.password ? true : false}
                      errorMessage={errors?.password?.message}
                      {...register("password")}
                    />
                  </div>
                  <div className="flex items-center justify-end mt-2">
                    <Link
                      href="/forgotpassword"
                      target="_blank"
                      className="text-sm font-semibold hover:underline"
                    >
                      {" "}
                      Forgot password?{" "}
                    </Link>
                  </div>
                </div>
                <div>
                  <Button
                    type="submit"
                    className="bg-black dark:bg-white px-3.5 py-2.5 font-semibold leading-7 text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/90"
                    fullWidth
                    disabled={isSubmitting ? true : false}
                    isLoading={isSubmitting}
                  >
                    Get started
                  </Button>
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
    </section>
  );
}
