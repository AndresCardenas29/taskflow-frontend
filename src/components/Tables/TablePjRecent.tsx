import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface TablePjRecentProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
	tableName?: string;
	address?: string;
	data?: {
		name: string;
		description: string;
		date?: string;
	}[];
}

const TablePjRecent: React.FC<TablePjRecentProps> = ({
	tableName,
	address,
	data = [],
	className,
	...props
}) => {
	return (
		<div
			className={`border-1 border-gray-300 rounded-lg bg-white shadow-sm w-auto ${className}`}
			{...props}
		>
			<h3 className="text-[1.3em] font-semibold px-4 py-6 flex items-center justify-between">
				{tableName}
				<Link
					href={address || "#"}
					className="text-blue-500 hover:text-blue-700 text-sm flex flex-row items-center gap-1"
				>
					Ver todos <ChevronRight />
				</Link>
			</h3>
			{data.length > 0 ? (
				data.map((item, index) => (
					<div
						className="project border-t border-gray-300 px-4 py-6 flex items-start justify-between gap-4"
						key={index}
					>
						<div className="info">
							<h4 className="text-lg font-semibold">{item.name}</h4>
							<p className="text-gray-500">{item.description}</p>
						</div>
						<div className="date text-gray-500">{item.date}</div>
					</div>
				))
			) : (
				<div className="project border-t border-gray-300 px-4 py-6 flex items-start justify-center font-semibold text-gray-600">
					No tienes {tableName?.toLowerCase()} recientes.
				</div>
			)}
		</div>
	);
};

export default TablePjRecent;
