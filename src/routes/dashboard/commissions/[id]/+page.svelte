<script>
import { page } from '$app/state';
import { resolve } from '$app/paths';
import { supabase } from '$lib/supabase.js';
    let id = page.params.id;
    let { data } = $props();
  let selectedImage = $state();
  let previewUrl = $state();


    function useImageAsMainImage() {
      console.log("Selected image:", selectedImage);
      previewUrl = URL.createObjectURL(selectedImage);
    }

    async function confirmMainImage() {
      console.log("Saving image to database:", selectedImage);
      
        const result = await supabase
          .storage
          .from('commission-images')
          .upload(`${id}/${selectedImage.name}`, selectedImage, {
            cacheControl: '3600',
            upsert: false
          });
        
       if (result.error) {
          console.error("Error uploading image:", result.error);
          return;
        } 
       const { data: UpdatedCommission, error } = await supabase
    .from('commissions')
    .update({ main_image: result.data.path })
    .eq('id', id)
    .select();
    console.log(id)

console.log("DATABASE UPDATE:", UpdatedCommission, error);

          console.log("Upload result:", result);

      // Reset the preview and selected image after saving
      previewUrl = null;
      selectedImage = null;

      }
    

      
    

    
    

</script>
<h1>Commission Details</h1>

<p>ID: {id}</p>
<h1>{data.commission.name}</h1>
<p>{data.commission.description}</p>
<p>Status: {data.commission.status}</p>
<p>{data.commission.id}</p>

<p>Change cover image:</p>
<input type="file" accept="image/*" onchange={(event) => selectedImage = event.target.files[0]}/> 
<button onclick={useImageAsMainImage}>Use Image as Main Image</button>
{#if previewUrl}
  <div>
    <h3>Preview:</h3>
    <img src={previewUrl} alt="" />
    <button onclick={() => { previewUrl = null; selectedImage = null; }}>Cancel</button> <button onclick={confirmMainImage}>Confirm</button>
  </div>
{/if}

<a href={resolve('/dashboard')}>Back to Dashboard</a>