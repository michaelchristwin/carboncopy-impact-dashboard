export function meta() {
	return [
		{
			title: "Overview | Carboncopy Impact Dashboard",
		},
	];
}

export default function Overview() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<div className="grid auto-rows-min gap-4 md:grid-cols-[1.3fr_1fr]">
				<div className="h-85 rounded-xl bg-muted/50" />
				<div className="h-85 rounded-xl bg-muted/50 md:p-6 p-3 md:space-y-4 space-y-3">
					<div>
						<h2 className={`md:text-[20px] text-[17px]`}>
							Total Funding to impact projects
						</h2>
						<p className={`md:text-[50px] text-[40px] font-bold`}>
							${Number(21000000).toLocaleString()}
						</p>
					</div>
					<div className={`flex w-full justify-between`}>
						<div>
							<p>7 Days</p>
							<p>+7.36% (${Number(23200).toLocaleString()})</p>
						</div>
						<div>
							<p>30 Days</p>
							<p>+7.36% (${Number(23200).toLocaleString()})</p>
						</div>
					</div>
					<div className="w-full flex justify-between">
						<div>
							<p className={`text-[18px]`}>Investments</p>
							<p className={`font-semibold text-[20px]`}>
								${Number(16000000).toLocaleString()}
							</p>
							<div className={`mt-1 space-y-1`}>
								<p className={`md:text-[1rem] text-[0.8rem] text-green-500`}>
									7D: +7.36% (${Number(23200).toLocaleString()})
								</p>
								<p className={`md:text-[1rem] text-[0.8rem] text-green-500`}>
									30D: +7.36% (${Number(23200).toLocaleString()})
								</p>
							</div>
						</div>
						<div>
							<p className={`text-[18px]`}>Grants</p>
							<p className={`font-semibold text-[20px]`}>
								${Number(5000000).toLocaleString()}
							</p>
							<div className={`mt-1 block space-y-1`}>
								<p className={`md:text-[1rem] text-[0.8rem] text-green-500`}>
									7D: +7.36% (${Number(23200).toLocaleString()})
								</p>
								<p className={`md:text-[1rem] text-[0.8rem] text-green-500`}>
									30D: +7.36% (${Number(23200).toLocaleString()})
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`space-y-2`}>
				<h2 className={`text-[22px] font-bold`}>Trending</h2>
				<div className="grid auto-rows-min gap-4 md:grid-cols-3">
					<div className="h-40 rounded-xl bg-muted/50 p-6">
						<p className={`text-[18px]`}>Cookstove Credits</p>
						<p className={`text-[50px] font-bold`}>
							+{Number(435).toLocaleString()}
						</p>
					</div>
					<div className="h-40 rounded-xl bg-muted/50 p-6">
						<p className={`text-[18px]`}>Waste Collected</p>
						<p className={`text-[50px] font-bold`}>
							+{Number(12434).toLocaleString()}{" "}
							<span className={`font-normal text-[16px]`}>kg</span>
						</p>
					</div>
					<div className="h-40 rounded-xl bg-muted/50 p-6">
						<p className={`text-[18px]`}>Electricity Generated</p>
						<p className={`text-[50px] font-bold`}>
							+{Number(9547).toLocaleString()}{" "}
							<span className={`font-normal text-[16px]`}>MWh</span>
						</p>
					</div>
				</div>
			</div>
			<div className="h-fit w-full min-h-[100vh] flex flex-col flex-1 md:min-h-min space-y-2">
				<h2 className="text-[22px] font-bold">Activity</h2>
				<div className="flex-1 rounded-xl bg-muted/50 p-6" />
			</div>
		</div>
	);
}
