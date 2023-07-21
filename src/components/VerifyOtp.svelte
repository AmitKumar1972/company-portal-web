<!-- VerifyOTP.svelte -->
<script>
	// @ts-nocheck

	import { verifyOTP } from '$lib/api';

	export let isOpen;
	export let closeModal;
	export let email;
	let otp;

	async function handleVerify() {
		const verifyOtpResponse = await verifyOTP(email, otp);
		if (verifyOtpResponse?.verifyOtp) {
			// OTP verification successful
			alert('OTP verified successfully!');
			closeModal();
		} else {
			// OTP verification failed
			alert('Invalid OTP. Please try again.');
		}
	}
</script>

<div
	class="{isOpen
		? 'block'
		: 'hidden'} fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50"
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
