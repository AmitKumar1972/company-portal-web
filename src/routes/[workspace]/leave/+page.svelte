<script>
	// @ts-nocheck

	import AdminLeaveManagement from '../../../components/AdminLeaveManagement.svelte';
	import AvailableLeave from '../../../components/AvailableLeave.svelte';
	import LeaveDetailsTable from '../../../components/LeaveDetailsTable.svelte';
	import ManageTimeHeader from '../../../components/ManageTimeHeader.svelte';
	import SideBar from '../../../components/SideBar.svelte';
	export let data;
</script>

<div class="flex flex-col md:flex-row w-screen h-screen">
	<div class="w-72 bg-slate-700 hidden sm:block">
		<SideBar
			getAllWorkSpacesResponse={data.allWorkspaces.getAllWorkspaces}
			workspaceDetails={data.workspaceDetails.getWorkspaceDetailsByUniqueName}
		/>
	</div>
	<div class="w-full h-full flex flex-col bg-neutral-100">
		{#if data.currentUserRole.getUserRoleWorkspace == 'OWNER'}
			<AdminLeaveManagement workspaceId={data.workspaceDetails.getWorkspaceDetailsByUniqueName.id}/>
		{:else}
			<div class="w-full h-full flex flex-col bg-neutral-100">
				<ManageTimeHeader workspaceId={data.workspaceDetails.getWorkspaceDetailsByUniqueName.id} />
				<div class="flex flex-row gap-7 px-12 py-4">
					<AvailableLeave title="Casual Leave" available="9" total="12" color="border-blue-500" />
					<AvailableLeave title="Sick Leave" available="5" total="10" color="border-red-500" />
					<AvailableLeave
						title="Work From Home"
						available="2"
						total="5"
						color="border-yellow-500"
					/>
					<AvailableLeave title="Vacation" available="7" total="14" color="border-green-500" />
				</div>
				<LeaveDetailsTable />
			</div>
		{/if}
	</div>
</div>
