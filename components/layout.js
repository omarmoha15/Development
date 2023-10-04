import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import { Dialog, Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  CubeIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import logo from '../public/logo-white.svg';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // New state for dropdown menu
  const router = useRouter();

  const handleLogout = () => {
    // Clear the user's authentication data (you can adjust this based on your authentication method)
    localStorage.removeItem('authToken'); // Assuming you're using localStorage for authentication

    // Redirect the user to the login page
    router.push('/login');
  };

  const navigation = [
    { name: 'بياناتي الشخصية', href: '/employerIfo', icon: HomeIcon, current: router.pathname === '/employerIfo' },
    
    {
      name: 'انتداباتي ',
      icon: ChartPieIcon,
      isOpen: dropdownOpen === 'assignments', // Track the open/closed state for this dropdown
      // Use the 'setDropdownOpen' function to toggle the dropdown
      onClick: () => setDropdownOpen(dropdownOpen === 'assignments' ? null : 'assignments'),
      subItems: [
        { name: 'تقديم انتداب', href: '/assignments' },
        { name: 'انتداباتي', href: '/eRate' },
      ],
    },
    {
      name: '  اجازاتي ',
      icon: ChartPieIcon,
      isOpen: dropdownOpen === 'calendarVacations', // Track the open/closed state for this dropdown
      // Use the 'setDropdownOpen' function to toggle the dropdown
      onClick: () => setDropdownOpen(dropdownOpen === 'calendarVacations' ? null : 'calendarVacations'),
      subItems: [
        { name: 'تقديم إجازة', href: '/employerCalendar' },
        { name: 'اجازاتي', href: '/employerVacations' },
        { name: 'رصيدي', href: '/employerVacations' },
      ],
    },
    {
      name: 'التقيم الوظيفي ',
      icon: ChartPieIcon,
      isOpen: dropdownOpen === 'evaluation', // Track the open/closed state for this dropdown
      // Use the 'setDropdownOpen' function to toggle the dropdown
      onClick: () => setDropdownOpen(dropdownOpen === 'evaluation' ? null : 'evaluation'),
      subItems: [
        { name: 'تقديم تقيم', href: '/employerRate' },
        { name: 'تقيماتي', href: '/eRate' },
      ],
    },
    {
      name: 'الوثائق الرسمية',
      icon: ChartPieIcon,
      isOpen: dropdownOpen === 'officialDocuments', // Track the open/closed state for this dropdown
      // Use the 'setDropdownOpen' function to toggle the dropdown
      onClick: () => setDropdownOpen(dropdownOpen === 'officialDocuments' ? null : 'officialDocuments'),
      subItems: [
        { name: 'تعريف الراتب "عربي"', href: '/employerDoc' },
        { name: 'تعريف الراتب "انجليزي"', href: '/employerDoc' },
        { name: 'تعريف راتب لجهة مخصصه', href: '/employerDoc' },
        { name: 'بيان الخدمة', href: '/employerDoc' },
        { name: 'التقارير الطبية من صحتي', href: '/employerDoc' },
      ],
    },
    { name: 'الحضور والغياب', href: '/employeeAtt', icon: CalendarIcon, current: router.pathname === '/employeeAtt' },
    {
      name: 'التدريب',
      icon: ChartPieIcon,
      isOpen: dropdownOpen === 'training', // Track the open/closed state for this dropdown
      // Use the 'setDropdownOpen' function to toggle the dropdown
      onClick: () => setDropdownOpen(dropdownOpen === 'training' ? null : 'training'),
      subItems: [
        { name: 'سجلي التدريبي', href: '/employeeAtt' },
        { name: 'رفع طلب اضافة دورة', href: '/employeeAtt' },
        { name: 'رفع طلب ابتعاث', href: '/employeeAtt' },
        { name: 'طلب تسجيل في دورات', href: '/employeeAtt' },
      ],
    },
    {
      name: 'التقاعد ',
      icon: ChartPieIcon,
      isOpen: dropdownOpen === 'retirement', // Track the open/closed state for this dropdown
      // Use the 'setDropdownOpen' function to toggle the dropdown
      onClick: () => setDropdownOpen(dropdownOpen === 'retirement' ? null : 'retirement'),
      subItems: [
        { name: 'رفع طلب استقالة واخلاء طرف', href: '/employeeAtt' },
        { name: 'رفع طلب تقاعد مبكر واخلاء طرف', href: '/employeeAtt' },
        { name: 'رفع طلب تقاعد واخلاء طرف', href: '/employeeAtt' },
      ],
    },
    {
      name: 'طلباتي',
      icon: ChartPieIcon,
      isOpen: dropdownOpen === 'hrRequests', // Track the open/closed state for this dropdown
      // Use the 'setDropdownOpen' function to toggle the dropdown
      onClick: () => setDropdownOpen(dropdownOpen === 'hrRequests' ? null : 'hrRequests'),
      subItems: [
        { name: 'رفع طلب تصحيح بيانات', href: '/employeeAtt' },
        { name: 'رفع طلب اخر', href: '/employeeAtt' },
      ],
    },
    {
      name: 'القرارات ',
      icon: ChartPieIcon,
      isOpen: dropdownOpen === 'decisions', // Track the open/closed state for this dropdown
      // Use the 'setDropdownOpen' function to toggle the dropdown
      onClick: () => setDropdownOpen(dropdownOpen === 'decisions' ? null : 'decisions'),
      subItems: [
        { name: 'قرارات العقوبات', href: '/employeeAtt' },
        { name: 'قرارات اخرى', href: '/employeeAtt' },
      ],
    },
    {
      name: 'التواصل الداخلي ',
      icon: ChartPieIcon,
      isOpen: dropdownOpen === 'internalCommunication', // Track the open/closed state for this dropdown
      // Use the 'setDropdownOpen' function to toggle the dropdown
      onClick: () => setDropdownOpen(dropdownOpen === 'internalCommunication' ? null : 'internalCommunication'),
      subItems: [
        { name: 'اعلانات الموارد البشرية', href: '/employeeAtt' },
        { name: 'برنامج الخصومات ولاء', href: '/employeeAtt' },
      ],
    },
    {
      name: 'الترقيات',
      icon: ChartPieIcon,
      isOpen: dropdownOpen === 'promotions', // Track the open/closed state for this dropdown
      // Use the 'setDropdownOpen' function to toggle the dropdown
      onClick: () => setDropdownOpen(dropdownOpen === 'promotions' ? null : 'promotions'),
      subItems: [
        { name: 'التسجيل في محضر الترقية', href: '/employeeAtt' },
        { name: 'سجل الترقيات', href: '/employeeAtt' },
        { name: 'طلب ترقية استثنائية', href: '/employeeAtt' },
      ],
    },
  ];

  const userNavigation = [
    { name: 'تسجيل الخروج', onClick: handleLogout },
    { name: 'ملفي الشخصي', href: '/employerIfo' },
  ];

  return (
    <div dir="rtl" className="flex">
      {/* Sidebar */}
      <aside className={`lg:flex lg:flex-col bg-gray-900 text-white w-72 ${sidebarOpen ? '' : 'hidden'}`}>
        <div className="h-16 flex items-center justify-center">
          <Image
            className="h-20 w-auto"
            src={logo}
            alt="Your Company"
          />
        </div>
        <nav className="flex-1 flex flex-col mt-4">
          <ul role="list" className="flex-1 space-y-4">
            {navigation.map((item) => (
              <li key={item.name}>
                {/* Main Item */}
                {item.subItems ? (
                  <div>
                    <a
                      href="#"
                      className={classNames(
                        item.current
                          ? 'bg-indigo-700 text-white'
                          : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                      onClick={() => setDropdownOpen(item.name === dropdownOpen ? null : item.name)}
                    >
                      <item.icon
                        className={classNames(
                          item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                          'h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                      <ChevronDownIcon className="ml-auto h-5 w-5 text-gray-400 group-hover:text-white" aria-hidden="true" />
                    </a>
                    {/* Sub-Items */}
                    <ul className={`ml-5 mt-1 space-y-1 ${item.name === dropdownOpen ? '' : 'hidden'}`}>
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          <a
                            href={subItem.href}
                            className={classNames(
                              subItem.current ? 'text-indigo-700' : 'text-indigo-200 hover:text-indigo-700',
                              'block px-2 py-1 text-sm leading-5'
                            )}
                          >
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  // Regular Item
                  <a
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-indigo-700 text-white' : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                        'h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1 min-h-screen">
        <header className="bg-white shadow-sm sticky top-0 z-40 flex flex-row justify-between px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            className="p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-x-4 lg:gap-x-6 ml-4"> {/* Moved ml-4 */}
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              {/* Profile dropdown */}
              <Menu as="div" className="relative">
                <Menu.Button className="flex items-center p-1.5">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="hidden lg:flex lg:items-center">
                    <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                      عمر محمد
                    </span>
                    <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className=" absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none  ">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? 'bg-gray-50' : '',
                              'block px-3 py-1 text-sm leading-6 text-gray-900'
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
              
              {/* Search */}
              <form className="relative flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  البحث
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
            </div>
            
            <button type="button" className="p-2.5 text-gray-400 hover:text-gray-500 lg:hidden">
              <span className="sr-only">عرض الاشعارات</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10 " aria-hidden="true" />
          </div>
        </header>

        <main className="py-10 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}