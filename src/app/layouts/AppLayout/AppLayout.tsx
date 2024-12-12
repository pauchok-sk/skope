import { FC, ReactNode } from "react";
import { Navbar } from "../../../widgets/Navbar";
import { Sidebar } from "../../../widgets/Sidebar";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex gap-4 max-w-[1500px] w-full mx-auto px-10 py-4 flex-1 overflow-hidden">
        <Sidebar />
        {children}
      </div>
    </>
  );
};
