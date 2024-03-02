import { ThemeToggle } from "../theme-button";
import { NavOptions } from "./navbar-dropdown";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 border-b-2">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">The Tracker</h1>
        <NavOptions />
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </nav>
  );
};
