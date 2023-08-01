<!-- LeaveApplication.svelte -->
<script>
	// @ts-nocheck

	export let onClose;
	export let workspaceId;
	 // Receive the onClose function as a prop

	function handleClose() {
		onClose();
	}

	let leaveType = '';
	let startDate = '';
	let endDate = '';
	let reason = '';

	function handleLeaveType(event) {
		leaveType = event.target.value;
	}

	function handleStartDate(event) {
		startDate = event.target.value;
	}

	function handleEndDate(event) {
		endDate = event.target.value;
	}

	function handleReason(event) {
		reason = event.target.value;
	}

	function handleSubmit() {
		// You can now use the leaveType, startDate, endDate, and reason to submit the leave application
		// After submitting the leave application, you can close the modal
		closeModal();
	}
</script>

<h2 class="text-xl font-semibold mb-4 text-center">Apply Leave</h2>
<form>
	<div class="mb-4">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="leaveType"> Leave Type </label>
		<select
			class="w-full border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
			id="leaveType"
			bind:value={leaveType}
			on:change={handleLeaveType}
		>
			<option value="Casual Leave">Casual Leave</option>
			<option value="Sick Leave">Sick Leave</option>
			<option value="Work From Home">Work From Home</option>
			<option value="Vacation">Vacation</option>
		</select>
	</div>
	<div class="mb-4">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="startDate"> Start Date </label>
		<input
			class="w-full border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
			type="date"
			id="startDate"
			bind:value={startDate}
			on:input={handleStartDate}
		/>
	</div>
	<div class="mb-4">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="endDate"> End Date </label>
		<input
			class="w-full border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
			type="date"
			id="endDate"
			bind:value={endDate}
			on:input={handleEndDate}
		/>
	</div>
	<div class="mb-4">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="reason"> Reason </label>
		<textarea
			class="w-full border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
			id="reason"
			rows="3"
			bind:value={reason}
			on:input={handleReason}
		/>
	</div>
</form>
<div class="flex justify-center mt-4">
	<button
		class="bg-gray-300 text-gray-500 font-semibold rounded-3xl px-3 py-1 text-sm"
		on:click={handleClose}
	>
		Close
	</button>
	<button
		class="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-3xl px-3 py-1 ml-4 text-sm"
		on:click={handleSubmit}
	>
		Submit
	</button>
</div>
