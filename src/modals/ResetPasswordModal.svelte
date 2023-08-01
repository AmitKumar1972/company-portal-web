<!-- ResetPasswordModal.svelte -->
<script>
// @ts-nocheck

	import { goto } from "$app/navigation";

// @ts-nocheck

	import { getAllWorkSpaces, resetPassword } from "$lib/api";
    import Cookies from "js-cookie";

	// @ts-nocheck
	export let closeModal;
	export let email;
	export let oldPassword;

	let newPassword = '';
	let confirmPassword = '';

	async function handleResetPassword() {
		const resetPasswordResponse = await resetPassword(email, oldPassword, newPassword);
		if (resetPasswordResponse?.resetPassword) {
			
            const token = resetPasswordResponse.resetPassword.token;
            Cookies.set('portal-token', token);

            const allWorkspaces = await getAllWorkSpaces();
            let workspaceName = allWorkspaces.getAllWorkspaces.workspace[0].uniqueName
        
            goto(`${workspaceName}/dashboard`);
		}
		closeModal();
	}
</script>

<div class="fixed top-0 left-0 w-full h-full flex items-center justify-center">
	<div class="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
		<h2 class="text-xl font-semibold mb-4">Reset Password</h2>
		<form>
			<div class="mb-4">
				<label class="block text-sm font-medium text-gray-700" for="new-password"
					>New Password:</label
				>
				<input
					class="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
					type="password"
					id="new-password"
					bind:value={newPassword}
					required
				/>
			</div>

			<div class="mb-4">
				<label class="block text-sm font-medium text-gray-700" for="confirm-password"
					>Confirm Password:</label
				>
				<input
					class="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
					type="password"
					id="confirm-password"
					bind:value={confirmPassword}
					required
				/>
			</div>

			<div class="flex justify-end">
				<button
					type="button"
					class="mr-2 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none"
					on:click={closeModal()}>Cancel</button
				>
				<button
					type="submit"
					class="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none"
                    on:click = {handleResetPassword}
					>Reset Password</button
				>
			</div>
		</form>
	</div>
</div>
