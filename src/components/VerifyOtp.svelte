<!-- VerifyOTP.svelte -->
<script>
	// @ts-nocheck

	import { getAllWorkSpaces, verifyOTP } from '$lib/api';
	import { goto } from '$app/navigation';
	import Cookies from 'js-cookie';

	export let closeModal;
	export let email;
	let showToast = false;
	let otp;

	async function handleVerify() {
		const verifyOtpResponse = await verifyOTP(email, otp);
		if (verifyOtpResponse?.verifyOtp) {
            const token = verifyOtpResponse.verifyOtp.token;
            Cookies.set('portal-token', token);

            const allWorkspaces = await getAllWorkSpaces();
            let workspaceName = allWorkspaces.getAllWorkspaces.workspace[0].uniqueName;
        
            goto(`${workspaceName}/dashboard`);
		}
		closeModal();
	}
</script>

<div class="fixed inset-0 flex items-center justify-center z-50">
	<div class="absolute inset-0 bg-gray-900 opacity-60" />
	<div class="p-8 bg-white drop-shadow-xl w-4/12">
		<h2 class="text-xl font-semibold mb-4">Verify OTP</h2>
		<input type="number" bind:value={otp} placeholder="Enter OTP" class="w-full p-2 mb-2 rounded" />
		<button on:click={handleVerify} class="bg-blue-500 text-white px-4 py-2 rounded-md"
			>Verify</button
		>
		<button on:click={closeModal} class="bg-gray-500 text-white px-4 py-2 rounded-md">Close</button>
	</div>
</div>
{#if showToast}
	<div class="fixed bottom-4 left-4 p-2 bg-gray-800 text-white rounded shadow">
		OTP verified successfully!
	</div>
{/if}
