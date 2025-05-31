import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { createFileRoute } from "@tanstack/react-router";
import { CartesianGrid, Line, LineChart, XAxis, Pie, PieChart } from "recharts";

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

function RouteComponent() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div>
        <h2 className="text-[27px] font-[500] mb-0.5">Ecological Credits</h2>
        <div className="grid auto-rows-min gap-4 md:grid-cols-[1.3fr_1fr]">
          <div className="h-82 rounded-xl bg-muted/50 p-2">
            <ChartContainer
              config={lineChartConfig}
              className="w-full h-full relative"
            >
              <LineChart
                accessibilityLayer
                data={lineChartData}
                margin={{
                  left: 12,
                  right: 12,
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
            </ChartContainer>
          </div>
          <div className="h-82 rounded-xl bg-muted/50 p-6 space-y-4">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[300px]"
            >
              <PieChart>
                <Pie data={chartData} dataKey="visitors" />
                <ChartLegend
                  content={<ChartLegendContent nameKey="browser" />}
                  className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
                />
              </PieChart>
            </ChartContainer>
          </div>
        </div>
      </div>
      <div className={``}>
        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
          <div className="h-40 rounded-xl bg-muted/50 p-6 flex flex-col justify-center items-center">
            <p className={`text-[40px] font-bold text-center`}>
              {Number(3440239).toLocaleString()}
            </p>
            <p className={`text-[16px] text-neutral-700 text-center`}>Issued</p>
          </div>
          <div className="h-40 rounded-xl bg-muted/50 p-6 flex flex-col justify-center items-center">
            <p className={`text-[40px] font-bold text-center`}>
              {Number(440239).toLocaleString()}
            </p>
            <p className={`text-[16px] text-neutral-700 text-center`}>
              Retired
            </p>
          </div>
          <div className="h-40 rounded-xl bg-muted/50 p-6 flex flex-col justify-center items-center">
            <p className={`text-[40px] font-bold text-center`}>
              ${Number(3440239).toLocaleString()}
            </p>
            <p className={`text-[16px] text-neutral-700 text-center`}>
              Sales Volume
            </p>
          </div>
          <div className="h-40 rounded-xl bg-muted/50 p-6 flex flex-col justify-center items-center">
            <p className={`text-[40px] font-bold text-center`}>
              {Number(12).toLocaleString()}
            </p>
            <p className={`text-[16px] text-neutral-700 text-center`}>
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
