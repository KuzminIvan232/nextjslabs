import FavoriteArticle from '@/app/components/FavoriteArticle';
import { Suspense } from 'react';

interface Post {
    id: number;
    title: string;
    body: string;
}

async function fetchFavoritePost(id: number): Promise<Post> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch post for id ${id}`);
    }
    return response.json();
}


export default async function FavoritePage() {
    const favoriteIds = [1, 5, 10];

    const posts = await Promise.all(
        favoriteIds.map(id => fetchFavoritePost(id))
    );

    return (
        <div>
            <h1 className="text-xl p-4">Favorite Articles Page</h1>
            <div>
                {posts.map(post => (
                    <Suspense fallback={<p>Loading post..</p>}>
                        <FavoriteArticle
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            body={post.body}
                        />
                    </Suspense>
                ))}
            </div>
        </div>
    )
}