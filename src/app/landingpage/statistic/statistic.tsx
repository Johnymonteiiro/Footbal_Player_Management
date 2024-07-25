import { User } from "@/types/types";
import { generateNumberArray } from "../dorsals/numbers";

interface StatisticBoardProps {
  users: User[];
}

const totalNumbers = generateNumberArray();

export const StatisticBoard = ({ users }: StatisticBoardProps) => {
    
  const chosenDorsalNumbers = users.filter((user) => user.dorsal !== undefined);
  const availableNumbers = totalNumbers.length - chosenDorsalNumbers.length;


  return (
    <div>
      <div>
        <h1 className="text-lg">Description</h1>
        <div className="mt-4 bg-white dark:bg-gray-900 p-5 rounded shadow-lg">
          <div className="flex items-center pb-2">
            <div className=" bg-blue-900 dark:bg-slate-800 w-4 h-4 rounded-full mr-2"></div>
            <p>Available</p>
          </div>
          <div className="flex items-center pb-2">
            <div className="bg-red-500 w-4 h-4 rounded-full mr-2"></div>
            <p>Unavailable</p>
          </div>
          <div className="flex items-center">
            <div className=" bg-blue-500 dark:bg-blue-900 w-4 h-4 rounded-full mr-2"></div>
            <p>Selected</p>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-8">
          <h1 className="text-lg">Statistic</h1>
          <div className="mt-4 bg-white dark:bg-gray-900 p-5 rounded shadow-lg">
            <div className="flex items-center pb-2">
              <div className="bg-green-600 w-4 h-4 rounded-full mr-2"></div>
              <p>{totalNumbers.length} Dorsal</p>
            </div>
            <div className="flex items-center pb-2">
              <div className="bg-blue-900 dark:bg-slate-800 w-4 h-4 rounded-full mr-2"></div>
              <p>{availableNumbers} Dorsal available</p>
            </div>
            <div className="flex items-center pb-2">
              <div className="bg-red-500 w-4 h-4 rounded-full mr-2"></div>
              <p>{chosenDorsalNumbers.length} Dorsal Unavailable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
