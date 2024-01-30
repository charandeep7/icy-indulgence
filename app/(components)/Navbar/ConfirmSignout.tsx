import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import React from "react";
import { GiConfirmed } from "react-icons/gi";

export default function ConfirmSignout() {
  return (
    <>
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button variant="flat" size="sm" color="danger">
          Sign Out
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="confirm signout">
        <DropdownItem key="light" color="danger" endContent={<GiConfirmed />} onPress={() => signOut({ redirect: false })}>
          Confirm
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </>
  );
}
