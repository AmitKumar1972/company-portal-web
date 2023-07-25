<!-- LeaveHistory.svelte -->
<script>
    // @ts-nocheck
  
    // Sample leave history data (replace with actual data)
    let leaveHistory = [
      { date: '3 Dec - 5 Dec', status: 'Approved', type: 'Sick' },
      { date: '1 Jan - 7 Jan', status: 'Rejected', type: 'Personal' },
      { date: '3 May - 10 May', status: 'Pending', type: 'Vacation' },
      { date: '2 Apr - 5 Apr', status: 'Approved', type: 'Sick' },
      { date: '2 Apr - 5 Apr', status: 'Approved', type: 'Sick' }
    ];
  
    // Function to return the appropriate status color
    function getStatusColor(status) {
      if (status === 'Approved') {
        return 'text-green-500';
      } else if (status === 'Rejected') {
        return 'text-red-500';
      } else {
        return 'text-orange-500';
      }
    }

    // Function to return the appropriate background color for leave type
    function getBackgroundColor(type) {
      if (type === 'Sick') {
        return 'bg-blue-500';
      } else if (type === 'Personal') {
        return 'bg-red-500';
      } else {
        return 'bg-orange-500';
      }
    }
  </script>
  
  <div class="mx-auto bg-white rounded-lg drop-shadow-xl p-4 ml-10 mt-10">
    <h3 class="text-3xl font-semibold mb-4">Leave History</h3>
    <ul>
      {#each leaveHistory as leave, index}
        <li class="text-gray-600 mb-4 flex items-center">
          <span class="{getBackgroundColor(leave.type)} inline-block w-4 h-4 mr-2 rounded-full bg-blue-500"></span>
          <span class="w-40 font-semibold text-lg">{leave.type}</span>
          <span class="w-36 text-start font-semibold text-lg">{leave.date}</span>
          <span class="{getStatusColor(leave.status)} w-24 text-right font-semibold text-lg">{leave.status}</span>
          <span class="text-gray-400 mx-1 text-2xl">&gt;</span>
        </li>
        {#if index !== leaveHistory.length - 1}
          <hr class="border-t border-gray-300 my-2">
        {/if}
      {/each}
    </ul>
  </div>
  
  <style>
    /* Add extra styling here if needed */
  </style>
  