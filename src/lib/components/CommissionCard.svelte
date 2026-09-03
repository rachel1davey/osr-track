<script>
    import { getImageUrl } from '$lib/commissions.js';
    let { commission } = $props();
    let imageUrl = getImageUrl(commission.main_image);
</script>

<div>
<p>ID: {commission.id}</p>
<h2>{commission.name}</h2>
<p>{commission.description}</p>
<p>Status: {commission.status}</p>
<img src={imageUrl} alt="Commission Image" />
<p>{imageUrl}</p>
<a href="/dashboard/commissions/{commission.id}">View Details</a>
</div>

