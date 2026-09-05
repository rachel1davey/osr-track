// load function to authentic user using JWT token and redirect to login page if not authenticated
// check if authenticated and if not redirect to login page

import { redirect } from '@sveltejs/kit';


export async function load({locals}) {
    const { data, error } = await locals.supabase.auth.getClaims();
    if (!data?.claims || error) {
        throw redirect(303, '/login');
    }
    return {};

}