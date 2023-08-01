<script>
// @ts-nocheck

	import { roleTypes } from '$lib';

	// @ts-nocheck

	import { addEmployee } from '$lib/api';
    let role = '';

    let mappedRole;
    switch (role) {
      case 'CONTRACT':
        mappedRole = roleTypes.CONTRACT;
        break;
      case 'ADMIN':
        mappedRole = roleTypes.ADMIN;
        break;
      case 'EMPLOYEE':
        mappedRole = roleTypes.EMPLOYEE;
        break;
      case 'INTERN':
        mappedRole = roleTypes.INTERN;
        break;
      default:
        mappedRole = null;
    }

	// @ts-nocheck

	export let isOpen;
	export let closeModal;
	export let workspaceId;

	let employeeEmail = '';
	let name = '';
	
	let roleOptions = ['CONTRACT', 'ADMIN', 'EMPLOYEE', 'INTERN'];

	async function handleSubmit() {

		try {
			const response = await addEmployee(name, employeeEmail, String(workspaceId), role);
			closeModal()
		} catch (error) {
			// Handle any errors that occur during the API call
			console.error('Error adding employee:', error.message);
		}
	}

	function handleCancel() {
		closeModal(null); // Pass null to indicate that the modal was canceled
	}

	function isValidEmail(email) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}
</script>

{#if isOpen}
	<div class="fixed inset-0 flex items-center justify-center z-50">
		<div class="absolute inset-0 bg-gray-900 opacity-60" />
		<div class="p-8 bg-white drop-shadow-xl w-4/12">
			<h2 class="text-3xl font-bold mb-6">Add Employee</h2>
			<div class="mb-6">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="block mb-1 font-semibold text-gray-600">Name</label>
				<input
					type="text"
					class="block w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-blue-200"
					placeholder="Enter Name"
					bind:value={name}
				/>
			</div>
			<div class="mb-6">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="block mb-1 font-semibold text-gray-600">Employee Email</label>
				<input
					type="email"
					class="block w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-blue-200"
					placeholder="Enter Employee Email"
					bind:value={employeeEmail}
				/>
			</div>
			<div class="mb-6">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="block mb-1 font-semibold text-gray-600">Role</label>
				<select
					class="block w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-blue-200"
					bind:value={role}
				>
					{#each roleOptions as option}
						<option value={option}>{option}</option>
					{/each}
				</select>
			</div>
			<div class="flex justify-end">
				<button
					class="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600"
					on:click={handleSubmit}
				>
					Add
				</button>
				<button
					class="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-100"
					on:click={handleCancel}
				>
					Cancel
				</button>
			</div>
		</div>
	</div>
{/if}
