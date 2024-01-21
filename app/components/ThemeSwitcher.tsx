// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { CiIceCream } from "react-icons/ci";
import { GiChocolateBar } from "react-icons/gi";
import { GiStrawberry } from "react-icons/gi";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const themeMap = new Map([
    ['light',['Vanilla',<CiIceCream />]],
    ['dark',['Chocolate',<GiChocolateBar />]],
    ['strawberry',['Strawberry',<GiStrawberry />]]
  ])
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button variant="bordered" endContent={themeMap.get(theme as string)?.at(1)}>{themeMap.get(theme as string)?.at(0)}</Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons" onAction={(mode) => setTheme(mode as string)}>
        <DropdownItem
          key="light"
          startContent={<CiIceCream className={iconClasses} />}
        >
          Vanilla
        </DropdownItem>
        <DropdownItem
          key="dark"
          startContent={<GiChocolateBar className={iconClasses} />}
        >
          Chocolate
        </DropdownItem>
        <DropdownItem
          key="strawberry"
          startContent={<GiStrawberry className={iconClasses} />}
        >
          Strawberry<sup>β</sup>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
