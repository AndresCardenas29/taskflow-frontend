// components/layout.js

import Head from "next/head";
import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";
import React from "react";
import { Folder, House, LaptopMinimalCheck, Menu, User } from "lucide-react";
import Link from "next/link";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
				<div className="px-3 py-3 lg:px-5 lg:pl-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center justify-start rtl:justify-end">
							<button
								data-drawer-target="logo-sidebar"
								data-drawer-toggle="logo-sidebar"
								aria-controls="logo-sidebar"
								type="button"
								className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							>
								<span className="sr-only">Open sidebar</span>
								<Menu />
							</button>
							<a href="https://flowbite.com" className="flex ms-2 md:me-24">
								<img
									src="https://avatars.githubusercontent.com/u/37023028?v=4"
									className="h-8 me-3 rounded-full"
									alt="FlowBite Logo"
								/>
								<span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
									Task Flow
								</span>
							</a>
						</div>
						<div className="flex items-center">
							<div className="flex items-center ms-3">
								<div>
									<button
										type="button"
										className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
										aria-expanded="false"
										data-dropdown-toggle="dropdown-user"
									>
										<span className="sr-only">Open user menu</span>
										<img
											className="w-8 h-8 rounded-full"
											src="https://img.freepik.com/foto-gratis/mujer-sonriente-hablando-telefono_23-2149476757.jpg?t=st=1750016887~exp=1750020487~hmac=03029a640eb7f22170d5086bce83d9cc68a49fd6d7fc058bd3e5696b360007ef&w=1060"
											alt="user photo"
										/>
									</button>
								</div>
								<div
									className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow-sm dark:bg-gray-700 dark:divide-gray-600"
									id="dropdown-user"
								>
									<div className="px-4 py-3" role="none">
										<p
											className="text-sm text-gray-900 dark:text-white"
											role="none"
										>
											Neil Sims
										</p>
										<p
											className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
											role="none"
										>
											nek@mail.com
										</p>
									</div>
									<ul className="py-1" role="none">
										<li>
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
												role="menuitem"
											>
												Dashboard
											</a>
										</li>
										<li>
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
												role="menuitem"
											>
												Settings
											</a>
										</li>
										<li>
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
												role="menuitem"
											>
												Earnings
											</a>
										</li>
										<li>
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
												role="menuitem"
											>
												Sign out
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>

			<SideBar />

			<div className="p-4 sm:ml-64">
				<div className="p-4 mt-14">
					{children}
				</div>
			</div>
		</>
	);
};

export default Layout;
