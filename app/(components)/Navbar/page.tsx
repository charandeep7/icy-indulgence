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
  DropdownSection,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { cedarville_cursive } from "@/lib/fonts";
import { CiCircleChevDown } from "react-icons/ci";
import { TbListDetails } from "react-icons/tb";
import { IoMdMan } from "react-icons/io";
import { IoMdContacts } from "react-icons/io";
import Logo from "./Logo";
import NextLink from "next/link";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import SearchQuery from "./SearchQuery";
import CartButton from "./CartButton";

export default function Header() {
  return (
    <Navbar isBordered maxWidth="full">
      <NavbarContent justify="end">
        <NavbarBrand className="cursor-pointer" as={NextLink} href={"/"}>
          <Logo />
          <p
            className={`hidden sm:block font-bold text-inherit text-xl ${cedarville_cursive.className}`}
          >
            icy <br /> indulgence
          </p>
        </NavbarBrand>
        <NavbarContent className="hidden md:flex md:gap-7" justify="start">
          <NavbarItem>
            <Link as={NextLink} color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link
              as={NextLink}
              href="/specials"
              aria-current="page"
              color="secondary"
            >
              Specials
            </Link>
          </NavbarItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={
                    <span className="text-xl">
                      <CiCircleChevDown />
                    </span>
                  }
                  radius="sm"
                  variant="light"
                >
                  More
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu>
              <DropdownItem
                key="about us"
                description="Know more about our shop"
                startContent={<TbListDetails />}
                as={NextLink}
                href="/about"
              >
                About
              </DropdownItem>
              <DropdownItem
                key="contact us"
                description="Contact to our shop staffs"
                startContent={<IoMdContacts />}
                as={NextLink}
                href="/contactus"
              >
                Contact
              </DropdownItem>
              <DropdownItem
                key="owner"
                description="About Shop Owner Kitish"
                startContent={<IoMdMan />}
                as={NextLink}
                target="_blank"
                href="https://portfolio-revisit.vercel.app/"
              >
                Owner
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent
        as="div"
        className="flex items-center p-1"
        justify="center"
      >
        <div className="hidden sm:block">
          <ThemeSwitcher />
        </div>
        <div className="flex items-center gap-2">
          {/* search icon  */}
          <SearchQuery />
          {/* Cart button */}
          <div className="hidden md:block">
            <CartButton />
          </div>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform w-max object-fill"
                color="secondary"
                name={"Jason Hughes"}
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">kitishkumar2003@gmail.com</p>
              </DropdownItem>
              <DropdownSection title="Theme" showDivider>
                <DropdownItem key="theme-mode">
                  <ThemeSwitcher />
                </DropdownItem>
              </DropdownSection>
              <DropdownSection title="Features" showDivider>
                <DropdownItem
                  key="specials"
                  description="Ice Cream of the day"
                  as={NextLink}
                  href="/specials"
                >
                  Specials
                </DropdownItem>
                <DropdownItem
                  key="owner"
                  description="About Shop Owner Kitish"
                  as={NextLink}
                  href="https://portfolio-revisit.vercel.app/"
                  target="_blank"
                >
                  Owner
                </DropdownItem>
              </DropdownSection>
              <DropdownSection title="Accounts">
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="cart" as={NextLink} href="/cart">Cart</DropdownItem>
                <DropdownItem key="favorite" as={NextLink} href="/favorite">Favorite</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </div>
      </NavbarContent>
    </Navbar>
  );
}
