"use client";
import React, { useEffect, useState } from "react";
import Cards from "@/components/Cards";
import TablePjRecent from "@/components/Tables/TablePjRecent";

type taskapi = {
	id: number;
	title: string;
	description: string;
	status: string;
	deadline: string | null;
	created_at: string;
	updated_at: string;
};

type projectapi = {
	id: number;
	name: string;
	description: string;
	status: string;
};

type tableProps = {
	name: string;
	description: string;
	date?: string;
};

const dashboard = () => {
	const host = "http://localhost:4000";
	const [tasks, setTasks] = useState<tableProps[]>([]);
	const [projects, setProjects] = useState<tableProps[]>([]);
	
	useEffect(() => {
		fetch(`${host}/tasks`)
			.then(async (response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();

				return await data.data;
			})
			.then((data: taskapi[]) => {
				const dta: tableProps[] = [];
				for (const item of data) {
					dta.push({
						name: item.title,
						description: item.description,
						date: item.deadline ? item.deadline : "No deadline",
					});
				}
				setTasks(dta);
			});

		fetch(`${host}/projects`)
			.then(async (response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				return await data;
			})
			.then((data: projectapi[]) => {
				const dta: tableProps[] = [];
				for (const item of data) {
					dta.push({
						name: item.name,
						description: item.description,
						date: item.status,
					});
				}
				setProjects(data);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
			
	}, []);

	return (
		<div>
			<div className="header">
				<h2 className="title text-3xl font-bold">Bienvenido, Admin Usuario</h2>
				<p className="text-lg text-gray-500">
					Aquí podras gestionar tus tareas y proyectos.
				</p>
			</div>

			<div className="taskStatus mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
				<Cards title="Tareas Totales" value={0} status="totaltask" />
				<Cards title="Completadas" value={0} status="completed" />
				<Cards title="En Progreso" value={0} status="in-progress" />
				<Cards title="Vencidas" value={0} status="overdue" />
			</div>

			<div className="tables grid grid-flow-col grid-cols-2 mt-10 gap-6">
				<TablePjRecent
					className="col-span-8"
					tableName="Proyectos Recientes"
					address="/projects"
					data={projects}
				/>
				<TablePjRecent
					className="col-span-4 min-w-[400px]"
					tableName="Tareas"
					address="/tasks"
					data={tasks}
				/>
				{/* <div className="table2 border-1 border-gray-300 rounded-lg bg-white row-span-4">
					Mis Tareas
				</div> */}
			</div>
		</div>
	);
};

export default dashboard;
