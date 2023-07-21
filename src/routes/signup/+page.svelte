<script>
	// @ts-nocheck
	import Footer from '../../components/Footer.svelte';
	import Input from '../../components/Input.svelte';
	import VerifyOtp from '../../components/VerifyOtp.svelte';
	import { signup } from '$lib/api.Ts';

	let username = '';
	let password = '';
	let email = '';
	let workspaceName = '';
	let uniqueName = '';
	let passwordError = '';
	let nameError = '';
	let apiError = '';

	let isOTPModalOpen = false;

	async function validateForm(event) {
		event.preventDefault(); // prevent default form submission behavior
		const usernameRegex = /^.{1,15}$/; // match any character, 1 to 15 times
		const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; // match letters, numbers, and special characters, at least 8 characters long
		if (!usernameRegex.test(username)) {
			nameError = 'Username must be 15 characters or less';
			return;
		} else {
			nameError = '';
		}

		if (!passwordRegex.test(password)) {
			passwordError =
				'Password must contain at least one letter, one number, and one special character, and be at least 8 characters long';
			return;
		} else {
			passwordError = '';
		}

		const signupResponse = await signup(username, email, password, workspaceName, uniqueName);

		if (signupResponse?.signup) {
			isOTPModalOpen = true;
		} else {
			apiError = 'Error creating workspace. Please try again later.';
		}
	}
</script>

<div class="flex flex-col md:flex-row h-screen">
	<div class="md:w-1/2 h-screen bg-slate-900">
		<img
			class="w-full h-full object-cover"
			src="../../../login-signup.png"
			alt="Girl with laptop"
		/>
	</div>
	<div class="md:w-1/2 h-full flex flex-col bg-slate-50">
		<div class="w-full h-10 mt-20 text-blue-500 text-2xl font-bold text-center">Company Portal</div>
		<div class="flex-grow mx-4 md:mx-10 my-8 md:my-20 flex flex-col justify-center">
			<form
				class="w-full max-w-md mx-auto bg-white rounded-xl shadow-md p-8"
				on:submit={validateForm}
			>
				<div class="text-lg font-medium text-center mb-5">Sign Up</div>
				<Input bind:value={username} placeholder="Enter Your Name" required="true" />
				{#if nameError}
					<div class="text-red-500 text-sm">{nameError}</div>
				{/if}
				<Input bind:value={email} type="email" placeholder="Enter Your Email" required="true" />
				<Input bind:value={password} placeholder="Enter Your Password" required="true" />
				{#if passwordError}
					<div class="text-red-500 text-sm">{passwordError}</div>
				{/if}
				<Input placeholder="Enter Your Workspace Name" bind:value={workspaceName} required="true" />
				<Input bind:value={uniqueName} placeholder="Enter Unique Name" required="true" />
				<button class="w-full h-12 my-4 bg-blue-400 text-white font-semibold rounded-xl">
					Create Workspace
				</button>
				{#if apiError}
					<div class="text-red-500 text-sm">{apiError}</div>
				{/if}
				<div class="text-lg">
					Already Have an Account? <a href="/signin" class="text-blue-600">Sign In</a>
				</div>
			</form>
		</div>
	</div>
	{#if isOTPModalOpen}
		<VerifyOtp isOpen={isOTPModalOpen} closeModal={() => (isOTPModalOpen = false)} {email} />
	{/if}
</div>
<Footer />
