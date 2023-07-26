<!-- TimeOffPage.svelte -->
<script>
	import Header from '../../components/Header.svelte';
	import ManageTimeHeader from '../../components/ManageTimeHeader.svelte';
	import SideBar from '../../components/SideBar.svelte';
</script>

<div class="flex flex-col md:flex-row w-screen h-screen">
	<SideBar />
	<div class="w-full h-full flex flex-col bg-neutral-100">
		<Header />
        <ManageTimeHeader />

        <div class="flex justify-center items-center h-full">
			<div class="bg-white rounded-lg shadow-md p-4">
				<h3 class="text-xl font-semibold mb-4 text-center">Casual Leave</h3>
				<!-- Circular progress indicator -->
				<div class="relative w-16 h-16 mx-auto rounded-full border-2 border-blue-500">
					<div class="absolute top-0 left-0 w-full h-full bg-blue-200 rounded-full"></div>
					<div class="absolute top-0 left-0 w-16 h-16 bg-blue-500 rounded-full" style="transform: rotate(75deg); clip-path: polygon(50% 0%, 100% 0%, 100% 100%);"></div>
					<div class="absolute top-0 left-0 w-16 h-16 border-2 border-blue-500 rounded-full"></div>
					<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-500 font-semibold text-lg">
						9/12
					</div>
				</div>
				<button class="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-1 px-3 rounded w-full mt-4">
					Apply
				</button>
			</div>
		</div>

       


	</div>
</div>
