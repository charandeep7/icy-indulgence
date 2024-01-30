"use client"
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { CiPhone } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export default function page() {
  const otpModel = useDisclosure();
  const { data, status } = useSession()
  const [form, setForm] = useState({ email: "", otp: "" });
  const [invalid, setInvalid] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(form.email)) {
      setInvalid("Please enter a valid email");
      return;
    }
    setInvalid("");
    otpModel.onOpen();
  };

  const handleOtpVerification = async () => {
    // Implement OTP verification logic here
    // Update state or perform necessary actions
    otpModel.onClose();
  };
  useEffect(() => {
    if(data?.user?.email){
      setForm({...form, email: data?.user?.email})
    }
  },[])
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
          endContent={<MdEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
          isInvalid={invalid === "" ? false : true}
          errorMessage={invalid}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          isDisabled={data?.user?.email ? true : false}
        />
        <Button type="submit" color="primary" variant="flat">
          Verify Email
        </Button>
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
              <ModalHeader className="flex flex-col gap-1">Verify your account</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={<CiPhone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                  label="OTP"
                  placeholder="Enter otp"
                  variant="bordered"
                  type="text"
                  onChange={(e) => setForm({ ...form, otp: e.target.value })}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleOtpVerification}>
                  Verify
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
