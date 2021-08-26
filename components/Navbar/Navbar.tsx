import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Menu, Transition } from '@headlessui/react'
import { LightningBoltIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import SearchInput from './SearchInput'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { disconnect } from '../../redux/slices/web3'
import { connectWithWeb3Modal } from '../../functions/web3/web3'
import { truncateEthAddress } from '../../functions/utils'
import {
  getCreatorName,
  getCreatorProfileImage,
} from '../../functions/helper/creator'
import { useTracking } from '../Shared/Tracking'

function classNames(...classes: unknown[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = (): JSX.Element => {
  const { logEvent } = useTracking()
  const web3State = useAppSelector((state) => state.web3Reducer)
  const dispatch = useAppDispatch()

  const handleDisconnectClick = () => dispatch(disconnect())
  const handleConnectClick = () => {
    logEvent({
      category: 'Actions',
      action: 'Clicked Connect Wallet',
      label: 'Clicked Wallet Connection',
    })
    connectWithWeb3Modal()
  }

  const userNavigation = [
    {
      name: 'View Your Profile',
      href: `/creators/${web3State?.profile?.address || ''}`,
    },
    { name: 'Join Discord', href: 'https://discord.gg/R5wqYhvv53' },
    { name: 'Disconnect', href: '#', handleClick: handleDisconnectClick },
  ]

  return (
    <div className="bg-gray-100 w-full h-20 lg:h-16 z-20 fixed">
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
                <SearchInput />
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
                {!web3State || !web3State?.profile?.address ? (
                  <div className="hidden lg:flex lg:items-center justify-center xl:col-span-2">
                    <a
                      href="#"
                      className="items-center px-7 py-2 border border-transparent text-lg font-bold rounded-full shadow-sm text-white bg-black transform transition ease-in duration-100 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                      onClick={handleConnectClick}
                    >
                      Connect Wallet
                    </a>
                  </div>
                ) : (
                  <div className="hidden justify-end lg:flex lg:items-center xl:col-span-3">
                    <a
                      href="#"
                      className="ml-6 inline-flex items-center px-6 py-2 border border-transparent text-lg font-bold rounded-full shadow-sm text-white bg-indigo-500 opacity-50 pointer-events-none"
                      // "transform transition ease-in duration-100 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 opacity-50"
                    >
                      Create
                    </a>
                    {/* <a
                      href="#"
                      className="ml-5 flex-shrink-0 shadow-sm rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none transform transition ease-in duration-100 hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <span className="sr-only">View notifications</span>
                      <LightningBoltIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </a> */}

                    <Menu as="div" className="flex-shrink-0 relative ml-5">
                      <div>
                        <Menu.Button className="px-4 bg-white w-36 py-1 shadow-sm rounded-full flex focus:outline-none transform transition ease-in duration-100 hover:-translate-y-0.5 hover:shadow-md">
                          <span className="sr-only">Open user menu</span>
                          <div className="flex flex-col">
                            <span className="font-bold text-sm">
                              {getCreatorName(web3State.profile)}
                            </span>
                            <span className="text-xs">
                              {truncateEthAddress(
                                web3State.profile.address as string,
                              )}
                            </span>
                          </div>
                          <img
                            className="ml-3 h-9 w-9 rounded-full"
                            src={getCreatorProfileImage(web3State.profile)}
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
                                <Link href={item.href}>
                                  <a
                                    aria-hidden
                                    onClick={item.handleClick}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block py-2 px-4 text-sm text-gray-700',
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                )}
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
                      onClick={item.handleClick}
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
}

export default Navbar
