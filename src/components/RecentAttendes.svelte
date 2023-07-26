<script>
	// Attendee Data Array
	const attendees = [
	  {
		name: "Ravina Tandon",
		image: "https://media.istockphoto.com/id/1009749608/photo/young-woman-portrait-in-the-city.jpg?s=612x612&w=0&k=20&c=nBmdXrCkI6Zz-J1EkCGQAamaYlZeIOQAtKunC4WMT-U=",
		checkInTime: "9:00 am",
		checkOutTime: "12:00 pm",
	  },
	  {
		name: "Amit Kumar",
		image: "https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=600",
		checkInTime: "8:00 am",
		checkOutTime: "04:00 pm",
	  },
	  {
		name: "Austrey Lio",
		image: "https://www.shutterstock.com/image-photo/portrait-casually-dressed-young-african-260nw-666436030.jpg",
		checkInTime: "10:00 am",
		checkOutTime: "01:00 pm",
	  },
	];
  </script>
  
	<!-- Card container for Recent Attendees -->
	<div class="bg-white shadow-md rounded-lg p-4 ml-3 drop-shadow-xl h-fit">
		<div class="text-2xl mb-4 font-sans font-semibold">Recent Attendees</div>
	  <!-- Iterate over the attendees array to generate the attendee cards -->
	  {#each attendees as attendee}
		<div class="w-full bg-slate-300 shadow-md rounded-lg flex flex-row justify-around mt-2 p-4">
		  <div>
			<img src={attendee.image} alt="Imag" class="w-12 h-12 rounded-full object-cover mt-2" />
		  </div>
		  <div class="ml-1">
			<p class="text-bold text-xl">{attendee.name}</p>
			<p class="mt-2 text-gray-600">Time Checked In: <span class="font-semibold">{attendee.checkInTime}</span></p>
			<p class="mt-1 text-gray-600">Time Checked Out: <span class="font-semibold">{attendee.checkOutTime}</span></p>
		  </div>
		</div>
	  {/each}
	</div>
  