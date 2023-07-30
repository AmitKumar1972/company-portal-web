<!-- MemberOnLeave.svelte -->
<script>
    // @ts-nocheck
  
    export let user;
  
    // Dummy data for the number of days the user is on leave
    let leaveDays = 2;
  
    // Dummy data for the start and end dates of leave
    let startDate = '2020-04-24';
    let endDate = '2020-04-27';
  
    // Function to format the dates as "DD MMM YYYY" (e.g., 24 Apr 2020)
    function formatDate(date) {
      const options = { day: 'numeric', month: 'short', year: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    }
  
    // Format the start and end dates
    let formattedDates = `${formatDate(startDate)} - ${formatDate(endDate)}`;
  </script>
  
  <div class="flex items-center mb-2">
    <div class="flex items-center gap-2 pe-20">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src="https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Profile Image"
        class="w-10 h-10 rounded-full"
      />
      <div class="flex flex-col">
        <p class="text-base font-medium text-gray-800">{user.employeeName}</p>
        <p class="text-sm font-medium text-gray-500">{formattedDates}</p>
      </div>
    </div>
    <div class="text-right text-sm font-medium text-gray-500 px-2 py-2 w-20">
      {leaveDays} days
    </div>
  </div>
  