import { getServerSession } from "next-auth/next";
import { ThemeSwitch } from "./ThemeSwitch";
import { LoginButton } from "./LoginButton";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { LogoutButton } from "./LogoutButton";

export const Header = async () => {
  const session = await getServerSession(authConfig);

  return (
    <header className="flex max-w-screen-xl px-4 py-2 shadow-sm shadow-primary/50 ">
      <div className="ml-auto ">
        {session ? <LogoutButton /> : <LoginButton />}
        <ThemeSwitch />
      </div>
    </header>
  );
};
