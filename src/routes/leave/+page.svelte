<script>
// @ts-nocheck

	import AvailableLeave from '../../components/AvailableLeave.svelte';
	import LeaveDetailsTable from '../../components/LeaveDetailsTable.svelte';
	import ManageTimeHeader from '../../components/ManageTimeHeader.svelte';
	import SideBar from '../../components/SideBar.svelte';
</script>

<div class="flex flex-col md:flex-row w-screen h-screen">
	<div class="w-72 bg-slate-700 hidden sm:block">
		<SideBar />
	</div>
	<div class="w-full h-full flex flex-col bg-neutral-100">
		<ManageTimeHeader />
		<div class="flex flex-row gap-7 px-12 py-4">
			<AvailableLeave title="Casual Leave" available="9" total="12" color="border-blue-500" />
			<AvailableLeave title="Sick Leave" available="5" total="10" color="border-red-500" />
			<AvailableLeave title="Work From Home" available="2" total="5" color="border-yellow-500" />
			<AvailableLeave title="Vacation" available="7" total="14" color="border-green-500" />
		</div>
		<LeaveDetailsTable />
	</div>
</div>
