"use client";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { GiSecretBook } from "react-icons/gi";
import { MdOutlineLockReset } from "react-icons/md";
import {
  changePasswordSchema,
  TchangePasswordSchema,
} from "@/lib/zchangepasswordschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { notFound } from "next/navigation";
import Loading from "@/app/loading";

type Params = {
  params: {
    name: string;
  };
};

export default function ChangePassword({ params: { name } }: Params) {
  const { data: session, status } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
    setError,
  } = useForm<TchangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const [servererr, setServererr] = useState("");
  const onSubmit = async (values: TchangePasswordSchema) => {
    try {
      setServererr("");
      const res = await fetch("/api/changepassword", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          password: getValues("currentPassword"),
          newPassword: getValues("newPassword"),
        }),
      });
      if (res.ok) {
        toast.success(
          "Congratulation! Your password has been changed successfully."
        );
        reset();
      } else {
        const errored = await res.json();
        setServererr(errored.message);
      }
    } catch (error) {
      setServererr("something went wrong");
    }
  };

  if(status === "loading") return <Loading />
  else if(status === "authenticated" && session && session?.user?.name !== name) notFound()
  return (
    <div className="m-4 flex flex-col justify-center items-center">
      <div className="p-4 grid grid-cols-1 gap-4 w-[100%] sm:w-3/4 md:w-1/2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            {...register("currentPassword")}
            type="password"
            label="Current Password"
            variant="bordered"
            size="lg"
            fullWidth
            isInvalid={errors?.currentPassword ? true : false}
            errorMessage={errors?.currentPassword?.message}
          />
          <Input
            {...register("newPassword")}
            type="password"
            label="New Password"
            variant="bordered"
            size="lg"
            fullWidth
            isInvalid={errors?.newPassword ? true : false}
            errorMessage={errors?.newPassword?.message}
          />
          <Input
            {...register("confirmNewPassword")}
            type="password"
            label="Confirm new password"
            variant="bordered"
            size="lg"
            fullWidth
            isInvalid={errors?.confirmNewPassword ? true : false}
            errorMessage={errors?.confirmNewPassword?.message}
          />
          <div className="p-4 flex flex-col sm:flex-row justify-evenly gap-4">
            <Button
              type="submit"
              color="success"
              variant="flat"
              className="self-center"
              fullWidth
              endContent={
                <MdOutlineLockReset className="text-md pointer-events-none flex-shrink-0 text-success-300" />
              }
              disabled={isSubmitting ? true : false}
              isLoading={isSubmitting}
            >
              Change Password
            </Button>
            <Button
              as={Link}
              href="/forgotpassword"
              target="_blank"
              color="danger"
              variant="flat"
              className="self-center"
              fullWidth
              endContent={
                <GiSecretBook className="text-md pointer-events-none flex-shrink-0 text-danger-300" />
              }
            >
              Forgot Password
            </Button>
          </div>
          {servererr !== "" && (
            <div className="bg-red-500 mt-2 p-2 text-white text-center rounded-md transition-all">
              {servererr}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
