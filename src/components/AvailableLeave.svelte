<!-- AvailableLeave.svelte -->
<script>
// @ts-nocheck

    export let title;
    export let available;
    export let total;
    export let color;
  </script>
  
  <div class="w-56 bg-white rounded-lg p-2 border-t-4 {color} drop-shadow-lg">
    <h2 class="text-xl font-bold mb-4 text-center">{title}</h2>
    <div class="flex justify-center mt-2">
      <div class="w-24 h-24 flex flex-col justify-center items-center border-4 border-gray-500 rounded-full">
        <span class="text-base font-semibold text-gray-600">Available</span>
        <span><span class="text-2xl font-bold">{available}</span><span>/{total}</span></span>
      </div>
    </div>
    <div class="flex justify-center mt-4">
      <button class="bg-gray-300 text-gray-500 font-semibold rounded-3xl px-3 py-1 text-sm">
        +Apply
      </button>
    </div>
  </div>
  