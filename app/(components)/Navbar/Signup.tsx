import React, { useState } from "react";
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
import { FaLock, FaUser } from "react-icons/fa6";
import { RiMailLine } from "react-icons/ri";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TSignUpSchema, signUpSchema } from "@/lib/zsignupschema";
import { useRouter } from "next/navigation";
import { CiPhone } from "react-icons/ci";
import toast from "react-hot-toast";

export default function Signup() {
  const signupmodel = useDisclosure();
  const otpmodel = useDisclosure();
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
  const router = useRouter();
  const [servererr, setServererr] = useState("");
  const [otperror, setOtperror] = useState("");
  const [otpinput, setOtpinput] = useState("");
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
      router.push("/");
      signupmodel.onClose();
      otpmodel.onClose();
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
        otpmodel.onOpen();
        sendOTP();
      } else {
        const errored = await res.json();
        setServererr(errored.message);
      }
    } catch (error) {
      setServererr("something went wrong");
    }
  };
  return (
    <>
      <Button
        onPress={signupmodel.onOpen}
        color="primary"
        size="sm"
        variant="flat"
      >
        Sign Up
      </Button>
      <Modal
        isOpen={signupmodel.isOpen}
        onOpenChange={signupmodel.onOpenChange}
        placement="center"
        backdrop="opaque"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Sign up</ModalHeader>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ModalBody>
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
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    type="submit"
                    color="primary"
                    isLoading={isSubmitting}
                  >
                    Sign Up
                  </Button>
                </ModalFooter>
              </form>
              {servererr !== "" && (
                <div className="bg-red-500 mt-2 p-2 text-white text-center capitalize rounded-md transition-all">
                  {servererr}
                </div>
              )}
            </>
          )}
        </ModalContent>
      </Modal>

      {/* otp model */}
      <Modal
        isOpen={otpmodel.isOpen}
        placement="center"
        className="m-4"
        onOpenChange={otpmodel.onOpenChange}
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
    </>
  );
}
