<script>
	// @ts-nocheck
	import { createWorkspace } from '$lib/api';

	export let closeModal;
	let workspaceName = '';
	let uniqueName = '';

	// Function to handle the create workspace action
	async function workspaceCreation() {
		// Make an API call to create the workspace
		try {
			const createWorkspaceResponse = await createWorkspace(workspaceName, uniqueName);

			if (createWorkspaceResponse) {
				console.log('created Successfully');
			} else {
				console.log('error');
			}
		} catch (error) {
			console.log(error);
		}

		closeModal();
		workspaceName = '';
		uniqueName = '';
	}
</script>

<div class="fixed inset-0 flex items-center justify-center z-50">
	<div class="absolute inset-0 bg-gray-900 opacity-50" />
	<div class="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50">
		<div class="p-4">
			<!-- Modal Header -->
			<h2 class="text-2xl font-semibold mb-4">Create Workspace</h2>
			<!-- Workspace Name Input -->
			<div class="mb-4">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="block text-gray-800 font-semibold mb-1">Workspace Name</label>
				<input
					type="text"
					class="block w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-slate-500"
					bind:value={workspaceName}
					placeholder="Enter workspace name"
				/>
			</div>
			<!-- Unique Name Input -->
			<div class="mb-4">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="block text-gray-800 font-semibold mb-1">Unique Name</label>
				<input
					type="text"
					class="block w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-slate-500"
					bind:value={uniqueName}
					placeholder="Enter unique name"
				/>
			</div>
			<!-- Logo Upload Input -->
			<!-- <div class="mb-4">
				<label class="block text-gray-800 font-semibold mb-1">Logo</label>
				<input
					type="file"
					class="block w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-slate-500"
					on:change={(e) => (logoFile = e.target.files[0])}
				/>
			</div> -->
		</div>
		<!-- Modal Footer with Create and Cancel buttons -->
		<div class="flex justify-end p-4">
			<button class="px-4 py-2 bg-blue-500 text-white rounded mr-2" on:click={workspaceCreation}>
				Create
			</button>
			<button class="px-4 py-2 bg-gray-300 text-gray-700 rounded" on:click={closeModal()}>
				Cancel
			</button>
		</div>
	</div>
</div>
