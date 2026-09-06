
import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, locals, params }) => {
        const formData = await request.formData();

        const name = formData.get('name');
        const description = formData.get('description');
        const status = formData.get('status');
        const customerName = formData.get('customer_name');

        const { data, error } = await locals.supabase.from('commissions').update({
            title: name,
            description,
            status,
            customer_name: customerName
        }).eq('id',params.id);


console.log('DATA:', data);
console.log('ERROR:', error);

        console.log('UPDATE RESULT:', data, error);
        if (error) {
            return {
                success: false,
                error: error.message
            };
        }

        throw redirect(303, '/dashboard');
    }
};






export async function load({ params, locals }) {
    const { data, error } = await locals.supabase
        .from('commissions')
        .select('*')
        .eq('id', params.id)
        .single();

    console.log('DATA:', data);
    console.log('ERROR:', error);

    return { data };
}