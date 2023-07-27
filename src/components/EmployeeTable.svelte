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

<div class="w-full bg-white drop-shadow-xl rounded-lg">
	<div class="w-auto flex items-center border-b-2 p-4 justify-center">
		<div class="w-full overflow-hidden font-sans text-black font-semibold">
			Employee
		</div>
		<a class="text-sm text-slate-500 whitespace-nowrap" href="/employee">View all</a>
	</div>
	<div class="flex flex-col gap-3 p-5">
		{#each departments as department}
			<div class="flex bg-slate-100 rounded-md items-center px-4 py-3 gap-5 border border-gray">
				<div class="w-full h-15 flex flex-col justify-center">
					<h1 class="w-full overflow-hidden font-sans text-black font-semibold">
						{department.name}
					</h1>
					<p class="font-normal dark:text-gray-400 text-sm whitespace-nowrap">
						total member - {department.totalMembers}
					</p>
				</div>
				<div class="w-full flex flex-row justify-end -space-x-3  top-0 -left-4">
					{#each department.images as image, index}
						<img
							src={image}
							alt="Imag"
							class={`w-10 h-10 rounded-full object-cover ${index !== 0 ? '-space-x-11' : ''}`}
						/>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>