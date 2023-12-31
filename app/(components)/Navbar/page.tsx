"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { SearchIcon } from "./SearchIcon";
import { Button } from "@nextui-org/button";
import Logo from "./Logo";
import { cedarville_cursive } from "@/lib/fonts";
import { CiCircleChevDown } from "react-icons/ci";
import { TbListDetails } from "react-icons/tb";
import { IoMdMan } from "react-icons/io";
import { IoMdContacts } from "react-icons/io";

import ThemeSwitcher from "@/app/components/ThemeSwitcher";

export default function Header() {
  return (
    <Navbar isBordered maxWidth="full">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4 cursor-pointer">
          <Logo />
          <p
            className={`hidden sm:block font-bold text-inherit text-xl ${cedarville_cursive.className}`}
          >
            icy indulgence
          </p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-10">
          <NavbarItem>
            <Link color="foreground" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              Specials
            </Link>
          </NavbarItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={<span className="text-xl"><CiCircleChevDown /></span>}
                  radius="sm"
                  variant="light"
                >
                  More
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu>
              <DropdownItem key='about us' description='Know more about our shop' startContent={<TbListDetails />}>
                About
              </DropdownItem>
              <DropdownItem key='contact us' description='Contact to our shop staffs' startContent={<IoMdContacts />}>
                Contact
              </DropdownItem>
              <DropdownItem key='owner' description='About Shop Owner Kitish' startContent={<IoMdMan />}>
                Owner
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <ThemeSwitcher />
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[20rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Explore your ice cream paradise..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
