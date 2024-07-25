import { Session } from "@/app/actions";

export default async function Profile() {
  const user = await Session();

  return (
    <div>
      <div className="w-auto flex items-center">
        <div className="flex items-center">
          <div
            className={`${
              user?.name ? "bg-green-600" : "bg-red-500"
            } w-2 h-2 rounded-full mr-2`}
          ></div>
          <p>{user?.name ? "👋 Hello!" : "☹️ Ups!"}</p>
        </div>
        <h1 className="text-lg font-medium text-blue-500 pl-2">{user?.name}</h1>
      </div>
    </div>
  );
}
