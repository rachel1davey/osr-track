<script>
import { page } from '$app/state';
    let id = page.params.id;
    let { data } = $props();
</script>
<h1>Commission Details</h1>

<p>ID: {id}</p>
<h1>{data.commission.name}</h1>
<p>{data.commission.description}</p>
<p>Status: {data.commission.status}</p>

<p>Change cover image:</p>
<input type="file" accept="image/*" />
<a href="/dashboard">Back to Dashboard</a>