import { Button, Input } from "@nextui-org/react";
import { FaUnlockKeyhole, FaUserCheck } from "react-icons/fa6";
import { RiLockPasswordFill, RiMailCheckFill } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";
import type { Metadata } from "next";
import Link from "next/link";
import { getUserIdDetail } from "@/app/api/user/getUserId";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { accountAge, parseUpdateDate } from "@/lib/parseDate";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
type Params = {
  params: {
    name: string;
  };
};

export const metadata: Metadata = {
  title: "Accounts",
  description: "Account Settings",
};

export default async function page({ params: { name } }: Params) {
  const session = await getServerSession(options)
  if(session && name !== session.user?.name){
    notFound()
  }
  const user = await getUserIdDetail(name);
  if (!user) {
    notFound();
  }
  return (
    <Suspense fallback={<Loading />}>
      <div className="m-4 flex flex-col justify-center items-center">
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 w-[100%] sm:w-3/4 md:w-1/2">
          <Input
            type="text"
            label="Username"
            variant="bordered"
            size="lg"
            defaultValue={user.username}
            isReadOnly
            isDisabled
            description="You can't change your username."
            fullWidth
            endContent={
              <FaUserCheck className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />

          <Input
            type="email"
            variant={"bordered"}
            label="Email"
            isReadOnly
            description="We'll never share your email with anyone else."
            defaultValue={user.email}
            isDisabled
            size="lg"
            fullWidth
            endContent={
              <RiMailCheckFill className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <Input
            type="password"
            variant={"bordered"}
            label="Password"
            isReadOnly
            defaultValue="*********"
            isDisabled
            description={`Last update on ${parseUpdateDate(user.updatedAt)}`}
            size="lg"
            fullWidth
            endContent={
              <RiLockPasswordFill className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <Input
            type="text"
            variant={"bordered"}
            label="Account Age"
            isReadOnly
            defaultValue={accountAge(user.createdAt)}
            description="According to icy indulgence server time."
            isDisabled
            size="lg"
            fullWidth
            endContent={
              <MdManageAccounts className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
        <Button
          as={Link}
          href={`/user/${name}/changepassword`}
          color="primary"
          variant="flat"
          className="self-center"
          endContent={
            <FaUnlockKeyhole className="text-md pointer-events-none flex-shrink-0 text-primary-300" />
          }
        >
          Change Password
        </Button>
      </div>
    </Suspense>
  );
}
