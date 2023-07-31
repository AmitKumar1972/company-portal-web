<script>
	// @ts-nocheck

	export let isOpen;
	export let closeModal;

	let employeeEmail = '';

	async function handleSubmit() {
		if (!isValidEmail(employeeEmail)) {
			alert('Invalid email format!');
			return;
		}

		try {
			const response = await addEmployee();
			closeModal(response.data.addEmployee);
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
	<div class="fixed inset-0 flex items-center justify-center">
		<div class="bg-white p-8 shadow-lg rounded w-96">
			<h2 class="text-2xl font-semibold mb-4">Add Employee</h2>
			<input
				type="email"
				class="border border-gray-400 rounded w-full px-4 py-2 mb-4"
				placeholder="Employee Email"
				bind:value={employeeEmail}
			/>
			<div class="flex justify-end">
				<button
					class="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600"
					on:click={handleSubmit}
				>
					Add
				</button>
				<button
					class="px-4 py-2 text-gray-600 border border-gray-400 rounded hover:bg-gray-100"
					on:click={handleCancel}
				>
					Cancel
				</button>
			</div>
		</div>
	</div>
{/if}
