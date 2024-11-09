import { HiOutlineAnnotation, HiOutlineBell, HiOutlineChat, HiOutlineChatAlt, HiOutlineSearch } from "react-icons/hi";
import { Menu, MenuButton, MenuItems, Popover, PopoverButton, PopoverPanel, Transition, MenuItem } from "@headlessui/react";
import { Fragment } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export function Appbar(){
    const navigate = useNavigate();

    
    return <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
        <div className="relative">
            <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"/>
            <input 
            type="text" 
            placeholder="Search..." 
            className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4"/>
        </div>
        <div className="flex items-center gap-2 mr-2">
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <PopoverButton className={classNames(open && "bg-gray-100","p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100")}>
                            <HiOutlineChatAlt fontSize={24}/>
                        </PopoverButton>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <PopoverPanel className="absolute right-0 z-10 mt-2.5 w-80">
                                <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                    <strong className="text-gray-700 font-medium">Message</strong>
                                    <div className="mt-2 py-1 text-sm">This is message panel.</div>
                                </div>
                            </PopoverPanel>

                        </Transition>
                    </>
                )}
            </Popover>
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <PopoverButton className={classNames(open && "bg-gray-100","p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100")}>
                            <HiOutlineBell fontSize={24}/>
                        </PopoverButton>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <PopoverPanel className="absolute right-0 z-10 mt-2.5 w-80">
                                <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                    <strong className="text-gray-700 font-medium">Notification</strong>
                                    <div className="mt-2 py-1 text-sm">This is notification panel.</div>
                                </div>
                            </PopoverPanel>

                        </Transition>
                    </>
                )}
            </Popover>
            <Menu as="div" className="relative">
                <div>
                    <MenuButton className="ml-2 flex items-center rounded-full focus:outline-none focus:ring-2 focus: ring-neutral-400">
                        <span className="sr-only">Open user menu</span>
                        <div className="bg-[url('https://xsgames.co/randomusers/assets/avatars/male/76.jpg')] h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center">
                            <span className="sr-only">John Doe</span>
                        </div>
                    </MenuButton>
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
                        <MenuItems className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
							<MenuItem>
								{({ focus }) => (
									<div
										onClick={() => navigate('/profile')}
										className={classNames(
											focus && 'bg-gray-100',
											'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
										)}
									>
										Your Profile
									</div>
								)}
							</MenuItem>
							<MenuItem>
								{({ focus }) => (
									<div
										onClick={() => navigate('/settings')}
										className={classNames(
											focus && 'bg-gray-100',
											'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
										)}
									>
										Settings
									</div>
								)}
							</MenuItem>
							<MenuItem>
								{({ focus }) => (
									<div
										className={classNames(
											focus && 'bg-gray-100',
											'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
										)}
									>
										Sign out
									</div>
								)}
							</MenuItem>
						</MenuItems>
                </Transition>
          </Menu>
        </div>
    </div>
}