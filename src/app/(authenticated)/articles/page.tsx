
interface Post {
    id: number,
    title: string,
    body: string
}

export default async function ArticlesPage() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
        throw new Error('failed to fetch posts');
    }

    const posts: Post[] = await response.json();
    console.log(posts);

    return (
        <div>
            <h1 className="text-4xl p-4">Articles Page</h1>
            <h2 className="text-2xl p-4">Posts</h2>
            {posts.map(post => (
                <article className="w-md p-4">
                    <h3 className="font-bold text-xl">{post.title}</h3>
                    <p>{post.body}</p>
                </article>
            ))}
        </div>
    );
}