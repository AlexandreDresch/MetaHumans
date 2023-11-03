"use client";

import { MenuIcon, SearchIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";
import { Separator } from "./separator";
import Link from "next/link";

export default function Header() {
  return (
    <Card className="flex items-center justify-between px-5 py-2">
      <Sheet>
        <SheetTrigger>
          <Button size="icon" variant="outline">
            <MenuIcon size={18} />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Link href="/">
        <h1 className="text-justify text-xl font-semibold text-primary">
          Meta
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
            Humans
          </span>
        </h1>
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="relative">
            <SearchIcon size={18} />
          </Button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader className="text-left text-lg font-semibold">
            Search
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </Card>
  );
}
