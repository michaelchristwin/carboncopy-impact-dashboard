import { Suspense, useState } from "react";
import { Await, useLoaderData } from "react-router";
import {
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { LineChartErrorElement } from "~/components/ErrorElements";
import { LineChartSkeleton } from "~/components/Skeletons";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { aggregateByMonth, aggregateByYear, type DataPoint } from "~/lib/utils";

const chartData = [
  { chain: "evm", funding: 275, fill: "rgb(52, 152, 219)" },
  { chain: "solana", funding: 200, fill: "rgb(123, 237, 159)" },
  { chain: "polkadot", funding: 187, fill: "rgb(231, 76, 60)" },
  { chain: "near", funding: 173, fill: "rgb(155, 89, 182)" },
  { chain: "other", funding: 90, fill: "rgb(241, 196, 15)" },
];

const chartConfig = {
  funding: {
    label: "Funding",
  },
  evm: {
    label: "EVM",
    color: "var(--chart-1)",
  },
  solana: {
    label: "Solana",
    color: "var(--chart-2)",
  },
  polkadot: {
    label: "Polkadot",
    color: "var(--chart-3)",
  },
  near: {
    label: "Near",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

const lineChartConfig = {
  value: {
    label: "Value",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function meta() {
  return [{ title: "Venture Funding | Carboncopy Impact Dashboard" }];
}

export function loader() {
  const chartsData = fetch(
    "http://localhost:8000/api/project-metrics-timeseries/1"
  ).then((res) => res.json());

  return { chartsData };
}

export default function VentureFunding() {
  const { chartsData } = useLoaderData<typeof loader>();
  const [lineChartMode, setLineChartMode] = useState("monthly");
  const getChartData = (data: DataPoint[]) => {
    return lineChartMode === "monthly"
      ? aggregateByMonth(data)
      : aggregateByYear(data);
  };

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 overflow-x-hidden relative">
      <div>
        <h2 className="md:text-[27px] text-[17px] font-[500]">
          Venture Funding
        </h2>
        {/* Fixed grid layout - single column on mobile, proper sizing on desktop */}
        <div className="grid auto-rows-min gap-4 grid-cols-1 md:grid-cols-[1.3fr_1fr]">
          {/* Line Chart Container - Fixed width constraints */}
          <div className="h-82 rounded-xl bg-muted/50 p-2 min-w-0 overflow-hidden">
            <Suspense fallback={<LineChartSkeleton />}>
              <Await
                key={lineChartMode}
                resolve={chartsData}
                errorElement={<LineChartErrorElement />}
                children={(data) => {
                  const lineChartData = getChartData(data.results);
                  return (
                    <ChartContainer
                      config={lineChartConfig}
                      className="w-full h-70 relative min-w-0"
                    >
                      <ResponsiveContainer
                        width="100%"
                        height="100%"
                        minWidth={0}
                      >
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
                            dataKey="period"
                            tickMargin={8}
                            tickFormatter={(value) =>
                              lineChartMode === "monthly"
                                ? value.slice(0, 3)
                                : value
                            }
                          />
                          <YAxis />
                          <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent />}
                          />
                          <Line
                            dataKey="value"
                            type="monotone"
                            stroke="#3B82F6"
                            strokeWidth={2}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  );
                }}
              />
            </Suspense>
            <div className="mt-1 flex w-full justify-center items-center">
              <Tabs
                defaultValue="monthly"
                onValueChange={(v) => setLineChartMode(v)}
              >
                <TabsList>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly">Yearly</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
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
                    dataKey="funding"
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                  />
                  <ChartLegend
                    content={<ChartLegendContent nameKey="chain" />}
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
            <p className={`text-[20px] md:text-[30px] font-bold text-center`}>
              ${Number(3440239).toLocaleString()}
            </p>
            <p
              className={`text-[14px] md:text-[16px] text-neutral-700 text-center`}
            >
              Raised
            </p>
          </div>
          <div className="h-40 rounded-xl bg-muted/50 p-6 flex flex-col justify-center items-center">
            <p className={`text-[20px] md:text-[30px] font-bold text-center`}>
              {Number(239).toLocaleString()}
            </p>
            <p
              className={`text-[14px] md:text-[16px] text-neutral-700 text-center`}
            >
              Deals
            </p>
          </div>
          <div className="h-40 rounded-xl bg-muted/50 p-6 flex flex-col justify-center items-center">
            <p className={`text-[30px] md:text-[40px] font-bold text-center`}>
              12
            </p>
            <p
              className={`text-[14px] md:text-[16px] text-neutral-700 text-center`}
            >
              Projects Reporting
            </p>
          </div>
        </div>
      </div>
      <div className="h-fit w-full min-h-[100vh] flex flex-col flex-1 md:min-h-min space-y-2">
        <h2 className="text-[22px] font-bold">Projects</h2>
        <Table>
          <TableHeader className="w-full rounded-xl bg-muted/50">
            <TableRow>
              <TableHead className="w-[30%]">Project</TableHead>
              <TableHead className="w-[20%]">Deals</TableHead>
              <TableHead className="w-[20%]">Raised</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="w-full rounded-xl bg-muted/50 p-6"></TableBody>
        </Table>
      </div>
    </div>
  );
}
