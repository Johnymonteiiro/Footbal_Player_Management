"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { generateNumberArray } from "./numbers";
import { CreateDorsal } from "@/app/actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { User } from "@/types/types";

interface SelectNumber {
  number: number | null;
  isSelected: boolean;
}


interface DorsalListsProps {
  users: User[];
  userEmail: string;
}

export default function DorsalLists({ userEmail, users }: DorsalListsProps) {
  
  const router = useRouter();

  const [chosenNumbers, setChosenNumbers] =
    useState<(number | null)[]>([]);
  const [selectedNumber, setSelectedNumber] = useState<SelectNumber>({
    number: null,
    isSelected: false,
  });

  useEffect(() => {
    const chosenDorsalNumbers = users.map((user) => user.dorsal);
    setChosenNumbers(chosenDorsalNumbers);
  }, [users]);

  const handleNumberClick = (number: number) => {
    if (chosenNumbers.includes(number)) {
      return;
    }
    setSelectedNumber({ number, isSelected: true });
  };

  const handleSubmit = async () => {
    if (selectedNumber.number === null) {
      return;
    }
    const dorsal = await CreateDorsal({
      dorsal: selectedNumber.number,
      email: userEmail,
    });

    if (dorsal) {
      toast.error("Failed to create dorsal");
    }
     router.refresh()
    
    setSelectedNumber({ number: null, isSelected: false });
  };

  const numberArray = generateNumberArray();

  return (
    <div className="px-10">
      <div className="w-[40rem]">
        <div>
          <div className="flex justify-between mb-8 px-8">
            <h1 className="text-2xl">Choose your Number</h1>
            <form action={handleSubmit}>
              <Button
                type="submit"
                disabled={!selectedNumber.isSelected}
              >
                Submit
              </Button>
            </form>
          </div>
          <ScrollArea>
            <div className="h-[32rem] text-center">
              {numberArray.map((number) => (
                <button
                  className={`${
                    chosenNumbers.includes(number)
                      ? "bg-red-500"
                      : selectedNumber.number === number
                      ? "bg-blue-500 dark:bg-blue-900"
                      : "bg-blue-900 dark:bg-slate-800"
                  } p-2 m-2 w-14 h-14 text-lg rounded-sm text-s text-white
                  ${
                    chosenNumbers.includes(number)
                      ? ""
                      : "hover:border-2 border-red-500 dark:border-blue-900 hover:scale-105 shadow-lg"
                  }`}
                  key={number}
                  onClick={() => handleNumberClick(number)}
                  disabled={chosenNumbers.includes(number)}
                >
                  {number}
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
