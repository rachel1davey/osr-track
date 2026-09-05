<script> 
    import CommissionCard from '$lib/components/CommissionCard.svelte';
    let { data } = $props();
    

</script>
<div class="mx-auto max-w-7xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
    <div class="flex flex-col gap-4 border-b border-base-300 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
            <p class="text-sm font-medium uppercase tracking-wider text-primary">Overview</p>
            <h1 class="text-3xl font-bold tracking-tight">Commissions Dashboard</h1>
        </div>
        <a href="google.com" class="btn btn-primary">Create New Commission</a>
    </div>

    <section class="space-y-4">
        <h2 class="text-2xl font-bold">Active Commissions</h2>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {#each data.commissions as commission (commission.id)}
                {#if commission.status != 'Completed'}
                    <CommissionCard {commission} />
                {/if}
            {/each}
        </div>
    </section>

    <section class="space-y-4">
        <h2 class="text-2xl font-bold">Completed Commissions</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {#each data.commissions as commission (commission.id)}
                {#if commission.status == 'Completed'}
                    <CommissionCard {commission} />
                {/if}
            {/each}
        </div>
    </section>
</div>
