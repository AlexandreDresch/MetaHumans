"use client";

import { Button } from "./button";
import { Input } from "./input";

interface HeroFormProps {
  onSearch: (name: string) => void;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export function HeroForm({ onSearch, name, setName }: HeroFormProps) {
  function handleSearch() {
    onSearch(name);
  }

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Enter a name"
        className=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button type="button" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}
