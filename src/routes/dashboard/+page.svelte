<script> 
    import CommissionCard from '$lib/components/CommissionCard.svelte';
    let { data } = $props();
    

</script>

<h1>Commissions Dashboard</h1>

<div>
    <h2>Active Commissions</h2>
    {#each data.commissions as commission (commission.id)}
    {#if commission.status != 'Completed'}
        <CommissionCard {commission} />
    {/if}
    {/each}
</div>
<div>
    <h2>Completed Commissions</h2>
    {#each data.commissions as commission (commission.id)}
    {#if commission.status == 'Completed'}
        <CommissionCard {commission} />
    {/if}
    {/each}
</div>

