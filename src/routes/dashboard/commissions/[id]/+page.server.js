export async function load({ params, locals }) {
    const { data: commission, error } = await locals.supabase
        .from('commissions')
        .select('*')
        .eq('id', params.id)
        .single();

    if (error) {
        console.error(error);
    }

    return { commission };
}