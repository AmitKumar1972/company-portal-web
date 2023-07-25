<script>
	import LeaveHistory from '../../components/LeaveHistory.svelte';
	import ProfileCover from '../../components/ProfileCover.svelte';
	import SideBar from '../../components/SideBar.svelte';

	let leaveHistory = [
		{ date: '2023-07-10', status: 'Approved' },
		{ date: '2023-07-09', status: 'Rejected' },
		{ date: '2023-07-08', status: 'Approved' },
		{ date: '2023-07-07', status: 'Approved' }
	];
</script>

<div class="flex flex-col md:flex-row w-screen h-screen">
	<SideBar />
	<div class="w-full h-full flex flex-col bg-neutral-100">
		<ProfileCover />
		<LeaveHistory />
	</div>
</div>
