<!-- <script>
	import EmployeeTable from '../../components/EmployeeTable.svelte';
	import SideBar from '../../components/SideBar.svelte';
	import RecentAttendes from '../../components/RecentAttendes.svelte';
	import Annoucement from '../../components/Annoucement.svelte';
	import Header from '../../components/Header.svelte';
</script>

<div class="flex flex-col md:flex-row w-screen h-screen">
	<SideBar />
	<div class="w-full h-full flex flex-col bg-neutral-100">
		<Header />
		<div class="w-full h-full flex flex-row">
			<div class="w-[90%] h-full flex flex-col">
				<div class="w-[90%] font-semibold text-4xl px-4 mt-5">Welcome Admin</div>
				<div class="w-[90%] h-[25%] flex flex-col md:flex-row md:items-center">
					<div
						class="flex flex-col justify-center items-center w-56 h-[50%] bg-gray-600 ml-5 mb-5 md:mb-0 md:mr-5 rounded-lg overflow-hidden"
					>
						<p class="text-5xl md:text-3xl text-white">40</p>
						<p class="text-white text-xl md:text-lg font-sans">Total Employees</p>
					</div>
					<div
						class="w-56 h-[50%] flex flex-col justify-center items-center bg-green-700 ml-5 mb-5 md:mb-0 md:ml-10 rounded-lg overflow-hidden"
					>
						<p class="text-5xl md:text-3xl text-white">30</p>
						<p class="text-white text-xl md:text-lg font-sans">On Time</p>
					</div>
					<div
						class="w-56 h-[50%] flex flex-col justify-center items-center bg-red-500 ml-5 mb-5 md:mb-0 md:ml-10 rounded-lg overflow-hidden"
					>
						<p class="text-5xl md:text-3xl text-white">7</p>
						<p class="text-white text-xl md:text-lg font-sans">Late</p>
					</div>
					<div
						class="w-56 h-[50%] flex flex-col justify-center items-center bg-yellow-500 ml-5 md:ml-10 rounded-lg overflow-hidden"
					>
						<p class="text-5xl md:text-3xl text-white">04</p>
						<p class="text-white text-xl md:text-lg font-sans">Absent</p>
					</div>
				</div>
				<div class="w-full h-[70%] flex flex-row">
					<RecentAttendes />
					<Annoucement />
				</div>
			</div>
				<EmployeeTable />
		</div>
	</div>
</div> -->

<script>
	// @ts-nocheck

	import EmployeeTable from '../../../components/EmployeeTable.svelte';
	import SideBar from '../../../components/SideBar.svelte';
	import RecentAttendes from '../../../components/RecentAttendes.svelte';
	import Annoucement from '../../../components/Annoucement.svelte';
	import Header from '../../../components/Header.svelte';
	import DailyEmployeeStats from '../../../components/DailyEmployeeStats.svelte';

	export let data;
</script>

<div class="w-full min-h-screen flex mx-auto bg-secondary-fill">
	<div class="w-72 bg-slate-700 hidden sm:block">
		<SideBar getAllWorkSpacesResponse={data.allWorkspaces.getAllWorkspaces} />
	</div>
	<div class="w-full flex flex-col">
		<Header />
		<div class="flex pl-5 mx-auto justify-around w-full pb-5">
			<div class="flex flex-col gap-5 mt-7 mx-auto pr-5">
				<div class="text-2xl font-semibold">Welcome Admin</div>
				<div class="flex justify-between">
					<div class="flex flex-col gap-5">
						<DailyEmployeeStats />
						<div class="flex gap-4 flex-col sm:flex-row">
							<div><RecentAttendes /></div>
							<div><Annoucement /></div>
						</div>
					</div>
				</div>
			</div>
			<div class="hidden xl:block border-l"><EmployeeTable /></div>
		</div>
	</div>
</div>
