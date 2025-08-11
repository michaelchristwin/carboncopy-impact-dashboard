import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface DataPoint {
  timestamp: string;
  value: number;
}

interface GroupedData {
  values: number[];
  count: number;
}

export const aggregateByMonth = (data: DataPoint[]) => {
  const monthlyGroups: Record<string, GroupedData> = {};
  const currentYear = new Date().getFullYear();
  const filteredData = data.filter((item: any) => {
    const year = new Date(item.timestamp).getFullYear();
    return year === currentYear;
  });
  // Group by YYYY-MM
  filteredData.forEach((item) => {
    const date = new Date(item.timestamp);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;

    if (!monthlyGroups[monthKey]) {
      monthlyGroups[monthKey] = { values: [], count: 0 };
    }
    monthlyGroups[monthKey].values.push(item.value);
    monthlyGroups[monthKey].count++;
  });

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Convert to array with a safe sort key
  return Object.keys(monthlyGroups)
    .map((monthKey) => {
      const values = monthlyGroups[monthKey].values;
      const [year, month] = monthKey.split("-").map(Number);

      return {
        period: `${monthNames[month - 1]} ${year}`,
        value: values.reduce((sum, val) => sum + val, 0),
        count: values.length,
        sortKey: `${year}-${String(month).padStart(2, "0")}`, // For guaranteed correct sort
      };
    })
    .sort((a, b) => a.sortKey.localeCompare(b.sortKey))
    .map(({ sortKey, ...rest }) => rest); // Drop sortKey from final result
};

export const aggregateByYear = (data: DataPoint[]) => {
  const yearlyGroups: Record<number, GroupedData> = {};

  // Group by year
  data.forEach((item) => {
    const date = new Date(item.timestamp);
    const year = date.getFullYear();

    if (!yearlyGroups[year]) {
      yearlyGroups[year] = { values: [], count: 0 };
    }
    yearlyGroups[year].values.push(item.value);
    yearlyGroups[year].count++;
  });

  // Convert to array and sort
  return Object.keys(yearlyGroups)
    .map((yearStr) => {
      const year = parseInt(yearStr, 10);
      const values = yearlyGroups[year].values;

      return {
        period: year.toString(), // Keep as number for easy sorting
        value: values.reduce((sum, val) => sum + val, 0), // Sum for the year
        count: values.length,
        sortKey: year,
      };
    })
    .sort((a, b) => a.sortKey - b.sortKey)
    .map(({ sortKey, ...rest }) => rest);
};
