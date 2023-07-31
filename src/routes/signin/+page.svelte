<!-- Add this import statement at the top of the script section -->
<script>
// @ts-nocheck

    import { signin } from '$lib/api';
    import Footer from '../../components/Footer.svelte';
    import Input from '../../components/Input.svelte';
    import { goto } from '$app/navigation';
	import Cookies from 'js-cookie';
  
    let password = '';
    let email = '';
    let apiError = '';

  
    async function validateForm(event) {
      event.preventDefault(); // prevent default form submission behavior
  
      try {
        const signinResponse = await signin(email, password);
  
        if (signinResponse?.signin) {
          // Set the token and expiration time in cookies
          const token = signinResponse.signin.token;
          Cookies.set('portal-token', token);
  
          // Redirect to /dashboard after setting the token
          goto('/dashboard');
        }
      } catch (error) {
        apiError = 'Error in sign in. Please try again later.';
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
				<div class="text-lg font-medium text-center mb-5">Sign In</div>
				<Input bind:value={email} type="email" placeholder="Enter Your Email" required="true" />
				<Input bind:value={password} placeholder="Enter Your Password" required="true" />
				<button class="w-full h-12 my-4 bg-blue-400 text-white font-semibold rounded-xl">
					Login
				</button>
				{#if apiError}
					<div class="text-red-500 text-sm">{apiError}</div>
				{/if}
				<div class="text-lg">
					Don't Have Account? <a href="/signup" class="text-blue-600">Sign Up</a>
				</div>
			</form>
		</div>
	</div>
</div>
<Footer />
