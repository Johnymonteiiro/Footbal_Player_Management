import { NoResultCard } from "@/components/card/card";
import { ResultCard } from "@/components/card/result_card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { env } from "@/env";
import { DataTypes } from "@/types/types";
import { History as HistoryIcon } from "lucide-react";
import { Suspense } from "react";

async function getData() {
  const res = await fetch(`${env.NEXT_PUBLIC_BASE_URL}/`, {
    cache: "no-store",
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function History() {

  const data: DataTypes[] = await getData();

  return (
    <>
      <div className="w-auto mt-11">
        <div className="flex items-center mb-4">
          <HistoryIcon className="mr-3" />
          <span>History :</span>
        </div>
        {data.length > 0 ? (
          <Suspense fallback={<p>Loading</p>}>
            <div className="grid gap-2 h-96 p-8">
            <ScrollArea>
              {data.map((item, index) => (
                <ResultCard
                  key={index}
                  type="history"
                  length={item.prime_list.length}
                  data={item}
                />
              ))}
            </ScrollArea>
          </div>
          </Suspense>
          
        ) : (
          <NoResultCard />
        )}
      </div>
    </>
  );
}
