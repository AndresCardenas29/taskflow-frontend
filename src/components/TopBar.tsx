import Link from "next/link";

const TopBar = () => {
	return (
		<nav className="bg-gray-800 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className="text-white font-bold">Dashboard</h1>
				<ul className="flex space-x-4">
					<li>
						<Link href="/" className="text-gray-300 hover:text-white">
							Home
						</Link>
					</li>
					<li>
						<Link href="/dashboard" className="text-gray-300 hover:text-white">
							Dashboard
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default TopBar;
