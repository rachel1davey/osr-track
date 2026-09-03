import { getCommissions } from '$lib/commissions';

export async function load() {
    const commissions = await getCommissions();
    return {
        commissions
    };

}