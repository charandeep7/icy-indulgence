"use client";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CiPhone } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export default function page() {
  const otpModel = useDisclosure();
  const cpassword = useDisclosure()
  const { data, status } = useSession();
  const [form, setForm] = useState({ email: "", otp: "" });
  const [invalid, setInvalid] = useState("");
  const [otp, setOTP] = useState<number>();
  const [otperror, setOtperror] = useState("");
  const [newpsswd,setNewpsswd] = useState("");
  const [newpsswderr,setNewpsswderr] = useState("")

  useEffect(() => {
    if (data?.user?.email) {
      setForm({ ...form, email: data?.user?.email });
    }
  }, [status]);
  const [servererr, setServererr] = useState("");
  
  const handleChangePassword = async () => {
    if(newpsswd.trim().length < 6){
      setNewpsswderr("Min 6 characters requred")
      return
    }
    try {
      const res = await fetch("/api/forgotpassword",{
        method: "POST",
        body: JSON.stringify({
          email: form.email,
          newPassword: newpsswd
        }),
        headers: {
          "content-type": "application/json",
        }
      })
      if (res.ok) {
        toast.success(
          "Congratulation! Your password has been changed successfully."
        );
        let timer = setTimeout(() => {
          window.close()
        },2000)
        return () => clearTimeout(timer)
      } else {
        const errored = await res.json();
        setNewpsswderr(errored.message);
      }
    }catch(error) {
      setNewpsswderr("something went wrong")
    }
  }

  const sendOTP = async () => {
    const newotp = Math.floor(100000 + Math.random() * 900000);
    setOTP(newotp);
    const otpverify = await fetch("/api/reset", {
      method: "POST",
      body: JSON.stringify({
        otp: newotp,
        email: form.email,
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
    if (parseInt(form.otp.trim()) === otp) {
      await fetch("/api/authorization", {
        method: "POST",
        body: JSON.stringify({
          email: form.email,
          
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      otpModel.onClose()
      toast.success("Verified 😻");
      cpassword.onOpen()
    } else {
      setOtperror("Wrong OTP");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(form.email)) {
      setInvalid("Please enter a valid email");
      return;
    }
    setInvalid("");

    try {
      const res = await fetch(`/api/forgotpassword?email=${form.email}`);
      const { message } = await res.json();
      if (res.ok) {
        setServererr("");
        toast.success("Check your mail for OTP ✅");
        otpModel.onOpen();
        sendOTP();
      } else {
        setServererr(message);
      }
    } catch (error) {
      setServererr("something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center m-4">
      <form onSubmit={handleSubmit} className="w-[100%] sm:w-1/2 md:w-1/3">
        <Input
          type="email"
          label="Email"
          variant="bordered"
          size="lg"
          fullWidth
          description="We'll never share your email with anyone else."
          endContent={
            <MdEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          isInvalid={invalid === "" ? false : true}
          errorMessage={invalid}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          isDisabled={data?.user?.email ? true : false}
        />
        <Button type="submit" color="primary" variant="flat">
          Verify Email
        </Button>
        {servererr !== "" && (
          <div className="bg-red-500 mt-2 p-2 text-white text-center capitalize rounded-md transition-all">
            {servererr}
          </div>
        )}
      </form>
      <Modal
        isOpen={otpModel.isOpen}
        placement="center"
        className="m-4"
        onOpenChange={otpModel.onOpenChange}
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
                  onChange={(e) => setForm({ ...form, otp: e.target.value })}
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
      <Modal
        isOpen={cpassword.isOpen}
        placement="center"
        className="m-4"
        onOpenChange={otpModel.onOpenChange}
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Enter new Password
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <CiPhone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="New Password"
                  placeholder="Enter new password"
                  variant="bordered"
                  type="password"
                  onChange={(e) => setNewpsswd(e.target.value)}
                />
                {newpsswderr && <p className="text-red-500">{`${newpsswderr}`}</p>}
              </ModalBody>
              <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                  Discard
                </Button>
                <Button color="primary" onPress={() => handleChangePassword()}>
                  Change
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
