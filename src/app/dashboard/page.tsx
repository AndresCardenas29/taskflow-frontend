import React from "react";
import Cards from "@/components/Cards";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import TablePjRecent from "@/components/Tables/TablePjRecent";

const dashboard = () => {
	const tasks = [
		{
			name: "Tarea 1",
			description: "Descripción de la tarea 1",
			date: "2023-10-01",
		}
	];

	const projects = [
		{
			name: "Proyecto 1",
			description: "Descripción del proyecto 1",
			date: "2023-10-01",
		},
		{
			name: "Proyecto 2",
			description: "Descripción de la proyecto 2",
			date: "2023-10-02",
		},
		{
			name: "proyecto 3",
			description: "Descripción de la proyecto 3",
			date: "2023-10-03",
		},
	];

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
