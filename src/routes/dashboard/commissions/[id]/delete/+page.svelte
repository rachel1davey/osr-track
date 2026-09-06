<script>
    import { enhance } from '$app/forms';
    let { data, form } = $props();
    let deleting = $state(false);
</script>

<h1>Are you sure you want to delete this commission?</h1>
<form method="POST" use:enhance={() => {
        deleting = true;

        return async ({ update }) => {
            await update();
            deleting = false;
        };
    }}>

<button type="submit" disabled={deleting}>
        {deleting ? 'Deleting...' : 'Delete'}
    </button>
</form><a href="/dashboard" class="btn btn-error">Cancel</a>