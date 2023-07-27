<!-- TimeOffPage.svelte -->
<script>
	import Header from '../../components/Header.svelte';
	import Leave from '../../components/Leave.svelte';
	import ManageTimeHeader from '../../components/ManageTimeHeader.svelte';
	import SideBar from '../../components/SideBar.svelte';
</script>

<div class="flex flex-col md:flex-row w-screen h-screen">
	<div class="w-72 bg-slate-700 hidden sm:block">
		<SideBar />
	</div>
	<div class="w-full h-full flex flex-col bg-neutral-100">
		<Header />
        <ManageTimeHeader />
	</div>
</div>
