<script>
import { page } from '$app/state';
    let id = page.params.id;
    let { data } = $props();
    let selectedImage;
    let previewUrl;

    function useImageAsMainImage() {
      console.log("Selected image:", selectedImage);
      previewUrl = URL.createObjectURL(selectedImage);
    }
    

</script>
<h1>Commission Details</h1>

<p>ID: {id}</p>
<h1>{data.commission.name}</h1>
<p>{data.commission.description}</p>
<p>Status: {data.commission.status}</p>

<p>Change cover image:</p>
<input type="file" accept="image/*" onchange={(event) => selectedImage = event.target.files[0]}/> 
<button onclick={useImageAsMainImage}>Use Image as Main Image</button>
{#if previewUrl}
  <div>
    <h3>Preview:</h3>
    <img src={previewUrl} alt="Preview of selected image" />
  </div>
{/if}

<a href="/dashboard">Back to Dashboard</a>