interface ProjectData {
	name: string;
	impacts: string[];
	slug: string;
}

const data: ProjectData[] = [
	{
		name: "Arkreen",
		impacts: ["Solar Enery Generated", "Emissions avoided", "RECs issued"],
		slug: "arkreen",
	},
	{
		name: "Beach Collective",
		impacts: ["Waste collected"],
		slug: "beach-collective",
	},
	{
		name: "Carbify",
		impacts: ["On-chain credits issued", "On-chain credits retired"],
		slug: "carbify",
	},
	{
		name: "EthicHub",
		impacts: ["Lent to impact projects", "Projects lent to"],
		slug: "ethichub",
	},
	{
		name: "IXO World",
		impacts: ["On-chain credits issued", "On-chain credits retired"],
		slug: "ixo-world",
	},
	{
		name: "ImpactMarket",
		impacts: ["UBI Distributed", "UBI Recipients"],
		slug: "impactmarket",
	},
];

export function meta() {
	return [{ title: "Projects | Carboncopy Impact Dashboard" }];
}

export default function Projects() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4 overflow-x-hidden relative">
			<div>
				<h2 className="md:text-[27px] text-[17px] font-[500]">
					Projects Integrated
				</h2>
				{/* Fixed grid layout - single column on mobile, proper sizing on desktop */}
				<div className="grid auto-rows-min gap-4 grid-cols-1 md:grid-cols-3">
					{data.map((item) => (
						<div
							className="h-70 rounded-xl bg-muted/50 p-4 md:p-6 min-w-0 relative"
							key={item.name}
						>
							<p className={`md:text-[20px] text-[16px] font-[500]`}>
								{item.name}
							</p>
							<div className={`mt-3`}>
								{item.impacts.map((impact) => (
									<p key={impact}>{impact}</p>
								))}
							</div>
							<a
								target="_blank"
								href={`https://carboncopy.news/project/${item.slug}`}
								className={`absolute bottom-3  text-yellow-500 hover:underline`}
							>
								Details
								<span className={`font-mono tracking-[-0.1em] text-[13px]`}>
									{" ->"}
								</span>
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
