<script>
	// @ts-nocheck

	import Header from '../../components/Header.svelte';
	import SideBar from '../../components/SideBar.svelte';
	export let data;
</script>

<div class="flex flex-row w-screen h-screen">
	<div class="w-72 bg-slate-700 hidden sm:block">
		<SideBar getAllWorkSpacesResponse={data.getAllWorkspaces} />
	</div>
	<div class="w-full h-full flex flex-col bg-neutral-100">
		<div class="w-full h-full flex flex-col items-start justify-start">
			<div class="w-full h-auto flex flex-row items-start mt-7">
				<div class="font-semibold text-2xl ml-5">32 Employee</div>
				<button
					class="ml-auto mr-5 bg-slate-400 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded focus:outline-none focus:shadow-outline"
					>+New Candidate</button
				>
			</div>
			<div class="ml-5 mt-10">
				<div class="flex flex-col items-center justify-center bg-white rounded-xl drop-shadow-xl">
					<img
						src="https://media.istockphoto.com/id/1009749608/photo/young-woman-portrait-in-the-city.jpg?s=612x612&w=0&k=20&c=nBmdXrCkI6Zz-J1EkCGQAamaYlZeIOQAtKunC4WMT-U="
						alt="Imag"
						class="w-20 h-20 rounded-full object-cover mt-5"
					/>
					<h1 class="text-base font-semibold py-1">John Doe</h1>
					<p class="text-gray-500">Graphic Designer</p>
					<div class="bg-sky-50 rounded-lg m-2">
						<div class="flex flex-row gap-12 py-2">
							<div class="p-2">
								<p class="text-sm text-gray-400">Department</p>
								<p class="text-sm">Backend</p>
							</div>
							<div class="p-2">
								<p class="text-sm text-gray-400">Date Joined</p>
								<p class="text-sm">04/12/2000</p>
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
								<p class="text-sm">amitk@gluelabs.com</p>
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
								<p class="text-sm">+918529481972</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
