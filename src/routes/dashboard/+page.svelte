<script>
	import { Card } from 'flowbite-svelte';
	import EmployeeTable from '../../components/EmployeeTable.svelte';
	import SideBar from '../../components/SideBar.svelte';
	import RecentAttendes from '../../components/RecentAttendes.svelte';
	import Annoucement from '../../components/Annoucement.svelte';
</script>

<div class="flex flex-col md:flex-row w-screen h-screen">
	<SideBar />
	<div class="w-full h-full flex flex-col bg-neutral-100">
		<div class="flex flex-row items-center w-full h-[70px] border-b-2 overflow-hidden bg-slate-100">
			<div class="w-[60%] flex justify-end items-center">
				<input
					class="border-2 placeholder:text-lg rounded-xl ring-1 my-2 py-2 px-8 mr-2 outline-sky-500"
					placeholder="Search Employee"
					type="text"
				/>
				<svg
					class="w-8 h-8 fill-slate-400 hidden md:block"
					focusable="false"
					aria-hidden="true"
					viewBox="0 0 24 24"
					data-testid="SearchIcon"
					><path
						d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
					/></svg
				>
			</div>
			<div class="w-[40%] flex justify-end mr-5">
				<button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"> Logout </button>
			</div>
		</div>
		<div class="w-full h-full flex flex-row">
			<div class="w-[70%] h-full flex flex-col">
				<div class="font-semibold text-4xl ml-5 mt-5">Welcome Admin</div>
				<div class="w-full h-[25%] flex flex-col md:flex-row md:items-center">
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
					<div class="w-[33%] flex flex-col border-r-4">
						<RecentAttendes />
					</div>
					<div class="flex flex-col">
						<Annoucement />
					</div>
				</div>
			</div>
			<div class="w-[30%] border-l-2 hidden md:block">
				<EmployeeTable />
			</div>
		</div>
	</div>
</div>
