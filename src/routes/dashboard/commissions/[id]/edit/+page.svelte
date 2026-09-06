<script>
    import { enhance } from '$app/forms';
    let { data, form } = $props();
    let commission = $state( {...data.data} );
    let submitting = $state(false);


</script>


<form method="POST" use:enhance={() => {submitting = true;

        return async ({ update }) => {
            await update();
            submitting = false;
        };
    }}>

{#if form?.error}
    <p class="text-error alert-outline">{form.error}</p>
{/if}

    <input
        type="text"
        name="name"
        bind:value={commission.title}
        placeholder="Commission Name"
        required
    >

    <textarea
        name="description"
        bind:value={commission.description}
        placeholder="Description"
    ></textarea>

    <select name="status" bind:value={commission.status}>
        <option value="Pending">Pending Payment</option>
        <option value="In Progress">Parts To Be Printed</option>
        <option value="Parts Printed">Parts Printed</option>
        <option value="Parts Sanded">Parts Sanded</option>
        <option value="Parts Primed & Painted">Parts Primed & Painted</option>
        <option value="Assembled">Assembled</option>
        <option value="Pending Shipping">Pending Shipping</option>
        <option value="Shipped">Shipped</option>
    </select>

    <input
        type="text"
        name="customer_name"
        bind:value={commission.customer_name}
        placeholder="Customer Name"
    >


<button type="submit" disabled={submitting}>
    {submitting ? 'Updating...' : 'Update'}
</button>
<a href="/dashboard" class="btn btn-error">Cancel</a>
</form>