
import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, locals }) => {
        const formData = await request.formData();

        const name = formData.get('name');
        const description = formData.get('description');
        const status = formData.get('status');
        const customerName = formData.get('customer_name');

        const { data, error } = await locals.supabase.from('commissions').insert([
            {
                title: name,
                description,
                status,
                customer_name: customerName
            }
        ]);

        console.log('INSERT RESULT:', data, error);

        if (error) {
            return {
                success: false,
                error: error.message
            };
        }

        throw redirect(303, '/dashboard');

    }
};

