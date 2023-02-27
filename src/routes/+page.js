export const load = ({ fetch }) => {
    const fetchPosts = async () => {
        const res = await fetch('/api/query', {
            method: "post",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                query: 'site.title',
            }),
        });
        const data = await res.json();
        return data
    }

    return {
        posts: fetchPosts()
    }

}