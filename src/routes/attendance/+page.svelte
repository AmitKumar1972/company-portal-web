<script>
	// @ts-nocheck

	import SideBar from '../../components/SideBar.svelte';
	import AllEmployeeAttendance from '../../components/AllEmployeeAttendance.svelte';
	import MemberOnLeave from '../../components/MemberOnLeave.svelte';

	// Dummy data for individual employee attendance
	let individualAttendance = {
		employeeName: 'John Doe',
		checkIn: '09:00 AM',
		checkOut: '05:00 PM'
	};

	// Dummy data for everyone's today attendance
	let everyoneTodayAttendance = [
		{ employeeName: 'John Doe', checkIn: '09:00 AM', checkOut: '05:00 PM' },
		{ employeeName: 'Jane Smith', checkIn: '08:30 AM', checkOut: '06:00 PM' },
		{ employeeName: 'Alex Johnson', checkIn: '09:30 AM', checkOut: '05:30 PM' }
	];

	let absentUsers = [
		{ employeeName: 'Mark Will' },
		{ employeeName: 'Emily Brown' }
		// Add more dummy data here...
	];

	// Dummy user list for the select menu
	let userList = [
		{ id: 'all', name: 'All Users' },
		{ id: '1', name: 'John Doe' },
		{ id: '2', name: 'Jane Smith' },
		{ id: '3', name: 'Alex Johnson' }
	];

	// Selected user and default to 'all'
	let selectedUser = 'all';

	// Selected date and default to today's date
	let selectedDate = new Date().toISOString().slice(0, 10);

	// Function to handle user select change
	function handleUserSelect(event) {
		selectedUser = event.target.value;
	}

	// Function to handle date change
	function handleDateChange(event) {
		selectedDate = event.target.value;
	}

	// Get today's date as YYYY-MM-DD format
	const todayDate = new Date().toISOString().slice(0, 10);

	// Helper function to check if the selected user is 'All Users'
	function isAllUsersSelected() {
		return selectedUser === 'all';
	}
</script>

<div class="flex flex-col md:flex-row w-screen h-screen">
	<div class="w-72 bg-slate-700 hidden sm:block">
		<SideBar />
	</div>

	<div class="w-full h-full flex flex-col bg-neutral-100">
		<main class="flex-grow px-4 py-8">
			<div class="flex items-center mb-4">
				<label for="userSelect" class="mr-2">Select User:</label>
				<select
					id="userSelect"
					class="border border-gray-300 rounded px-4 py-2 w-48"
					on:change={handleUserSelect}
				>
					{#each userList as user}
						<option value={user.id}>{user.name}</option>
					{/each}
				</select>
				<label for="datePicker" class="ml-4 mr-2">Select Date:</label>
				<input
					type="date"
					id="datePicker"
					class="border border-gray-300 rounded px-4 py-2 w-48"
					bind:value={selectedDate}
					on:change={handleDateChange}
					max={todayDate}
				/>
			</div>
			<div class="flex flex-row gap-4">
				<div class="w-9/12">
					{#if isAllUsersSelected()}
						<AllEmployeeAttendance />
					{:else}
						<div class="mb-6">
							<h2 class="text-xl font-semibold mb-2">Individual Employee Attendance</h2>
							<div class="bg-white rounded-lg p-4">
								<p class="text-lg font-semibold mb-2">{individualAttendance.employeeName}</p>
								<p class="text-base text-gray-600">
									Check-In: {individualAttendance.checkIn} | Check-Out: {individualAttendance.checkOut}
								</p>
							</div>
						</div>
					{/if}
				</div>

				<div>
					{#if absentUsers.length > 0}
						<div>
							<h2 class="text-xl font-semibold mb-2">Absent Users</h2>
							<div class="bg-white rounded-lg p-4">
								{#each absentUsers as user}
									<MemberOnLeave {user} />
								{/each}
							</div>
						</div>
					{/if}
				</div>
			</div>
		</main>
	</div>
</div>
