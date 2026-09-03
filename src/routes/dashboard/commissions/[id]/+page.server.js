import { getCommissionById } from '$lib/commissions';

export async function load({ params }) {
    const commission = await getCommissionById(params.id);
    return {
        commission
    };
}