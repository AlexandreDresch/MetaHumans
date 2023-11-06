"use client";

import { MenuIcon, SearchIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BattleHistory } from "./battleHistory";
import SearchForm from "./searchForm";

export default function Header() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <Card className="flex items-center justify-between px-5 py-2">
      <Sheet>
        <SheetTrigger>
          <Button size="icon" variant="outline">
            <MenuIcon size={18} />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            History
          </SheetHeader>

          <BattleHistory />
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

          <SearchForm />
        </SheetContent>
      </Sheet>
    </Card>
  ) : null;
}
