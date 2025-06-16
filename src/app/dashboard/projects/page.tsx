"use client";
import { Plus, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";

interface users {
	id: number;
	email: string;
	username: string;
	is_active: boolean;
	role: string;
	created_at: string;
	updated_at: string;
	last_login_at: string;
}

type projectapi = {
	id: number;
	name: string;
	status: string;
	assigned_users: users[];
	created_at: string;
	updated_at: string;
};

const Projects = () => {
	const host = "http://localhost:4000";
	const [projects, setProjects] = useState<projectapi[]>([]); // Initialize projects as an empty array

	const getStatus = (status: string) => {
		switch (status) {
			case "start":
				return "Iniciado";
			case "inactive":
				return "Inactivo";
			default:
				return "Desconocido";
		}
	};

	useEffect(() => {
		const token = Cookie.get("token");

		if (token) {
			fetch(`${host}/users/projects`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
				.then(async (response) => {
					if (!response.ok) {
						throw new Error("Network response was not ok");
					}
					const data = await response.json();
					return data.data;
				})
				.then((data: projectapi[]) => {
					setProjects(data);
				})
				.catch((error) => {
					console.error("Error fetching projects:", error);
				});
		}
	}, []);
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
								ESTADO
							</th>
							<th className="bg-gray-100 px-4 py-2 border-t border-gray-300 font-medium">
								MIEMBROS
							</th>
							{/* 
							<th className="bg-gray-100 px-4 py-2 border-t border-gray-300 font-medium">
								CREADO POR
							</th> */}
						</tr>
					</thead>
					<tbody>
						{projects.map((project, index) => (
							<tr key={index}>
								<td className="px-4 py-4 border-t border-gray-300">
									<h4 className="text-sm font-medium text-gray-900">
										{project.name}
									</h4>
								</td>
								<td className="px-4 py-2 border-t border-gray-300 text-gray-900">
									{getStatus(project.status)}
								</td>
								<td className="px-4 py-2 border-t border-gray-300">
									<div className="flex items-center">
										{project.assigned_users.map((user, index) => (
											<div
												key={index}
												className={`w-8 h-8 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center font-bold text-white text-[1em] select-none hover:z-10 ${
													index > 0 ? "-ml-3" : ""
												}`}
											>
												{user.username.charAt(0).toUpperCase()}
											</div>
										))}
									</div>
								</td>
								{/* 
								<td className="px-4 py-2 border-t border-gray-300 font-medium text-gray-900">
									nekdress
								</td> */}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Projects;
