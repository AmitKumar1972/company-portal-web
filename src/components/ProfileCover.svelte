<!-- ProfileCover.svelte -->
<script>
	// Sample user information (replace with actual data)
	let user = {
		name: 'John Doe',
		employeeId: 'EMP12345',
		designation: 'Frontend Developer'
	};

	const applyLeave = () => {
		// Logic to apply leave goes here
		console.log('Leave applied!');
	};

	// Function for check-in (replace with actual logic)
	const checkIn = () => {
		// Logic for check-in goes here
		console.log('Checked-in!');
	};

	// Function for check-out (replace with actual logic)
	const checkOut = () => {
		// Logic for check-out goes here
		console.log('Checked-out!');
	};
</script>

<div class="bg-blue-500 p-6 rounded-lg flex items-center space-x-6 mb-4">
	<img
		class="w-20 h-20 rounded-full"
		src="https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=600"
		alt="Profile Avatar"
	/>
	<div class="flex flex-col flex-grow">
		<h4 class="text-2xl font-semibold text-white">Welcome {user.name}</h4>
		<div class="flex flex-row gap-8">
			<p class="text-lg text-white">Employee ID - {user.employeeId}</p>
			<p class="text-lg text-white">Designation - {user.designation}</p>
		</div>
		<div class="flex flex-row">
			<div class="flex items-center space-x-4 mt-5">
				<!-- Timesheet Button -->
				<button class="flex items-center text-white bg-blue-600 py-2 px-4 rounded-lg">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						class="w-6 h-6 mr-2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						/>
					</svg>
					Timesheet
				</button>

				<!-- Teams Button -->
				<button class="flex items-center text-white bg-blue-600 py-2 px-4 rounded-lg">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						class="w-6 h-6 mr-2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6.488 21.5h11.024c.338 0 .642-.19.792-.491.15-.3.116-.654-.09-.924L12 12.518l-6.214 7.567c-.206.25-.24.604-.09.923.15.3.454.491.792.491zm0-19h11.024c.338 0 .642.19.792.491.15.3.116.654-.09.924L12 10.518l-6.214-7.567c-.206-.25-.24-.604-.09-.923.15-.3.454-.491.792-.491zM4.493 3.5c.285 0 .56.104.783.293l7.513 5.662 7.512-5.662a1.25 1.25 0 111.574 1.944L12.064 11.3a1.255 1.255 0 01-1.128 0L2.915 5.438a1.25 1.25 0 011.578-1.938c.098.07.185.165.258.278l3.444 5.2-3.446-5.2c-.216-.328-.087-.777.24-1.014.328-.216.777-.088 1.014.24L4.49 3.5z"
						/>
					</svg>
					Teams
				</button>

				<!-- Awards Button -->
				<button class="flex items-center text-white bg-blue-600 py-2 px-4 rounded-lg">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						class="w-6 h-6 mr-2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3.21 21a9 9 0 1 1 13.56 0L12 2.75 3.21 21zM12 8v6m0 0v6m0-6h6m-6 0H6"
						/>
					</svg>
					Awards
				</button>
			</div>
			<div class="flex-grow" />
			<div class="flex flex-row mt-5 gap-2">
				<button
					class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 mr-2 rounded"
					on:click={checkIn}
				>
					Check-in
				</button>
				<button
					class="flex items-center text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg"
					on:click={applyLeave}
				>
					Apply Leave
				</button>
			</div>
		</div>
	</div>
</div>
