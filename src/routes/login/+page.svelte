<script>
import { supabase } from '$lib/supabase.js';
    let email;
    let password;
    let errorMsg = $state();

    function login() {
        supabase.auth.signInWithPassword({ email, password })
            .then(response => {
                if (response.error) {
                    throw response.error;
                } else {
                    // Handle successful login, e.g., redirect to dashboard
                    window.location.href = '/dashboard';
                    console.log('Login successful:', response);
                }
            })
            .catch(error => {
                errorMsg = error;
                console.error('Login error:', error);
            });
    }

</script>
<input type="email" bind:value={email} placeholder="Email">
<input type="password" bind:value={password} placeholder="Password">
<button onclick={login}>Login</button>
{#if errorMsg}
    <p style="color: red;">{errorMsg.message}</p>
{/if}