"use client"

import React, { Fragment, useState } from 'react';
import {
  CalendarIcon,
  ChartPieIcon,
  CubeIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UserIcon,

} from '@heroicons/react/24/outline';


interface NavigationItem {
  name: string;
  href: string;
  icon: React.ElementType;
  current: boolean;
}

interface TeamItem {
  id: number;
  name: string;
  href: string;
  initial: string;
  current: boolean;
}

interface UserNavItem {
  name: string;
  href: string;
}

interface LayoutProps {
  children: React.ReactNode;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation: NavigationItem[] = [
    { name: 'بياناتي الشخصية ', href: '#', icon: HomeIcon, current: true },
    { name: 'المستندات الومشاهد', href: '/dashbord/document', icon: DocumentDuplicateIcon, current: false },
    { name: 'الاجازات', href: '/dashbord/employeeVec', icon: CubeIcon, current: false },
    { name: 'الحضور والغياب', href: '/dashbord/employeeAtt', icon: CalendarIcon, current: false },
    { name: 'التقيم الوظيفي', href: '#', icon: UserIcon, current: false },
    { name: 'التقارير', href: '#', icon: ChartPieIcon, current: false },
  ];


  const userNavigation: UserNavItem[] = [
    { name: 'Your profile', href: '#' },
    { name: 'Sign out', href: '#' },
  ];

  return (
    <>
      <div>
               <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:text-white hover:bg-gray-800',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
