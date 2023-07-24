<script>
	import SideBar from '../../components/SideBar.svelte';
</script>

<div class="flex flex-row w-screen h-screen">
	<SideBar />
	<div class="w-full h-full flex flex-col bg-neutral-100">
		<div class="flex flex-row items-center w-full h-[70px] border-b-2 overflow-hidden bg-slate-100">
			<div class="w-[60%] flex justify-end items-center">
				<input
					class="border-2 placeholder:text-lg rounded-xl ring-1 my-2 py-2 px-8 mr-2 outline-sky-500"
					placeholder="Search Employee"
					type="text"
				/>
				<svg
					class="w-8 h-8 fill-slate-400"
					focusable="false"
					aria-hidden="true"
					viewBox="0 0 24 24"
					data-testid="SearchIcon"
					><path
						d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
					/></svg
				>
			</div>
			<div class="w-[40%] flex justify-end mr-5">
				<button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"> Logout </button>
			</div>
		</div>
		<div class="w-full h-full flex flex-col items-start justify-start">
			<div class="w-full h-auto flex flex-row items-start mt-7">
				<div class="font-semibold text-4xl ml-5">32 Employee</div>
				<button
					class="ml-auto mr-5 bg-slate-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>+New Candidate</button
				>
			</div>
			<div class="ml-5 mt-10">
				<div
					class="flex flex-col items-center justify-center w-auto h-auto bg-white rounded-xl drop-shadow-xl"
				>
					<img
						src="https://media.istockphoto.com/id/1009749608/photo/young-woman-portrait-in-the-city.jpg?s=612x612&w=0&k=20&c=nBmdXrCkI6Zz-J1EkCGQAamaYlZeIOQAtKunC4WMT-U="
						alt="Imag"
						class="w-28 h-28 rounded-full object-cover mt-5"
					/>
					<h1 class="text-xl font-semibold mt-4">John Doe</h1>
					<p class="text-gray-500">Graphic Designer</p>
					<div class="bg-sky-50 mb-3 rounded-lg mt-5 ml-3 mr-3 p-1">
						<div class="flex flex-row gap-12 mb-7">
							<div class="mt-3 ml-2">
								<p class="text-base text-gray-400">Department</p>
								<p>Backend</p>
							</div>
							<div class="mt-3 mr-2">
								<p class="text-base text-gray-400">Date Joined</p>
								<p>04/12/2000</p>
							</div>
						</div>
						<div class="ml-2 mb-2">
							<div class="flex flex-row gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 64 64"
									id="email"
									class="w-6 h-6"
									><path
										fill="#222"
										d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"
									/><path
										fill="#222"
										d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"
									/><path
										fill="#222"
										d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"
									/></svg
								>
								<p>amitk@gluelabs.com</p>
							</div>
							<div class="flex flex-row gap-2 mt-2">
								<svg
									class="w-6 h-6"
									xmlns="http://www.w3.org/2000/svg"
									id="phone"
									x="0"
									y="0"
									version="1.1"
									viewBox="0 0 29 29"
									xml:space="preserve"
									><path
										d="M20.666 27.021a5.907 5.907 0 0 1-2.934-.779l-.126-.071A39.137 39.137 0 0 1 3.491 12.355l-.657-1.095a5.849 5.849 0 0 1 .881-7.153l1.309-1.309c1.1-1.1 2.889-1.1 3.988 0l2.884 2.884a2.83 2.83 0 0 1 .464 3.378l-1.084 1.925a.213.213 0 0 0 .035.255l6.421 6.421a.216.216 0 0 0 .257.034l1.922-1.083.001-.001a2.832 2.832 0 0 1 3.378.464l2.885 2.886c1.1 1.1 1.1 2.889 0 3.988l-1.367 1.366a5.848 5.848 0 0 1-4.142 1.706zM7.018 3.973c-.21 0-.42.08-.58.24L5.129 5.521a3.85 3.85 0 0 0-.58 4.708l.657 1.095a37.13 37.13 0 0 0 13.389 13.107l.126.071c1.526.873 3.446.626 4.672-.602l1.367-1.366a.82.82 0 0 0 0-1.16l-2.885-2.886a.823.823 0 0 0-.983-.134l-1.922 1.083a2.222 2.222 0 0 1-2.652-.363l-6.421-6.421a2.218 2.218 0 0 1-.363-2.651l1.084-1.924a.824.824 0 0 0-.135-.982L7.598 4.213a.818.818 0 0 0-.58-.24z"
									/></svg
								>
								<p>+918529481972</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
