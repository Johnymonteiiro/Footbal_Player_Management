import { PrimeNumberForm } from "@/components/form/form";
import Result from "../result/result";
import History from "../history/history";

export default async function Home() {
  return (
    <>
      <div className="w-screen mt-12 flex items-center justify-center z-50">
        <div className="w-[60rem]">
          <PrimeNumberForm />
          <Result />
          <History />
        </div>
      </div>
    </>
  );
}
