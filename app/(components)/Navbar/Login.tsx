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
import { FaLock } from "react-icons/fa6";
import { RiMailLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TSignInSchema, signInSchema } from "@/lib/zsigninschema";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import NextLink from "next/link";

export default function Login() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
  const router = useRouter();
  const [servererr, setServererr] = useState("");
  const onSubmit = async (value: TSignInSchema) => {
    setServererr("");
    try {
      const res = await signIn("credentials", {
        email: value.email,
        password: value.password,
        redirect: false,
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
  return (
    <>
      <Button onPress={onOpen} color="success" size="sm" variant="flat">
        Sign In
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
              <ModalHeader className="flex flex-col gap-1">Sign in</ModalHeader>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ModalBody>
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
                  <div className="flex py-2 px-1 justify-between">
                    <Checkbox
                      classNames={{
                        label: "text-small",
                      }}
                    >
                      Remember me
                    </Checkbox>
                    <Link
                      as={NextLink}
                      color="primary"
                      href="/forgotpassword"
                      target="_blank"
                      size="sm"
                    >
                      Forgot password?
                    </Link>
                  </div>
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
                    Sign In
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
