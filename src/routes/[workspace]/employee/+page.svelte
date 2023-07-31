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
		<SideBar getAllWorkSpacesResponse={data.allWorkspaces.getAllWorkspaces} />
	</div>
	<div class="w-full h-full flex flex-col bg-neutral-100">
		<div class="w-full h-full flex flex-col items-start justify-start">
			<div class="w-full h-auto flex flex-row items-start mt-7">
				<div class="font-semibold text-2xl ml-5">32 Employee</div>
				<button
					class="ml-auto mr-5 bg-slate-400 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded focus:outline-none focus:shadow-outline"
					on:click={handleAddEmployee}>+New Candidate</button
				>
			</div>
			<div class="ml-5 mt-10">
				<EmployeeCard />
				<AddEmployeeModal isOpen={isModalOpen} {closeModal} />
			</div>
		</div>
	</div>
</div>
