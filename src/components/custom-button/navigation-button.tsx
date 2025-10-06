import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

type NavigationButtonProps = {
  children: React.ReactNode;
};
export default function NavigationButton({ children }: NavigationButtonProps) {
  return (
    <Button variant="ghost" className="text-red-primary cursor-pointer !mx-0 !px-0">
      {children} <MoveRight />
    </Button>
  );
}
