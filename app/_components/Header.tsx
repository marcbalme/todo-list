import React from "react";
import { ThemeSwitch } from "./ThemeSwitch";

type Props = {};

export const Header = ({}: Props) => (
  <header className="flex max-w-screen-xl px-4 py-2 shadow-sm shadow-primary/50 ">
    <div className="ml-auto ">
      <ThemeSwitch />
    </div>
  </header>
);
