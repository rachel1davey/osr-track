import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ locals, params }) => {
        console.log('DELETE ACTION CALLED', params.id);

        const { data: commission, error: fetchError } = await locals.supabase
            .from('commissions')
            .select('main_image')
            .eq('id', params.id)
            .single();
            console.log('FETCH RESULT:', commission, fetchError);

        if (fetchError) {
            console.error('Error finding commission:', fetchError);
            return;
        }

        if (commission.main_image) {
            const { error: imageError } = await locals.supabase
                .storage
                .from('commission-images')
                .remove([commission.main_image]);
                console.log('DELETE IMAGE RESULT:', imageError);

            if (imageError) {
                console.error('Error deleting image:', imageError);
                return;
            }
        }

        const { error } = await locals.supabase
            .from('commissions')
            .delete()
            .eq('id', params.id);
            console.log('DELETE COMMISSION RESULT:', error);

        if (error) {
            console.error('Error deleting commission:', error);
            return;
        }

        throw redirect(303, '/dashboard');
    }
};