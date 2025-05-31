import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  Pie,
  PieChart,
  ResponsiveContainer,
} from "recharts";

export const Route = createFileRoute("/ecological-credits")({
  component: RouteComponent,
});

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

const lineChartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const lineChartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const options = [
  { id: "option1", label: "All" },
  { id: "option2", label: "On-Chain" },
  { id: "option3", label: "Off-Chain" },
];

function RouteComponent() {
  const [activeOption, setActiveOption] = useState("option1");

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 overflow-x-hidden relative">
      <div className="bg-white fixed top-[93dvh] w-[99%] z-10 right-0 p-1 rounded-xl shadow-sm border border-gray-200">
        <div className="flex relative">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveOption(option.id)}
              className={`
                    relative px-6 py-2 rounded-lg font-medium text-sm transition-all duration-200 ease-in-out
                    flex items-center gap-2 min-w-[120px] justify-center
                    ${
                      activeOption === option.id
                        ? "bg-yellow-500 text-white shadow-md transform scale-105"
                        : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                    }
                  `}
            >
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className={`flex md:justify-between mb-2`}>
          <h2 className="md:text-[27px] text-[17px] font-[500]">
            Ecological Credits
          </h2>
          <div className="bg-white md:block hidden p-1 rounded-xl shadow-sm border border-gray-200">
            <div className="flex relative">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveOption(option.id)}
                  className={`
                    relative px-6 py-2 rounded-lg font-medium text-sm transition-all duration-200 ease-in-out
                    flex items-center gap-2 min-w-[120px] justify-center
                    ${
                      activeOption === option.id
                        ? "bg-yellow-500 text-white shadow-md transform scale-105"
                        : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                    }
                  `}
                >
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Fixed grid layout - single column on mobile, proper sizing on desktop */}
        <div className="grid auto-rows-min gap-4 grid-cols-1 md:grid-cols-[1.3fr_1fr]">
          {/* Line Chart Container - Fixed width constraints */}
          <div className="h-82 rounded-xl bg-muted/50 p-2 min-w-0 overflow-hidden">
            <ChartContainer
              config={lineChartConfig}
              className="w-full h-full relative min-w-0"
            >
              <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                <LineChart
                  accessibilityLayer
                  data={lineChartData}
                  margin={{
                    left: 12,
                    right: 12,
                    top: 8,
                    bottom: 8,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                  />
                  <Line
                    dataKey="desktop"
                    type="monotone"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    dataKey="mobile"
                    type="monotone"
                    stroke="var(--color-mobile)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>

          {/* Pie Chart Container - Fixed width constraints */}
          <div className="h-82 rounded-xl bg-muted/50 p-4 md:p-6 space-y-4 min-w-0 overflow-hidden">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[280px] w-full min-w-0"
            >
              <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="visitors"
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                  />
                  <ChartLegend
                    content={<ChartLegendContent nameKey="browser" />}
                    className="-translate-y-2 flex-wrap gap-2 text-xs"
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </div>
      <div className={``}>
        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
          <div className="h-40 rounded-xl bg-muted/50 p-6 flex flex-col justify-center items-center">
            <p className={`text-[30px] md:text-[40px] font-bold text-center`}>
              {Number(3440239).toLocaleString()}
            </p>
            <p
              className={`text-[14px] md:text-[16px] text-neutral-700 text-center`}
            >
              Issued
            </p>
          </div>
          <div className="h-40 rounded-xl bg-muted/50 p-6 flex flex-col justify-center items-center">
            <p className={`text-[30px] md:text-[40px] font-bold text-center`}>
              {Number(440239).toLocaleString()}
            </p>
            <p
              className={`text-[14px] md:text-[16px] text-neutral-700 text-center`}
            >
              Retired
            </p>
          </div>
          <div className="h-40 rounded-xl bg-muted/50 p-6 flex flex-col justify-center items-center">
            <p className={`text-[30px] md:text-[40px] font-bold text-center`}>
              ${Number(3440239).toLocaleString()}
            </p>
            <p
              className={`text-[14px] md:text-[16px] text-neutral-700 text-center`}
            >
              Sales Volume
            </p>
          </div>
          <div className="h-40 rounded-xl bg-muted/50 p-6 flex flex-col justify-center items-center">
            <p className={`text-[30px] md:text-[40px] font-bold text-center`}>
              {Number(12).toLocaleString()}
            </p>
            <p
              className={`text-[14px] md:text-[16px] text-neutral-700 text-center`}
            >
              Projects reporting
            </p>
          </div>
        </div>
      </div>
      <div className="h-fit w-full min-h-[100vh] flex flex-col flex-1 md:min-h-min space-y-2">
        <h2 className="text-[22px] font-bold">Projects</h2>
        <div className="flex-1 rounded-xl bg-muted/50 p-6" />
      </div>
    </div>
  );
}
