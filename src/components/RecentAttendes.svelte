<script>
	// Attendee Data Array
	const attendees = [
		{
			name: 'Ravina Tandon',
			image:
				'https://media.istockphoto.com/id/1009749608/photo/young-woman-portrait-in-the-city.jpg?s=612x612&w=0&k=20&c=nBmdXrCkI6Zz-J1EkCGQAamaYlZeIOQAtKunC4WMT-U=',
			checkInTime: '9:00 am',
			checkOutTime: '12:00 pm'
		},
		{
			name: 'Amit Kumar',
			image:
				'https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=600',
			checkInTime: '8:00 am',
			checkOutTime: '04:00 pm'
		},
		{
			name: 'Austrey Lio',
			image:
				'https://www.shutterstock.com/image-photo/portrait-casually-dressed-young-african-260nw-666436030.jpg',
			checkInTime: '10:00 am',
			checkOutTime: '01:00 pm'
		}
	];
</script>

<!-- Card container for Recent Attendees -->
<div class="bg-white flex flex-col p-5 max-h-max rounded-lg drop-shadow-xl gap-3">
	<div class="text-xl font-sans font-semibold">Recent Attendees</div>
	<!-- Iterate over the attendees array to generate the attendee cards -->
	<div class="flex flex-col gap-4">
		{#each attendees as attendee}
			<div
				class="w-full bg-slate-100 border border-gray px-2 py-3 shadow-md rounded-lg flex gap-3 justify-around"
			>
				<div>
					<img src={attendee.image} alt="profile" class="rounded-full h-10 w-10 object-cover" />
				</div>
				<div>
					<p class="text-bold">{attendee.name}</p>
					<p class=" text-gray-600 text-sm">
						Time checked in: <span class="font-semibold">{attendee.checkInTime}</span>
					</p>
					<p class=" text-gray-600 text-sm">
						Time checked out: <span class="font-semibold">{attendee.checkOutTime}</span>
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
