"use client";

import { Button } from "./button";
import { Input } from "./input";

interface HeroFormProps {
  onSearch: (name: string) => void;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  disabled: boolean;
}

export function HeroForm({ onSearch, name, setName, disabled }: HeroFormProps) {
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
        disabled={disabled}
      />
      <Button type="button" onClick={handleSearch} disabled={disabled}>
        Search
      </Button>
    </div>
  );
}
