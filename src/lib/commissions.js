import { supabase } from '$lib/supabase';

    export async function getCommissions() {
        const { data, error } = await supabase
            .from('commissions')
            .select('*');

        if (error) {
            return console.error('Error fetching commissions:', error);
        } else {
            return data;
        }
    }

  export async function getCommissionById(id) {
    const { data, error } = await supabase
        .from('commissions')
        .select('*')
        .eq('id', id)
        .single();
        
    if (error) {
        return console.error('Error fetching commission by ID:', error);
    } else {
        return data;
    }
  }


  export function getImageUrl(imagePath) {
    if (!imagePath) {
        return null;
    }

    const { data, error } = supabase
        .storage
        .from('commission-images')
        .getPublicUrl(imagePath);
        
    if (error) {
        console.error('Error fetching image URL:', error);
        return null;
    } else {
        return data.publicUrl;
    }

}