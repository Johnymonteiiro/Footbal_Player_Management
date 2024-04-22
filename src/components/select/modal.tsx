import { ChevronLeft } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

interface PrimeNumberBoxProps {
  isOpen: boolean;
  prime_lists: number[];
  number: number;
  type: string;
}

export function Modal({
  isOpen,
  number,
  prime_lists,
  type,
}: PrimeNumberBoxProps) {
  return (
    <div className="relative">
      <div className="w-44 h-48 absolute z-50">
        <div
          className={`${
            isOpen
              ? "shadow-lg opacity-100 mt-1 ease-in-out duration-300 bg-gray-900 rounded h-48 border border-slate-300 dark:border-slate-800 "
              : "opacity-0 ease-in-out duration-300 rounded h-48"
          }`}
        >
          <div className="grid gap-4 border bg-gray-900 h-48 p-3">
            <div className="space-y-2">
              <div className="flex justify-end items-end">
                <h2 className="flex font-medium text-base text-end">
                  <ChevronLeft className="text-slate-600 dark:text-slate-200" />
                  <span
                    className={`${
                      type === "result"
                        ? `text-emerald-600 font-medium`
                        : `text-blue-700 font-medium`
                    }`}
                  >
                    {number}
                  </span>
                </h2>
              </div>
            </div>
            <div className="grid gap-2 h-28">
              <ScrollArea>
                {prime_lists?.map((prime, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center mr-6"
                  >
                    <p className="text-sm">Number:</p>
                    <p
                      className={`${
                        type === "result"
                          ? `text-emerald-600 font-medium`
                          : `text-blue-700 font-medium`
                      }`}
                    >
                      {prime}
                    </p>
                  </div>
                ))}
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
