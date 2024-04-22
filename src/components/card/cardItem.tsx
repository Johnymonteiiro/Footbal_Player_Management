
interface CardItemProps {
    title: string;
    value: number | string;
    type: string;
}

export function CardItem({ title, value, type }: CardItemProps) {
  return (
    <div className="flex justify-center items-center">
      <p>
        {title} :{" "}
        <span
          className={`${
            type === "result"
              ? `text-emerald-600 font-medium`
              : `text-blue-700 font-medium`
          }`}
        >
          {value}
        </span>
      </p>
    </div>
  );
}
