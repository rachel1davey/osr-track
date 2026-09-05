<script>
    import { getImageUrl } from '$lib/commissions.js';
    let { commission } = $props();
    let imageUrl = getImageUrl(commission.main_image);

    console.log('MAIN IMAGE:', commission.main_image);
console.log('IMAGE URL:', imageUrl);
</script>

<div class="card w-96 bg-base-100 shadow-xl">
<figure><img src={imageUrl} alt="Commission Image" /></figure>
<h2 class="card-title">{commission.name}</h2>
<p>{commission.customer_name}</p>
<p class="card-body">{commission.description}</p>
<div class="badge badge-secondary">{commission.status}</div>
<div class="card-actions justify-end">
<a class="btn btn-primary"href="/dashboard/commissions/{commission.id}">View Details</a>
</div>
</div>

