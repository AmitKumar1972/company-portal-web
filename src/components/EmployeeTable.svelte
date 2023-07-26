<script>
	let departments = [
		{
			name: 'FrontEnd',
			totalMembers: 10,
			images: [
				'https://media.istockphoto.com/id/1009749608/photo/young-woman-portrait-in-the-city.jpg?s=612x612&w=0&k=20&c=nBmdXrCkI6Zz-J1EkCGQAamaYlZeIOQAtKunC4WMT-U=',
				'https://media.istockphoto.com/id/1009749608/photo/young-woman-portrait-in-the-city.jpg?s=612x612&w=0&k=20&c=nBmdXrCkI6Zz-J1EkCGQAamaYlZeIOQAtKunC4WMT-U=',
				'https://media.istockphoto.com/id/1009749608/photo/young-woman-portrait-in-the-city.jpg?s=612x612&w=0&k=20&c=nBmdXrCkI6Zz-J1EkCGQAamaYlZeIOQAtKunC4WMT-U='
			]
		},
		{
			name: 'Backend',
			totalMembers: 8,
			images: [
				'https://media.istockphoto.com/id/1009749608/photo/young-woman-portrait-in-the-city.jpg?s=612x612&w=0&k=20&c=nBmdXrCkI6Zz-J1EkCGQAamaYlZeIOQAtKunC4WMT-U=',
				'https://media.istockphoto.com/id/1009749608/photo/young-woman-portrait-in-the-city.jpg?s=612x612&w=0&k=20&c=nBmdXrCkI6Zz-J1EkCGQAamaYlZeIOQAtKunC4WMT-U=',
				'https://media.istockphoto.com/id/1009749608/photo/young-woman-portrait-in-the-city.jpg?s=612x612&w=0&k=20&c=nBmdXrCkI6Zz-J1EkCGQAamaYlZeIOQAtKunC4WMT-U='
			]
		},
		{
			name: 'Design',
			totalMembers: 6,
			images: [
				'https://media.istockphoto.com/id/1009749608/photo/young-woman-portrait-in-the-city.jpg?s=612x612&w=0&k=20&c=nBmdXrCkI6Zz-J1EkCGQAamaYlZeIOQAtKunC4WMT-U=',
				'https://media.istockphoto.com/id/1009749608/photo/young-woman-portrait-in-the-city.jpg?s=612x612&w=0&k=20&c=nBmdXrCkI6Zz-J1EkCGQAamaYlZeIOQAtKunC4WMT-U=',
				'https://media.istockphoto.com/id/1009749608/photo/young-woman-portrait-in-the-city.jpg?s=612x612&w=0&k=20&c=nBmdXrCkI6Zz-J1EkCGQAamaYlZeIOQAtKunC4WMT-U='
			]
		},
		{
			name: 'QA',
			totalMembers: 4,
			images: [
				'https://media.istockphoto.com/id/1009749608/photo/young-woman-portrait-in-the-city.jpg?s=612x612&w=0&k=20&c=nBmdXrCkI6Zz-J1EkCGQAamaYlZeIOQAtKunC4WMT-U=',
				'https://media.istockphoto.com/id/1009749608/photo/young-woman-portrait-in-the-city.jpg?s=612x612&w=0&k=20&c=nBmdXrCkI6Zz-J1EkCGQAamaYlZeIOQAtKunC4WMT-U=',
				'https://media.istockphoto.com/id/1009749608/photo/young-woman-portrait-in-the-city.jpg?s=612x612&w=0&k=20&c=nBmdXrCkI6Zz-J1EkCGQAamaYlZeIOQAtKunC4WMT-U='
			]
		}
	];
</script>

<div class="w-full h-fit mr-6 mt-3 bg-white drop-shadow-xl rounded-lg">
	<div class="w-auto h-20 flex flex-row border-b-2 justify-center">
		<h3 class="w-full overflow-hidden font-sans text-2xl text-black font-semibold ml-5 mt-5">
			Employee
		</h3>
		<a class="text-xl text-slate-500 mr-5" href="/employee">view All</a>
	</div>
	<div class="flex flex-col mb-3 mt-3">
		{#each departments as department}
			<div class="flex flex-row bg-slate-100 rounded-md mb-2 relative mx-2">
				<div class="w-full h-15 flex flex-col justify-center">
					<h1 class="w-full overflow-hidden font-sans text-xl text-black font-semibold ml-5 mt-2">
						{department.name}
					</h1>
					<p class="font-normal dark:text-gray-400 ml-5 mb-3">
						total member - {department.totalMembers}
					</p>
				</div>
				<div class="w-full flex flex-row justify-end mr-3 mt-2 -space-x-3 absolute top-0 -left-4">
					{#each department.images as image, index}
						<img
							src={image}
							alt="Imag"
							class={`w-10 h-10 rounded-full object-cover mt-2 ${index !== 0 ? '-space-x-11' : ''}`}
						/>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>