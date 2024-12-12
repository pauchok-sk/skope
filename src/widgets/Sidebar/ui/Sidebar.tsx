import { SidebarItem } from "./SidebarItem"

export const Sidebar = () => {
  return (
    <aside className="grow-0 shrink-1 basis-[300px]">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 rounded-lg">
        <ul className="space-y-2 font-medium">
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />
        </ul>
      </div>
    </aside>
  );
};
