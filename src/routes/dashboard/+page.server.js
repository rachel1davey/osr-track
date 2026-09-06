import { getCommissions } from '$lib/commissions';

export async function load() {
    const commissions = await getCommissions();

    if (!commissions) {
        throw new Error('Failed to load commissions');
    }
    return {
        commissions
    };

}