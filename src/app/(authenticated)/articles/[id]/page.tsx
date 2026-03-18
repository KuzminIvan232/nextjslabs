
interface Post {
    id: number;
    title: string;
    body: string;
}

interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
}

export async function generateStaticParams() {
    return Array.from({ length: 10 }, (_, i) => ({
        id: String(i + 1)
    }));
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const [postRes, commentRes] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    ]);

    if (!postRes.ok) {
        throw new Error('Failed to fetch article by id');
    }

    const post: Post = await postRes.json();
    const comments: Comment[] = await commentRes.json();

    return (
        <div>
            <article className="w-md p-4">
                <h3 className="font-bold text-xl">{post.title}</h3>
                <p>{post.body}</p>
            </article>
            <section>
                <h2 className="w-lg p-4">Comments</h2>
                <div>
                    {comments.map(comment => (
                        <div key={comment.id} className="w-md p-4">
                            <h3 className="font-bold text-xl">{comment.name}</h3>
                            <p>{comment.email}</p>
                            <p>{comment.body}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}