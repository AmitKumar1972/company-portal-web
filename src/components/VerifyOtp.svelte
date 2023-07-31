<!-- VerifyOTP.svelte -->
<script>
	// @ts-nocheck

	import { verifyOTP } from '$lib/api';
	import { goto } from '$app/navigation';

	export let closeModal;
	export let email;
	let showToast = false;
	let otp;

	async function handleVerify() {
		const verifyOtpResponse = await verifyOTP(email, otp);
		if (verifyOtpResponse?.verifyOtp) {
			// OTP verification successful
			closeModal();

			showToast = true;

			goto('/dashboard');

			setTimeout(() => {
                    showToast = false;
                }, 5000);

		} else {
			// OTP verification failed
			alert('Invalid OTP. Please try again.');
		}
	}
</script>

<div
	class=" block fixed top-0 left-0 w-full h-full justify-center items-center bg-black bg-opacity-50"
>
	<div class="bg-white p-4 rounded-md shadow-lg">
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
