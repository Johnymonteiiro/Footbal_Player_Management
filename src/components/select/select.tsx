"use client"
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import useClickOutSide from "@/hook/click_outside";
import { Modal } from "./modal";

interface PrimeNumberBoxProps {
  prime_lists: number[];
  number: number;
  type: string;
}

export function Select({number, type, prime_lists}: PrimeNumberBoxProps) {
  const { isOpen, refElement, setIsOpen } = useClickOutSide();

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div ref={refElement}>
      <div>
        <Button onClick={handleClick} variant="outline_2" className="w-44">
          <span className="mr-2">Prime numbers</span>
          <ChevronDown />
        </Button>
      </div>

      {isOpen && <Modal number={number} type={type} prime_lists={prime_lists} isOpen={isOpen} />}
    </div>
  );
}
