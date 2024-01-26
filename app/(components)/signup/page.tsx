"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TSignUpSchema, signUpSchema } from "@/lib/zsignupschema";
import toast from "react-hot-toast";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { CiPhone } from "react-icons/ci";
import { useSession } from "next-auth/react";
import Loading from "@/app/loading";

export default function SignUp() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [otperror, setOtperror] = useState("");
  const [otpinput, setOtpinput] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
    setError,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const [servererr, setServererr] = useState("");
  const [otp,setOTP] = useState<number>()
  const sendOTP = async () => {
    const newotp = Math.floor(100000 + Math.random() * 900000)
    setOTP(newotp)
    const otpverify = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        otp: newotp,
        email: getValues("email"),
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    if (otpverify.ok) {
      //
    } else {
      setOtperror("Something went wrong");
      return null;
    }
  };
  const verifyOTP = async () => {
    if (parseInt(otpinput.trim()) === otp) {
      await fetch("/api/authorization", {
        method: "POST",
        body: JSON.stringify({
          username: getValues("username"),
          email: getValues("email"),
          password: getValues("password"),
          createnow: true,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      reset();
      toast.success('Verified 😻')
      router.push("/signin");
    } else {
      setOtperror("Wrong OTP");
    }
  }
  const onSubmit = async (values: TSignUpSchema) => {
    try {
      const res = await fetch("/api/authorization", {
        method: "POST",
        body: JSON.stringify({
          ...values,
          createnow: false,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      if (res.ok) {
        // otp
        setServererr("");
        toast.success("Check your mail for OTP ✅");
        // open modal
        onOpen();
        sendOTP()
      } else {
        const errored = await res.json();
        setServererr(errored.message);
      }
    } catch (error) {
      setServererr("something went wrong");
    }
  };
  if (status === "loading") {
    return <Loading />
  }else if(status === "authenticated"){
    router.replace('/')
    return <></>;
  }
  return (
    <section>
      <div className="flex flex-col sm:flex-row">
        <div className="flex items-center justify-center w-full sm:w-1/2 px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Sign up
            </h2>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-200">
              Already have an account?{" "}
              <Link
                href="/signin"
                title=""
                className="font-medium transition-all duration-200 hover:underline"
              >
                Sign In
              </Link>
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900 dark:text-gray-100"
                  >
                    {" "}
                    Username{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="username"
                      {...register("username")}
                    />
                    {errors.username && (
                      <p className="text-red-500">{`${errors.username.message}`}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
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
                      htmlFor="password"
                      className="text-base font-medium text-gray-900 dark:text-gray-100"
                    >
                      {" "}
                      Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      {...register("password")}
                    />
                    {errors.password && (
                      <p className="text-red-500">{`${errors.password.message}`}</p>
                    )}
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black dark:bg-white px-3.5 py-2.5 font-semibold leading-7 text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/90"
                    disabled={isSubmitting ? true : false}
                  >
                    {isSubmitting ? "Loading..." : "Create Account"}
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
          <Image
            src="/i2.jpg"
            alt="ice"
            height={500}
            width={500}
            className="h-[500px] w-[500px] object-contain drop-shadow-2xl p-4"
          />
        </div>
      </div>
      <Modal isOpen={isOpen} placement="center" className="m-4" onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Verify your account
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <CiPhone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="OTP"
                  placeholder="Enter otp"
                  variant="bordered"
                  type="text"
                  onChange={(e) => setOtpinput(e.target.value)}
                />
                {otperror && <p className="text-red-500">{`${otperror}`}</p>}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={() => verifyOTP()}>
                  Verify
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}
