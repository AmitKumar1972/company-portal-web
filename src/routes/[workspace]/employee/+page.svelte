<script>
	// @ts-nocheck

	import EmployeeCard from '../../../components/EmployeeCard.svelte';
	import SideBar from '../../../components/SideBar.svelte';
	import AddEmployeeModal from '../../../modals/AddEmployeeModal.svelte';
	export let data;

	let isModalOpen = false;
	let newEmployeeEmail = null;

	function openModal() {
		isModalOpen = true;
	}

	function closeModal(email) {
		isModalOpen = false;
		newEmployeeEmail = email;
	}

	function handleAddEmployee() {
		openModal();
	}
</script>

<div class="flex flex-row w-screen h-screen">
	<div class="w-72 bg-slate-700 hidden sm:block">
		<SideBar
			getAllWorkSpacesResponse={data.allWorkspaces.getAllWorkspaces}
			workspaceDetails={data.workspaceDetails.getWorkspaceDetailsByUniqueName}
		/>
	</div>
	<div class="w-full h-full flex flex-col bg-neutral-100">
		<div class="w-full h-full flex flex-col items-start justify-start">
			<div class="w-full h-auto flex flex-row items-start mt-7">
				<div class="font-semibold text-2xl ml-5">32 Employee</div>
				<button
					class="ml-auto mr-5 bg-blue-500 hover:bg-blue-600 text-white font-sans px-2 py-1 rounded focus:outline-none focus:shadow-outline"
					on:click={handleAddEmployee}>+New Candidate</button
				>
			</div>
			<div class="flex flex-wrap ml-5 mt-10">
				{#each data.getAllUsers.user as user}
					<EmployeeCard userData = {user}/>
				{/each}

				<AddEmployeeModal
					isOpen={isModalOpen}
					{closeModal}
					workspaceId={data.workspaceDetails.getWorkspaceDetailsByUniqueName.id}
				/>
			</div>
		</div>
	</div>
</div>
