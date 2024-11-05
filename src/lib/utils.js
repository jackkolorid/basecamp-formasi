import DataPemasukan from "@/models/DataPemasukan";
import DataPengeluaran from "@/models/DataPengeluaran";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
} 