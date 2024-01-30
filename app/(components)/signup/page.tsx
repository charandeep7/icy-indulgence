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
import { FaLock, FaUser } from "react-icons/fa6";
import { RiMailLine } from "react-icons/ri";

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
  const [otp, setOTP] = useState<number>();
  const sendOTP = async () => {
    const newotp = Math.floor(100000 + Math.random() * 900000);
    setOTP(newotp);
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
      toast.success("Verified 😻");
      router.push("/signin");
    } else {
      setOtperror("Wrong OTP");
    }
  };
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
        sendOTP();
      } else {
        const errored = await res.json();
        setServererr(errored.message);
      }
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
      <div className="flex flex-col m-8 justify-center items-center sm:flex-row">
        <div className="p-4 w-[100%] sm:w-2/3 md:w-1/3 rounded-xl bg-white/20 dark:bg-black/20 shadow-lg dark:shadow-gray-700 ring-1 ring-black/5 dark:ring-white/10">
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
                <div className="mt-2">
                  <Input
                    autoFocus
                    endContent={
                      <FaUser className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Username"
                    placeholder="Enter username"
                    variant="bordered"
                    isInvalid={errors?.username ? true : false}
                    errorMessage={errors?.username?.message}
                    {...register("username")}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <Input
                    endContent={
                      <RiMailLine className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Email"
                    placeholder="Enter email"
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
                    placeholder="Enter password"
                    type="password"
                    variant="bordered"
                    isInvalid={errors?.password ? true : false}
                    errorMessage={errors?.password?.message}
                    {...register("password")}
                  />
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
                  Create Account
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
      <Modal
        isOpen={isOpen}
        placement="center"
        className="m-4"
        onOpenChange={onOpenChange}
        isDismissable={false}
      >
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
