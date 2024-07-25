import Profile from "@/app/user/profile/page";
import { ModeToggle } from "../ui/toggleTheme";
import LogoutButton from "../logout/logout";

export function Header() {
  return (
    <div className="w-screen border-b border-slate-300 dark:border-slate-800">
      <div className="flex justify-between items-center container lg p-4">
        <div className="flex w-60">
          <h1 className="content-end text-2xl font-semibold relative top-1">
            ⚽Inter FC
          </h1>
        </div>

        <div className="flex items-center justify-evenly">
          <Profile />
          <ModeToggle />
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
