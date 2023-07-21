<script>
// @ts-nocheck

    let onSubmit;
  
    let formData = {
      name: '',
      type: '',
      startDate: '',
      endDate: '',
      reason: ''
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(formData);
    };
  </script>

  <form class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
    <h2 class="text-2xl font-bold mb-4">Apply for Leave</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="name">
          Name
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John Doe" bind:value={formData.name}>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="type">
          Leave Type
        </label>
        <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="type" bind:value={formData.type}>
          <option value="">Select a leave type</option>
          <option value="sick">Sick leave</option>
          <option value="vacation">Vacation leave</option>
          <option value="personal">Personal leave</option>
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="startDate">
          Start Date
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="startDate" type="date" bind:value={formData.startDate}>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="endDate">
          End Date
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="endDate" type="date" bind:value={formData.endDate}>
      </div>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="reason">
        Reason
      </label>
      <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="reason" bind:value={formData.reason}></textarea>
    </div>
    <div class="flex justify-end">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" on:click={handleSubmit}>
        Apply
      </button>
    </div>
  </form>
