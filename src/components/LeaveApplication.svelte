<!-- LeaveApplication.svelte -->
<script>
// @ts-nocheck

	import { LeaveType } from "$lib";
	import { leaveRequest } from "$lib/api";

	// @ts-nocheck

	export let onClose;
	export let workspaceId;
	// Receive the onClose function as a prop

	function handleClose() {
		onClose();
	}

	let leaveType = '';
	let leaveTypeSelect = '';
	let startDate = '';
	let endDate = '';
	let reason = '';

	function handleLeaveType(event) {
		leaveTypeSelect = event.target.value;

		console.log(leaveTypeSelect);

		if (leaveTypeSelect === 'Paid Leave') {
			console.log('aaya1');
			leaveType = LeaveType.PAID;
		} else if (leaveTypeSelect === 'Sick Leave') {
			console.log('aaya2');
			leaveType = LeaveType.SICK;
		} else if (leaveTypeSelect === 'Work From Home') {
			console.log('aaya3');
			leaveType = LeaveType.WORK_FROM_HOME;
		} else if (leaveTypeSelect === 'Unpaid Leave') {
			console.log('aaya4');
			leaveType = LeaveType.UNPAID
		} else {
			console.log('aaya5')
			leaveType = LeaveType.CASUAL;
		}
	}

	function handleStartDate(event) {
		startDate = event.target.value;
		endDate = '';
	}

	function handleEndDate(event) {
		endDate = event.target.value;
	}

	function handleReason(event) {
		reason = event.target.value;
	}

	async function handleSubmit() {
		const startDateObj = new Date(startDate);
		const endDateObj = new Date(endDate);
		const timeDifference = endDateObj.getTime() - startDateObj.getTime();
		const numberOfDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
		try {
			const leaveRequestResponse = await leaveRequest(workspaceId, numberOfDays, startDate, reason, leaveType);

			if (leaveRequestResponse?.leaveRequest) {
				alert('Leave taking done wait for admin to approve');
			}

			onClose();
		} catch (error) {
			throw new Error('Error while taking Leave. Please try again later.');
		}
	}
</script>

<h2 class="text-xl font-semibold mb-4 text-center">Apply Leave</h2>
<form>
	<div class="mb-4">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="leaveType"> Leave Type </label>
		<select
			class="w-full border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
			id="leaveType"
			bind:value={leaveTypeSelect}
			on:change={handleLeaveType}
		>
			<option value="Casual Leave">Casual Leave</option>
			<option value="Unpaid Leave">Unpaid Leave</option>
			<option value="Paid Leave">Paid Leave</option>
			<option value="Sick Leave">Sick Leave</option>
			<option value="Work From Home">Work From Home</option>
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
			min={startDate}
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
