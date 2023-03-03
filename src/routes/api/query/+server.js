import { API_URL, API_USER_EMAIL, API_USER_PASSWORD } from '$env/static/private';

export const POST = async ({ request }) => {
    const query = await request.json();
    const auth = btoa(`${API_USER_EMAIL}:${API_USER_PASSWORD}`);
    const response = await fetch(API_URL, {
        method: "post",
        headers: {
            'authorization': `Basic ${auth}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify(query),

    });
    const data = await response;
    return data;
}
