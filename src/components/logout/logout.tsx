'use client'

import { Logout } from "@/app/actions";
import { Button } from "../ui/button";

export default function LogoutButton() {

  return (
    <form action={Logout}>
      <Button type="submit" className="rounded py-1 px-4">
        Logout
      </Button>
    </form>
  );
}
