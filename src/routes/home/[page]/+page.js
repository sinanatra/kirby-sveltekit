export const load = ({ fetch, params }) => {
    console.log(params.page)
    const fetchPosts = async () => {
        const res = await fetch('/api/query', {
            method: "post",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                query: `page('home/${params.page}')`,
            }),
        });
        const data = await res.json();
        return data
    }

    return {
        posts: fetchPosts()
    }
}