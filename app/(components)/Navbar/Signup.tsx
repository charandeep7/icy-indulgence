import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { FaLock, FaUser } from "react-icons/fa6";
import { RiMailLine } from "react-icons/ri";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TSignUpSchema, signUpSchema } from "@/lib/zsignupschema";
import { useRouter } from "next/navigation";

export default function Signup() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
  const onSubmit = async (values: TSignUpSchema) => {
    try {
      const res = await fetch("/api/authorization", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
      });
      if (res.ok) {
        reset();
        // router.push("/signin");
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
      <Button onPress={onOpen} color="primary" size="sm" variant="flat">
        Sign Up
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
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
                    {...register("username")}
                  />
                  {errors.username && (
                    <p className="text-red-500">{`${errors.username.message}`}</p>
                  )}
                  <Input
                    endContent={
                      <RiMailLine className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Email"
                    placeholder="Enter email"
                    variant="bordered"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500">{`${errors.email.message}`}</p>
                  )}
                  <Input
                    endContent={
                      <FaLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Password"
                    placeholder="Enter password"
                    type="password"
                    variant="bordered"
                    {...register("password")}
                  />
                  {errors.password && (
                    <p className="text-red-500">{`${errors.password.message}`}</p>
                  )}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button type="submit" color="primary">
                    {isSubmitting ? "Loading..." : "Sign Up"}
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
    </>
  );
}
