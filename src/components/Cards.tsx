import { Clock } from "lucide-react";
import Link from "next/link";

const Cards = ({
	title,
	value,
	status,
}: {
	title: string;
	value: number;
	status: "totaltask" | "completed" | "in-progress" | "overdue";
}) => {
	let getCardClass = (status: string) => {
		switch (status) {
			case "totaltask":
				return "bg-blue-100 text-blue-700";
			case "completed":
				return "bg-green-100 text-green-700";
			case "in-progress":
				return "bg-red-100 text-red-700";
			case "overdue":
				return "bg-yellow-200 text-yellow-700";
			default:
				return "bg-gray-100 text-white";
		}
	};

	return (
		<div className="flex flex-row border-1 border-gray-300 min-w-[240px] max-h-28 rounded-lg shadow-sm p-6 bg-white gap-4">
			<div
				className={`icon-status flex items-center justify-center w-12 h-12 rounded-full my-auto ${getCardClass(
					status
				)}`}
			>
				<Clock />
			</div>
			<div className="info">
				<h3 className="text-sm font-semibold text-gray-600">{title}</h3>
				<span className="text-gray-900 text-[1.5em] font-bold">{value}</span>
			</div>
		</div>
	);
};

export default Cards;
