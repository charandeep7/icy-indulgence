import { Button, Input } from "@nextui-org/react";
import { Metadata } from "next";
import Link from "next/link";
import { GiSecretBook } from "react-icons/gi";
import { MdOutlineLockReset } from "react-icons/md";

type Params = {
  params: {
    id: number;
  };
};

 
export const metadata: Metadata = {
  title: 'Accounts',
  description: 'Account Settings',
}

export default function ChangePassword({ params: { id } }: Params) {
  return (
    <div className="m-4 flex flex-col justify-center items-center">
      <div className="p-4 grid grid-cols-1 gap-4 w-[100%] sm:w-3/4 md:w-1/2">
        <Input
          type="password"
          label="Current Password"
          variant="bordered"
          size="lg"
          fullWidth
        />

        <Input
          type="password"
          label="New Password"
          variant="bordered"
          size="lg"
          fullWidth
        />
        <Input
          type="password"
          label="Confirm new password"
          variant="bordered"
          size="lg"
          fullWidth
        />
        
      </div>
      <div className="p-4 flex flex-col sm:flex-row justify-evenly w-[100%] sm:w-3/4 md:w-1/2 gap-4">
      <Button
        as={Link}
        href={`/user/${id}/changepassword`}
        color="success"
        variant="flat"
        className="self-center"
        fullWidth
        endContent={
          <MdOutlineLockReset className="text-md pointer-events-none flex-shrink-0 text-success-300" />
        }
      >
        Change Password
      </Button>
      <Button
        as={Link}
        href={`/forgotpassword`}
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
    </div>
  )
}
