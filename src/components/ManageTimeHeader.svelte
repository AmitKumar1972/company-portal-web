<!-- <script>
</script>
<div class="flex items-center justify-between px-4 py-2 bg-white">
    <h1 class="text-base font-bold">Manage Time Off</h1>
    <div class="text-base text-gray-600">
        <span class="font-bold text-xl text-blue-600"> &lt;&nbsp;</span> <span class="text-base font-semibold">1 Jan 2020 - 31 Dec 2020</span> <span class="font-bold text-xl text-blue-500">&nbsp;&gt;</span>
    </div>
    <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded text-base on:click={handleQuickLeave}">
        + Quick Leave
    </button>
</div> -->

<!-- ManageTimeHeader.svelte -->
<script>
// @ts-nocheck

	import LeaveApplication from "./LeaveApplication.svelte";
  export let workspaceId;

    let isModalOpen = false;
  
    function openModal() {
      isModalOpen = true;
    }
  
    function closeModal() {
      isModalOpen = false;
    }
  </script>
  
  <div class="flex items-center justify-between px-4 py-2 bg-white">
    <h1 class="text-base font-bold">Manage Time Off</h1>
    <div class="text-base text-gray-600">
      <span class="font-bold text-xl text-blue-600"> &lt;&nbsp;</span> <span class="text-base font-semibold">1 Jan 2020 - 31 Dec 2020</span> <span class="font-bold text-xl text-blue-500">&nbsp;&gt;</span>
    </div>
    <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded text-base" on:click={openModal}>
      + Quick Leave
    </button>
  
    <!-- Modal Trigger -->
    {#if isModalOpen}
    <div class="fixed inset-0 flex justify-center items-center z-50 bg-gray-800 bg-opacity-50">
      <div class="bg-white p-8 rounded-lg w-80">
        <LeaveApplication {workspaceId} onClose={closeModal} /> <!-- Pass the closeModal function to the LeaveApplication component -->
      </div>
    </div>
    {/if}
  </div>
  