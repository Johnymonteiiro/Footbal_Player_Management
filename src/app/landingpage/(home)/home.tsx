import { Session } from "@/app/actions";
import { Tshirt } from "@/app/landingpage/t-shirt/t-shirt";
import { env } from "@/env";
import DorsalLists from "../dorsals/page";
import { User } from "@/types/types";
import { Suspense } from "react";

export async function getAllUsers() {
  const res = await fetch(`${env.NEXT_PUBLIC_BASE_URL}/api/users`, {
    cache: "no-store",
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const user: User = await Session();
  const users: User[] = await getAllUsers();

  return (
    <div className="mt-20 w-full flex items-center justify-center">
      <div className="flex justify-between">
        
        <Tshirt user={user} />
        <Suspense fallback={<p>Loading...</p>}>
          <DorsalLists users={users} userEmail={user?.email} />
        </Suspense>

        <div className="w-[25rem] border-l border-slate-300 dark:border-slate-800 pl-2">
          <h1 className="text-2xl">Inter FC players list</h1>
          <div className="bg-white relative top-12 p-4 h-[32rem] rounded dark:bg-gray-900 shadow-sm">
            <div>
              <div className="w-full flex items-center justify-between pb-5 border-b">
                <div className="flex items-center justify-between">
                  <p className="pr-4">N &deg;</p>
                  <p>Nome</p>
                </div>
                <p>Dorsal</p>
              </div>
              <div className="w-full bg-white items-center dark:bg-gray-900">
                {users.map((user, index) => (
                  <div
                    className="flex py-4 items-center justify-between border-b"
                    key={index}
                  >
                    <div className="flex items-center text-2xl justify-between">
                      <p className="pr-8">{index + 1}</p>
                      <p>{user.name}</p>
                    </div>
                    {user.dorsal || user.dorsal === 0 ? (
                      <p className="text-2xl font-medium text-green-500">
                        {user.dorsal}
                      </p>
                    ) : (
                      <p className="text-base font-medium text-red-500">
                        No dorsal
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
