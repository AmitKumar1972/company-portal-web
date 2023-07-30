<script>
    let leaveData = [
    {
      leaveType: 'Casual Leave',
      duration: '13 Apr 2020 - 16 Apr 2020',
      count: 3,
      reason: 'Not feeling well',
      status: 'Approved'
    },
    {
      leaveType: 'Sick Leave',
      duration: '13 May 2020 - 17 May 2020',
      count: 4,
      reason: 'Fever',
      status: 'Pending'
    },
    // Add more data as needed
  ];
</script>

<div class="flex-grow p-6 bg-white mx-4">
	<h2 class="text-2xl font-semibold mb-4">Leave Details</h2>
	<table class="w-full border-collapse">
		<thead>
			<tr>
				<th class="px-4 py-2 text-left border-b border-gray-300 text-gray-500 font-semibold">Leave Type</th>
				<th class="px-4 py-2 text-left border-b border-gray-300 text-gray-500 font-semibold">Duration</th>
				<th class="px-4 py-2 text-left border-b border-gray-300 text-gray-500 font-semibold">Count</th>
				<th class="px-4 py-2 text-left border-b border-gray-300 text-gray-500 font-semibold">Reason</th>
				<th class="px-4 py-2 text-left border-b border-gray-300 text-gray-500 font-semibold">Status</th>
			</tr>
		</thead>
		<tbody>
			{#each leaveData as leave}
				<tr>
					<td class="px-4 py-2 border-b border-gray-300 text-lg font-semibold">{leave.leaveType}</td>
					<td class="px-4 py-2 border-b border-gray-300 font-normal">{leave.duration}</td>
					<td class="px-4 py-2 border-b border-gray-300 font-normal">{leave.count}</td>
					<td class="px-4 py-2 border-b border-gray-300 font-normal">{leave.reason}</td>
					<td class="px-4 py-2 border-b border-gray-300 text-green-400 font-semibold">{leave.status}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
