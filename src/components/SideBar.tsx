import { Folder, House, LaptopMinimalCheck, User } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
	return (
		<aside
			id="logo-sidebar"
			className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
			aria-label="Sidebar"
		>
			<div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
				<ul className="space-y-2 font-medium">
					<li>
						<Link
							href="/dashboard/projects"
							className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
						>
							<House />
							<span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
						</Link>
					</li>
					<li>
						<Link
							href="/dashboard/projects"
							className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
						>
							<Folder />
							<span className="flex-1 ms-3 whitespace-nowrap">Proyectos</span>
						</Link>
					</li>
					<li>
						<Link
							href="#"
							className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
						>
							<LaptopMinimalCheck />
							<span className="flex-1 ms-3 whitespace-nowrap">Mis Tareas</span>
						</Link>
					</li>
					<li>
						<Link
							href="/team"
							className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
						>
							<User />
							<span className="flex-1 ms-3 whitespace-nowrap">Team</span>
						</Link>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
