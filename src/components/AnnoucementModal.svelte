<script>
// @ts-nocheck

    export let selectedAnnouncement;
    export let closeModal;
  </script>
  
  <div class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div class="bg-white p-8 rounded-md shadow-lg max-w-xl w-full">
      <h2 class="text-xl font-semibold mb-4">{selectedAnnouncement.title}</h2>
      <p class="text-gray-600">{selectedAnnouncement.description}</p>
      <button class="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" on:click={closeModal}>Close</button>
    </div>
  </div>
  