import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ locals, params }) => {

        const { data: commission, error: fetchError } = await locals.supabase
            .from('commissions')
            .select('main_image')
            .eq('id', params.id)
            .single();

        if (fetchError) {
            console.error('Error finding commission:', fetchError);
            return;
        }

        if (commission.main_image) {
            const { error: imageError } = await locals.supabase
                .storage
                .from('commission-images')
                .remove([commission.main_image]);

            if (imageError) {
                console.error('Error deleting image:', imageError);
                return;
            }
        }

        const { error } = await locals.supabase
            .from('commissions')
            .delete()
            .eq('id', params.id);

        if (error) {
            console.error('Error deleting commission:', error);
            return;
        }

        throw redirect(303, '/dashboard');
    }
};