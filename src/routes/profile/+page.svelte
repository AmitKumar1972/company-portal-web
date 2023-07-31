<script>
// @ts-nocheck

	import LeaveHistory from '../../components/LeaveHistory.svelte';
	import ProfileCover from '../../components/ProfileCover.svelte';
	import SideBar from '../../components/SideBar.svelte';

	export let data;

</script>

<div class="flex flex-col md:flex-row w-screen h-screen">
	<SideBar getAllWorkSpacesResponse={data.getAllWorkspaces}/>
	<div class="w-full h-full flex flex-col bg-neutral-100">
		<ProfileCover />
		<LeaveHistory />
	</div>
</div>
