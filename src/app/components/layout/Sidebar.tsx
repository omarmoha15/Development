import React, { useRef } from "react";
import classNames from "classnames";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useOnClickOutside } from "usehooks-ts";

// Define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

// Add NavItem prop to component prop
type Props = {
  navItems?: NavItem[];
};

const Sidebar = ({ navItems }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  // Handle closing the sidebar when clicking outside
  useOnClickOutside(ref, () => {
    // Implement the logic to close the sidebar here
  });

  // Default navigation items as a fallback when navItems are not provided
  const defaultNavItems: NavItem[] = [
    {
      label: "بياناتي الوظيفية",
      href: "/",
      icon: <HomeIcon className="w-6 h-6" />,
    },
    {
      label: "المستندات والمشاهد",
      href: "/team",
      icon: <UserGroupIcon className="w-6 h-6" />,
    },
    {
      label: "الاجازات",
      href: "/projects",
      icon: <FolderIcon className="w-6 h-6" />,
    },
    {
      label: "الحضور والغياب",
      href: "/calendar",
      icon: <CalendarIcon className="w-6 h-6" />,
    },
  ];

  // Use navItems if provided, otherwise use defaultNavItems
  const itemsToRender = navItems || defaultNavItems;

  return (
    <div className="flex-grow flex flex-col gap-y-6 overflow-y-auto bg-gray-900 px-6 ">
      <div className="flex justify-end h-16 shrink-0 items-center ">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
      </div>
      <nav className="flex flex-1 flex-col  ">
        <ul role="list" className="flex  flex-1 flex-col gap-y-7 ">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {itemsToRender.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold "
                    )}
                  >
                    {item.icon}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          {/* Add your teams section here */}
          {/* Replace teams.map with itemsToRender.map */}
          {/* Add your user profile section here */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
