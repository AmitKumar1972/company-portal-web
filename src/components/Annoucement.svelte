<!-- Main code -->
<script>
	// @ts-nocheck
	import AnnoucementModal from './AnnoucementModal.svelte';

	const announcements = [
		{
			title: 'Office Party Tomorrow',
			description: 'Here again, there is a party at Social Sharp sharp at 8:00 pm tomorrow.'
		},
		{
			title: 'Payments Feature Released Today',
			description:
				'After so many days of waiting, the payments feature on FIFO is going to be released.'
		},
		{
			title:
				'Everyone Should Learn Svelte in the Next 2 Weeks',
			description:
				'It is the fastest-growing framework. Everyone should have this in their skills.'
		}
	];

	let selectedAnnouncement = null;

	function openModal(announcement) {
		selectedAnnouncement = announcement;
	}

	// Remove the existing `selectedAnnouncement` and `openModal` declarations
	let showModal = false;

	function closeModal() {
		showModal = false;
		document.body.classList.remove('modal-open'); // Remove the class to enable scrolling
	}
</script>

<!-- Main code -->
<div class="bg-white drop-shadow-xl flex flex-col gap-3 max-w-lg rounded-lg w-full cursor-pointer p-5">
	<div class="font-sans text-xl font-semibold flex items-center justify-between">
		Announcements
		<button class="text-blue-600 font-semibold text-sm">View All</button>
	</div>
	<div class="flex flex-col gap-5">
		<!-- Iterate over the announcements array to generate the clickable announcement cards -->
		{#each announcements as announcement}
			<div
				class="bg-slate-100 border border-gray px-2 py-3 flex flex-col gap-1 shadow-md rounded-md cursor-pointer"
				on:click={() => {
					selectedAnnouncement = announcement;
					showModal = true;
					document.body.classList.add('modal-open'); // Add the class to disable scrolling
				}}
				on:keydown={(event) => {
					if (event.key === 'Enter' || event.key === ' ') {
						selectedAnnouncement = announcement;
						showModal = true;
						document.body.classList.add('modal-open'); // Add the class to disable scrolling
					}
				}}
				tabindex="0"
				role="button"
			>
				<div class="font-bold text-gray-900 break-all">
					{announcement.title}
				</div>
				<div class="text-gray-700 text-sm break-all">
					{announcement.description}
				</div>
			</div>
		{/each}
	</div>
	<!-- Add margin at the bottom after the last announcement card -->
	<div class="mb-4" />
</div>

{#if showModal}
	<!-- Render the modal component and pass the selected announcement and closeModal function to it -->
	<AnnoucementModal {selectedAnnouncement} {closeModal} />
{/if}
