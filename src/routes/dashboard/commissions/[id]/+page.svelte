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
<main class="mx-auto max-w-3xl space-y-6 px-4 py-8 sm:px-6">
  <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
    <div>
      <p class="text-sm font-medium uppercase tracking-wider text-primary">Commission details</p>
      <h1 class="text-3xl font-bold tracking-tight">{data.commission.title}</h1>
      <p class="mt-1 text-sm text-base-content/60">ID: {id}</p>
      <p class="mt-1 text-sm text-base-content/60">Customer: {data.commission.customer_name}</p>
    </div>
    <span class="badge badge-secondary badge-lg">{data.commission.status}</span>
  </div>

  <section class="card border border-base-300 bg-base-100 shadow-sm">
    <div class="card-body gap-5">
      <div>
        <h2 class="card-title">Description</h2>
        <p class="mt-2 text-base-content/75">{data.commission.description}</p>
      </div>

      <div class="divider my-0"></div>

      <div class="space-y-3">
        <div>
          <h2 class="font-semibold">Cover image</h2>
          <p class="text-sm text-base-content/60">Upload a new image for this commission.</p>
        </div>
        <input class="file-input file-input-bordered w-full" type="file" accept="image/*" onchange={(event) => selectedImage = event.target.files[0]} />
        <button class="btn btn-outline w-fit" onclick={useImageAsMainImage}>Use Image as Main Image</button>
      </div>

      {#if previewUrl}
        <div class="space-y-3 rounded-box bg-base-200 p-4">
          <h3 class="font-semibold">Preview</h3>
          <img class="max-h-80 w-full rounded-lg object-contain" src={previewUrl} alt="Selected commission cover preview" />
          <div class="flex flex-wrap gap-2">
            <button class="btn btn-ghost" onclick={() => { previewUrl = null; selectedImage = null; }}>Cancel</button>
            <button class="btn btn-primary" onclick={confirmMainImage}>Confirm</button>
          </div>
        </div>
      {/if}
    </div>
  </section>

  <div class="flex flex-wrap gap-3">
    <a class="btn btn-primary" href={resolve(`/dashboard/commissions/${id}/edit`)}>Edit Commission</a>
    <a class="btn btn-error" href={resolve(`/dashboard/commissions/${id}/delete`)}>Delete Commission</a>
    <a class="btn btn-ghost" href={resolve('/dashboard')}>Back to Dashboard</a>
  </div>
</main>