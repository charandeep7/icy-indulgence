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
import { CiCircleChevDown, CiMenuFries } from "react-icons/ci";
import { TbListDetails } from "react-icons/tb";
import { IoMdMan } from "react-icons/io";
import { IoMdContacts } from "react-icons/io";
import Logo from "./Logo";
import NextLink from "next/link";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import SearchQuery from "./SearchQuery";
import CartButton from "./CartButton";
import Login from "./Login";
import { useSession } from "next-auth/react";
import Signup from "./Signup";
import SignOut from "./Signout";
import ConfirmSignout from "./ConfirmSignout";

export default function Header() {
  const { data: session, status } = useSession();
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

      <NavbarContent className="flex items-center p-1" justify="center">
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
        </div>
        <div className="relative">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              {status === "authenticated" ? (
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform w-max object-fill"
                  color="secondary"
                  name={session?.user?.name ? session.user.name : ""}
                  size="sm"
                  src={`https://ui-avatars.com/api/?name=${
                    session?.user?.name ? session.user.name : "ok"
                  }}`}
                />
              ) : status === "unauthenticated" ? (
                <Button
                  color="default"
                  isIconOnly
                  endContent={<CiMenuFries />}
                ></Button>
              ) : (
                <Button color="default" isIconOnly isLoading></Button>
              )}
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Profile Actions"
              variant="flat"
              className="overflow-y-auto no-scrollbar max-h-[80vh]"
            >
              <DropdownItem key="profile" className="h-14 gap-2">
                {status === "loading" ? (
                  <p className="font-semibold">Loading...</p>
                ) : status === "unauthenticated" ? (
                  <>
                    <p className="font-semibold">Icy Indulgence</p>
                    <p className="font-semibold">
                      By&nbsp;
                      <a
                        href="https://portfolio-revisit.vercel.app/"
                        target="_blank"
                        className="underline text-red-600 dark:text-red-300"
                      >
                        Kitish
                      </a>
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{session?.user?.email}</p>
                  </>
                )}
              </DropdownItem>
              <DropdownSection title="Theme" showDivider>
                <DropdownItem
                  isReadOnly
                  key="theme"
                  startContent={<ThemeSwitcher />}
                />
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
              {status === "loading" ? (
                <DropdownSection title="loading">
                  <DropdownItem isReadOnly>loading...</DropdownItem>
                </DropdownSection>
              ) : status === "unauthenticated" ? (
                <DropdownSection title="Guest">
                  <DropdownItem key="cart" as={NextLink} href="/cart">
                    Cart
                  </DropdownItem>
                  <DropdownItem key="checkout" as={NextLink} href="/checkout">
                    Checkout
                  </DropdownItem>
                  <DropdownItem isReadOnly key="signin">
                    <span className="hidden sm:block">
                      <Login />
                    </span>
                    <Button
                      as={NextLink}
                      href="/signin"
                      color="success"
                      size="sm"
                      variant="flat"
                      className="sm:hidden"
                    >
                      Sign In
                    </Button>
                  </DropdownItem>
                  <DropdownItem isReadOnly key="signup">
                    <span className="hidden sm:block">
                      <Signup />
                    </span>
                    <Button
                      as={NextLink}
                      href="/signup"
                      color="primary"
                      size="sm"
                      variant="flat"
                      className="sm:hidden"
                    >
                      Sign Up
                    </Button>
                  </DropdownItem>
                </DropdownSection>
              ) : (
                <DropdownSection title="Accounts">
                  <DropdownItem
                    key="settings"
                    as={NextLink}
                    href={`/user/${session?.user?.name}`}
                  >
                    My Settings
                  </DropdownItem>
                  <DropdownItem key="cart" as={NextLink} href="/cart">
                    Cart
                  </DropdownItem>
                  <DropdownItem key="checkout" as={NextLink} href="/checkout">
                    Checkout
                  </DropdownItem>
                  <DropdownItem
                    key="favorite"
                    as={NextLink}
                    href={`/user/${session?.user?.name}/favorite`}
                  >
                    Favorite
                  </DropdownItem>
                  <DropdownItem
                    key="system"
                    target="_blank"
                    href={`${location.origin}/api/status`}
                  >
                    System
                  </DropdownItem>
                  <DropdownItem key="configurations">
                    Configurations
                  </DropdownItem>
                  <DropdownItem
                    key="help_and_feedback"
                    as={NextLink}
                    href="/contactus"
                  >
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem key="signout" isReadOnly className="relative">
                    <span className="hidden sm:block">
                      <SignOut />
                    </span>
                    <span className="sm:hidden">
                      <ConfirmSignout />
                    </span>
                  </DropdownItem>
                </DropdownSection>
              )}
            </DropdownMenu>
          </Dropdown>
        </div>
      </NavbarContent>
    </Navbar>
  );
}
