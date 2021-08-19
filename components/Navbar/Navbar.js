import { Fragment } from 'react'
import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { LightningBoltIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import SearchInput from './SearchInput'

// const user = {
//   name: 'Chelsea Hagon',
//   email: 'chelseahagon@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }

const userNavigation = [
  { name: 'View Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Support', href: 'https://discord.gg/R5wqYhvv53' },
  { name: 'Disconnect', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => (
  <div className="bg-gray-100 w-full h-20 lg:h-16 z-10 fixed shadow-md">
    {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
    <Popover
      as="header"
      className={({ open }) =>
        classNames(
          open &&
            'top-0 left-0 bg-gray-100 fixed lg:absolute lg:bg-transparent inset-0',
          'w-full bg-gray-100 lg:bg-transparent fixed lg:absolute lg:overflow-y-visible',
        )
      }
    >
      {({ open }) => (
        <>
          <div
            className={`${
              open && 'bg-gray-100'
            } max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8`}
          >
            <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
              <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a>
                      <img
                        className="block h-8 w-auto"
                        src="/img/logo.png"
                        alt="Workflow"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <SearchInput extended />
              <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                {/* Mobile menu button */}
                <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Popover.Button>
              </div>
              <div className="hidden lg:flex lg:items-center justify-center xl:col-span-2">
                <a
                  href="#"
                  className="inline-flex items-center px-7 py-2 border border-transparent text-lg font-bold rounded-full shadow-sm text-white bg-black transform transition ease-in duration-100 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 hidden"
                >
                  Connect Wallet
                </a>
              </div>
              {/* <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                  <a
                    href="#"
                    className="ml-6 inline-flex items-center px-6 py-2 border border-transparent text-lg font-bold rounded-full shadow-sm text-white bg-gradient-to-t from-green-400 to-blue-500 transform transition ease-in duration-100 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    Create
                  </a>
                  <a
                    href="#"
                    className="ml-5 flex-shrink-0 bg-white shadow-sm rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none transform transition ease-in duration-100 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="sr-only">View notifications</span>
                    <LightningBoltIcon className="h-6 w-6" aria-hidden="true" />
                  </a>

                  <Menu as="div" className="flex-shrink-0 relative ml-5">
                    <div>
                      <Menu.Button className="px-4 bg-white w-36 py-1 shadow-sm rounded-full flex focus:outline-none transform transition ease-in duration-100 hover:-translate-y-0.5 hover:shadow-md">
                        <span className="sr-only">Open user menu</span>
                        <div className="flex flex-col">
                          <span className="font-bold text-sm">0.014 ETH</span>
                          <span className="text-xs">0x689D...6375</span>
                        </div>
                        <img
                          className="ml-3 h-9 w-9 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block py-2 px-4 text-sm text-gray-700',
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
                </div> */}
            </div>
          </div>

          <Popover.Panel
            as="nav"
            className="lg:hidden bg-gray-100"
            aria-label="Global"
          >
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                  <LightningBoltIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="pt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                {userNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  </div>
)

export default Navbar
