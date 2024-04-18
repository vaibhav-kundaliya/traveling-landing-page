"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const navigation = [
    { name: "Home", href: "#", current: true, onlyInDropDown: false },
    { name: "Discover", href: "#", current: false, onlyInDropDown: false },
    { name: "Special Deals", href: "#", current: false, onlyInDropDown: false },
    { name: "Contact", href: "#", current: false, onlyInDropDown: false },
    { name: "Sign In", href: "#", current: false, onlyInDropDown: true },
    { name: "Sign Up", href: "#", current: false, onlyInDropDown: true },
];

function classNames(...classes) {
    return classes.join(" ");
}

export default function Header() {
    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl">
                        <div className="relative flex flex-row-reverse sm:flex-row h-16 items-center justify-between">
                            <div className="flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-lightpurple hover:bg-lightpurple-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                                </Disclosure.Button>
                            </div>
                            <div className="items-center flex gap-2">
                                <Image className="h-8 w-auto" src="./svgs/logo.svg" width={100} height={100} alt="Your Company" />
                                <div className="font-extrabold text-xl">Travlog</div>
                            </div>

                            <div className="hidden sm:ml-6 sm:block ">
                                <div className="flex items-center sm:items-stretch sm:justify-center">
                                    <div className="flex space-x-4">
                                        {navigation.filter(item => !(item.onlyInDropDown)).map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(item.current ? " font-bold  " : " font-semibold ", "rounded-md px-2 py-2 hover:font-extrabold")}
                                                aria-current={item.current ? "page" : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="sm:flex hidden items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2 ">
                                <div>Log In</div>
                                <button class="bg-lightpurple-500 hover:bg-lightpurple-700 text-white text-xs py-2 px-6 rounded-full">Sign Up</button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? "bg-lightpurple-500 text-white" : "text-gray-300 hover:bg-lightpurple-500 hover:text-white",
                                        "block rounded-md px-3 py-2 text-base font-medium"
                                    )}
                                    aria-current={item.current ? "page" : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
