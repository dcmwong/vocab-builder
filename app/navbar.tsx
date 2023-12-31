'use client';

import { Fragment, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const navigation = [
  { name: 'Stories', href: '/' },
  { name: 'Dashboard', href: '/playground' }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const ChangeAgeDialog = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen:boolean) => void}) => {
  const [age, setAge] = useState(6);
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-4">
          <Dialog.Title>Change the age of the user</Dialog.Title>

          <p>
            <div className="w-full px-4 py-2">
              {age}
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                className="slider bg-gray-300 w-full h-2 rounded-full"
                onChange={e => setAge(parseInt(e.target.value))}
              />
            </div>
          </p>

          <button className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-700 mr-2" onClick={() => setIsOpen(false)}>Cancel</button>
          <button className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-700" onClick={() => setIsOpen(false)}>Update</button>
        </Dialog.Panel>
      </div>
    </Dialog>)
}
export default function Navbar() {
  const pathname = usePathname();
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Disclosure as="nav" className="bg-white shadow-sm">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="items-center flex">
                    <BookOpenIcon className="h-12" />
                  </div>
                  <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          pathname === item.href
                            ? 'border-slate-500 text-gray-900'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                          'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                        )}
                        aria-current={pathname === item.href ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                        <span className="sr-only">Open user menu</span>
                        <Image
                          className="h-8 w-8 rounded-full"
                          src={'https://avatar.vercel.sh/leerob'}
                          height={32}
                          width={32}
                          alt={`${'placeholder'} avatar`}
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'flex w-full px-4 py-2 text-sm text-gray-700'
                              )}
                              onClick={() => setIsOpen(!isOpen)}
                            >
                              Account 
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      pathname === item.href
                        ? 'bg-slate-50 border-slate-500 text-slate-700'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                      'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                    )}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-gray-200 pb-3">
                  <div className="mt-2 space-y-1">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="flex w-full px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    >
                      Account 
                    </button>
                  </div>
              </div>
            </Disclosure.Panel>
          </>
        )}

      </Disclosure>
      <ChangeAgeDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
