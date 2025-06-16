import { CheckCircle, Plus, Search } from "lucide-react";
import React from "react";

const Tasks = () => {
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
			title: "Tarea de ejemplo",
			description: "Descripción de la tarea de ejemplo",
			assignedTo: avatars[0],
			status: "pending",
			deadline: "2023-10-15",
			project: "Proyecto A",
		},
		{
			id: 1,
			title: "Tarea de ejemplo 2",
			description: "Descripción de la 222222",
			assignedTo: avatars[0],
			status: "doing",
			deadline: "2023-10-15",
			project: "Proyecto Nek",
		},
		{
			id: 1,
			title: "Tarea de ejemplo 2",
			description: "Descripción de la 222222",
			assignedTo: avatars[0],
			status: "done",
			deadline: "2023-10-15",
			project: "Proyecto Nek",
		},
	];

	return (
		<div>
			{/* Header  */}
			<div className="header flex flex-col items-start p-4 bg-gray-100">
				<h1 className="text-2xl font-bold ">Mis Tareas</h1>
				<p className="text-gray-600">Gestiona todas tus tareas asignadas</p>
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
					{tasks.length > 0 ? (
						tasks.map((task, index) => (
							<div
								className="border-t px-4 py-4 text-gray-950 w-full border-gray-300 flex items-start justify-between gap-4"
								key={index}
							>
								<div className="info">
									<div className="title font-medium text-[1.4em]">
										{task.title}
									</div>
									<div className="descr text-gray-600 text-[.9em]">
										{task.description}
									</div>
									<div className="project flex items-center gap-2">
										<span className="font-normal text-blue-500 text-[.9em]">
											{task.project}
										</span>
										<span className="font-normal text-[.9em]">
											Fecha final: {task.deadline}
										</span>
									</div>
								</div>
								<div className="btns flex items-center justify-between gap-4">
									<div
										className={`doing  py-1 px-2 text-[.9em] rounded cursor-pointer hover:opacity-80 transition-all shadow-sm ${
											task.status === "pending"
												? "bg-gray-800 text-gray-200"
												: "bg-gray-200 text-gray-800"
										}`}
									>
										Por hacer
									</div>
									<div
										className={`doing py-1 px-2 text-[.9em] rounded cursor-pointer hover:opacity-80 transition-all shadow-sm ${
											task.status === "doing"
												? "bg-blue-800 text-blue-200"
												: "bg-blue-200 text-blue-800"
										}`}
									>
										En progreso
									</div>
									<div
										className={`doing py-1 px-2 text-[.9em] rounded cursor-pointer hover:opacity-80 transition-all shadow-sm ${
											task.status === "done"
												? "bg-green-800 text-green-200"
												: "bg-green-200 text-green-800"
										}`}
									>
										<CheckCircle className="w-6 h-6 px-1" />
									</div>
								</div>
							</div>
						))
					) : (
						<div className="border-t px-4 py-8 text-center text-gray-500 w-full border-gray-300 font-medium">
							No se encontraron tareas asignadas
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Tasks;
