<script>
    // @ts-nocheck
    import Footer from "../../components/Footer.svelte";
    import Input from "../../components/Input.svelte";

    let username = "";
    let password = "";
    let email = "";
    let workspaceName = "";
    let passwordError = "";
    let nameError = "";
    let apiError = "";

    async function validateForm(event) {
        event.preventDefault(); // prevent default form submission behavior
        const usernameRegex = /^.{1,15}$/; // match any character, 1 to 15 times
        const passwordRegex =
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; // match letters, numbers, and special characters, at least 8 characters long
        if (!usernameRegex.test(username)) {
            nameError = "Username must be 15 characters or less";
            return;
        } else {
            nameError = "";
        }

        console.log('aaya yahana')

        if (!passwordRegex.test(password)) {
            passwordError =
                "Password must contain at least one letter, one number, and one special character, and be at least 8 characters long";
            return;
        } else {
            passwordError = "";
        }

        // validation checks passed, Call API
        const data = {
            name: name,
            email: email,
            password: password,
            workspaceName: workspaceName,
        };

        try {
            const response = await fetch(
                "http://localhost:4000/api/createWorkspace",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );
            if (response.ok) {
                alert("Workspace created successfully!");
            } else {
                apiError = "Error creating workspace. Please try again later.";
            }
        } catch (error) {
            apiError = "Error creating workspace. Please try again later.";
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
        <div
            class="w-full h-10 mt-20 text-blue-500 text-2xl font-bold text-center"
        >
            Company Portal
        </div>
        <div
            class="flex-grow mx-4 md:mx-10 my-8 md:my-20 flex flex-col justify-center"
        >
            <form
                class="w-full max-w-md mx-auto bg-white rounded-xl shadow-md p-8"
                on:submit={validateForm}
            >
                <div class="text-lg font-medium text-center mb-5">Sign Up</div>
                <Input
                    bind:value={username}
                    placeholder="Enter Your Name"
                    required = "true"
                />
                {#if nameError}
                    <div class="text-red-500 text-sm">{nameError}</div>
                {/if}
                <Input
                    bind:value={email}
                    type = "email"
                    placeholder="Enter Your Email"
                    required = "true"
                />
                <Input
                    bind:value={password}
                    placeholder="Enter Your Password"
                    required="true"
                />
                {#if passwordError}
                    <div class="text-red-500 text-sm">{passwordError}</div>
                {/if}
                <Input
                    placeholder="Enter Your Workspace Name"
                    bind:value={workspaceName}
                    required="true"
                />
                <button
                    class="w-full h-12 my-4 bg-blue-400 text-white font-semibold rounded-xl"
                >
                    Create Workspace
                </button>
                {#if apiError}
                    <div class="text-red-500 text-sm">{apiError}</div>
                {/if}
                <div class="text-lg">Already Have an Account? <a href = '/signin' class="text-blue-600">Sign In</a></div>
            </form>
        </div>
    </div>
</div>
<Footer />
