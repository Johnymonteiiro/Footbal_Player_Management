import { Select } from "../select/select";
import { CardItem } from "./cardItem";

interface ResultCardProps {
  data: {
    number: number;
    prime_list: number[];
    execution_time: number;
  };

  length: number;
  type: string;
}

export function ResultCard({ data, length, type }: ResultCardProps) {
  return (
    <div className="grid grid-cols-4 gap-2 h-20 border-t content-center justify-items-center m-2">
      <CardItem type={type} title="Selected Number" value={data?.number} />
      <CardItem type={type} title="Total prime numbers" value={length} />
      <Select number={data.number} prime_lists={data.prime_list} type={type}/>
      <CardItem
        type={type}
        title="Execution time"
        value={data?.execution_time + ` ms`}
      />
    </div>
  );
}
