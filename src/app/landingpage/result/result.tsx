"use client";

import { NoResultCard } from "@/components/card/card";
import { ResultCard } from "@/components/card/result_card";
import { usePrimeContext } from "@/context/context";
import { CircleCheckBig } from "lucide-react";

export default function Result() {
  const { result } = usePrimeContext();

  return (
    <>
      <div className="w-auto mt-11">
        <div className="flex items-center mb-4">
          <CircleCheckBig className="mr-3" />
          <span>Result :</span>
        </div>

        {result.length > 0 ? (
          <>
            {result.map((item, index) => (
              <ResultCard
                key={index}
                length={item.prime_list.length}
                data={item}
                type="result"
              />
            ))}
          </>
        ) : (
          <NoResultCard />
        )}
      </div>
    </>
  );
}
