import { error } from '@sveltejs/kit';

export async function load({ params, locals }) {
    const { data: commission, error: dbError} = await locals.supabase
        .from('commissions')
        .select('*')
        .eq('id', params.id)
        .single();

    if (dbError) {
        console.error(dbError);
    }

    if (!commission) {
        throw error(404, 'Commission not found');
    }

    return { commission };
}