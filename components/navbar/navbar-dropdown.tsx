"use client";
import {
  DollarSign,
  Dumbbell,
  Weight,
  Shirt,
  Flame,
  HomeIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const options = [
  {
    value: "Home",
    label: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    value: "Money",
    label: "Money",
    icon: <DollarSign />,
    link: "/money",
  },
  {
    value: "Calories",
    label: "Calories",
    icon: <Flame />,
    link: "/calories",
  },
  {
    value: "Workout",
    label: "Workout",
    icon: <Dumbbell />,
    link: "/workout",
  },
  {
    value: "Weight",
    label: "Weight",
    icon: <Weight />,
    link: "/weight",
  },
  {
    value: "Clothes",
    label: "Clothes",
    icon: <Shirt />,
    link: "/clothes",
  },
];

export const NavOptions = () => {
  const pathname = usePathname();
  const selectedOption = options.find((option) => option.link === pathname);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-2 items-center">
          {selectedOption?.icon}
          <span>{selectedOption?.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {options.map((option) => (
          <DropdownMenuItem key={option.value}>
            <Link href={option.link} className="flex gap-2 items-center">
              {option.icon}
              <span>{option.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
