import { Plus, Search } from "lucide-react";
import React from "react";

const Projects = () => {
	const avatars = [
		{
			id: 1,
			src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
			alt: "Avatar 1",
		},
		{
			id: 2,
			src: "https://i.pravatar.cc/150?img=2",
			alt: "BAvatar 2",
		},
		{
			id: 3,
			src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
			alt: "CAvatar 3",
		},
	];
	return (
		<div>
			{/* Header  */}
			<div className="header flex justify-between items-center p-4 bg-gray-100">
				<h1 className="text-2xl font-bold">Proyectos</h1>
				<button className="flex items-center px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 gap-3 cursor-pointer transition-colors shadow-md">
					<Plus /> Nuevo Proyecto
				</button>
			</div>
			{/* Table */}
			<div className="table bg-white shadow-sm rounded-lg mt-4 w-full border border-gray-200">
				{/* Search  */}
				<div className="search p-4">
					<form className="mx-auto">
						<label className="mb-2 text-sm font-medium text-gray-900 sr-only">
							Search
						</label>
						<div className="relative">
							<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
								<Search className="w-5 h-5 text-gray-500 dark:text-gray-400" />
							</div>
							<input
								type="search"
								id="default-search"
								className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
								placeholder="Buscar proyectos"
								required
							/>
							<button
								type="submit"
								className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								Buscar
							</button>
						</div>
					</form>
				</div>
				{/* Table content */}
				<table className="min-w-full text-sm text-left text-gray-500 mt-2">
					<thead>
						<tr>
							<th className="bg-gray-100 px-4 py-2 border-t border-gray-300 font-medium">
								PROYECTO
							</th>
							<th className="bg-gray-100 px-4 py-2 border-t border-gray-300 font-medium">
								FECHA DE CREACIÓN
							</th>
							<th className="bg-gray-100 px-4 py-2 border-t border-gray-300 font-medium">
								MIEMBROS
							</th>
							<th className="bg-gray-100 px-4 py-2 border-t border-gray-300 font-medium">
								CREADO POR
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="px-4 py-4 border-t border-gray-300">
								<h4 className="text-sm font-medium text-gray-900">
									Proyecto de Ejemplo 1
								</h4>
								<p>Descripción del proyecto de ejemplo 1.</p>
							</td>
							<td className="px-4 py-2 border-t border-gray-300 text-gray-900">
								15 jun 2025
							</td>
							<td className="px-4 py-2 border-t border-gray-300">
								<div className="flex items-center">
									{avatars.map((avatar, index) => (
										<div
											key={index}
											className={`w-8 h-8 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center font-bold text-white text-[1em] ${
												index > 0 ? "-ml-3" : ""
											}`}
										>
											{avatar.alt.charAt(0).toUpperCase()}
										</div>
									))}
								</div>
							</td>
							<td className="px-4 py-2 border-t border-gray-300 font-medium text-gray-900">
								nekdress
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Projects;
