import { CheckCircle, Plus, Search, Trash2, UserRoundPen } from "lucide-react";
import React from "react";

const Team = () => {
	const avatars = [
		{
			id: 1,
			src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
			alt: "Avatar 1",
		},
		{
			id: 2,
			src: "https://i.pravatar.cc/150?img=2",
			alt: "Avatar 2",
		},
		{
			id: 3,
			src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
			alt: "Avatar 3",
		},
	];

	const tasks = [
		{
			id: 1,
			username: "Andrés",
			email: "andres@mail.com",
			isActice: true,
			role: "member",
		},
		{
			id: 1,
			username: "Mario",
			email: "mario@mail.com",
			isActice: true,
			role: "member",
		},
	];

	return (
		<div>
			{/* Header  */}
			<div className="header flex flex-row p-4 bg-gray-100 justify-between items-center">
				<div>
					<h1 className="text-2xl font-bold ">Mis Tareas</h1>
					<p className="text-gray-600">Gestiona todas tus tareas asignadas</p>
				</div>
				<div>
					<button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-blue-500 cursor-pointer">
						Agregar Usuario
					</button>
				</div>
			</div>
			{/* Main Content  */}

			<div className="content bg-white shadow-sm rounded-lg mt-4 w-full border border-gray-300">
				{/* Search */}
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
								placeholder="Buscar tareas"
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
				{/* Task List */}
				<div className="table w-full">
					<div className="border-t px-4 py-4 text-gray-950 w-full border-gray-300 flex items-start justify-between gap-4">
						<table className="w-full">
							<thead className="border-b border-gray-300">
								<tr>
									<td className="font-medium text-[1em]  px-2">
										Nombre de usuario
									</td>
									<td className="font-medium text-[1em]  px-2">Email</td>
									<td className="font-medium text-[1em]  px-2">Estado</td>
									<td className="font-medium text-[1em]  px-2">Rol</td>
									<td className="font-medium text-[1em]  px-2"></td>
								</tr>
							</thead>
							<tbody>
								{tasks.length > 0 ? (
									tasks.map((task, index) => (
										<tr
											className="border-t border-gray-300 hover:bg-gray-200 cursor-pointer"
											key={index}
										>
											<td className="text-[1em] px-2">{task.username}</td>
											<td className="text-gray-600 text-[.9em] py-2  px-2">
												{task.email}
											</td>
											<td className="text-gray-600 text-[.9em] py-2  px-2">
												{task.isActice ? "Activo" : "Inactivo"}
											</td>
											<td className="text-gray-600 text-[.9em] py-2  px-2">
												{task.role}
											</td>
											<td className="text-gray-600 text-[.9em] flex items-center gap-2 py-2  px-2">
												<button className="text-red-500 hover:text-red-700 cursor-pointer">
													<Trash2 />
												</button>
												<button className="text-blue-500 hover:text-blue-700 cursor-pointer">
													<UserRoundPen />
												</button>
											</td>
										</tr>
									))
								) : (
									<div className="border-t px-4 py-8 text-center text-gray-500 w-full border-gray-300 font-medium">
										No se encontraron usuarios
									</div>
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
