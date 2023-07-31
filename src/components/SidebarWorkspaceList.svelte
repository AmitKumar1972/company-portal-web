<script>
	// @ts-nocheck
  
	import CreateWorkspace from '../modals/CreateWorkspace.svelte';
  
	export let getAllWorkSpacesResponse;
	let isCreateWorkspaceOpen = false;
  </script>
  
  <div class="flex-1 flex flex-col items-center border-r border-white pt-5 px-0.5">
	{#each getAllWorkSpacesResponse.workspace as workspace}
	  <button
		class="hover:ring-slate-400 rounded-full"
		title={workspace.workspaceName}
	  >
		<svg
		  xmlns="http://www.w3.org/2000/svg"
		  fill="none"
		  stroke="currentColor"
		  stroke-linecap="round"
		  stroke-linejoin="round"
		  stroke-width="2"
		  class="w-12 h-12 text-white p-2 bg-blue-800 rounded-full"
		  viewBox="0 0 24 24"
		>
		  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
		</svg>
	  </button>
	{/each}
  
	<button
	  class="hidden md:block text-white text-4xl text-center"
	  on:click={() => (isCreateWorkspaceOpen = true)}
	>
	  +
	</button>
  </div>
  
  {#if isCreateWorkspaceOpen}
	<CreateWorkspace
	  closeModal={() => {
		isCreateWorkspaceOpen = false;
	  }}
	/>
  {/if}
  