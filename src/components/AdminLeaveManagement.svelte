<script>
	let leaveData = [
		{
      id: '7723e1893',
			leaveType: 'Casual Leave',
			duration: '13 Apr 2020 - 16 Apr 2020',
			count: 3,
			reason: 'Not feeling well',
			status: 'Pending' // Admin needs to approve this leave
		},
		{
      id: '7371983298',
			leaveType: 'Sick Leave',
			duration: '13 May 2020 - 17 May 2020',
			count: 4,
			reason: 'Fever',
			status: 'Pending' // Admin needs to approve this leave
		}
		// Add more data as needed
	];

	async function handleAction(leaveId, action) {
		const verifyOtpResponse = await manageLeave(email, otp);
		if (verifyOtpResponse?.verifyOtp) {
			const token = verifyOtpResponse.verifyOtp.token;
			Cookies.set('portal-token', token);

			const allWorkspaces = await getAllWorkSpaces();
			let workspaceName = allWorkspaces.getAllWorkspaces.workspace[0].uniqueName;

			goto(`${workspaceName}/dashboard`);
		}
		closeModal();
	}
</script>

<!-- Admin Leave Approval -->
<div class="flex-grow p-6 bg-white mx-4">
	<h2 class="text-2xl font-semibold mb-4">Leave Management</h2>
	<table class="w-full border-collapse">
		<!-- Table header -->
		<thead>
			<tr>
				<th class="px-4 py-2 text-left border-b border-gray-300 text-gray-500 font-semibold"
					>Leave Type</th
				>
				<th class="px-4 py-2 text-left border-b border-gray-300 text-gray-500 font-semibold"
					>Duration</th
				>
				<th class="px-4 py-2 text-left border-b border-gray-300 text-gray-500 font-semibold"
					>Count</th
				>
				<th class="px-4 py-2 text-left border-b border-gray-300 text-gray-500 font-semibold"
					>Reason</th
				>
				<th class="px-4 py-2 text-left border-b border-gray-300 text-gray-500 font-semibold"
					>Action</th
				>
			</tr>
		</thead>
		<!-- Table body -->
		<tbody>
			{#each leaveData as leave}
				<tr>
					<td class="px-4 py-2 border-b border-gray-300 text-lg font-semibold">{leave.leaveType}</td
					>
					<td class="px-4 py-2 border-b border-gray-300 font-normal">{leave.duration}</td>
					<td class="px-4 py-2 border-b border-gray-300 font-normal">{leave.count}</td>
					<td class="px-4 py-2 border-b border-gray-300 font-normal">{leave.reason}</td>
					<td class="px-4 py-2 border-b border-gray-300">
						<button
							class="bg-green-500 text-white px-4 py-2 rounded"
							on:click={() => handleAction(leave.id, 'approve')}>Approve</button
						>
						<button
							class="bg-red-500 text-white px-4 py-2 rounded ml-2"
							on:click={() => handleAction(leave.id, 'reject')}>Reject</button
						>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
