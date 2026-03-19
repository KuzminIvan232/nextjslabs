import { Card, CardContent, Typography, Container, Grid } from '@mui/material';

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
        <div className='bg-base rounded-md m-6'>
            <h1 className="p-4">Articles Page</h1>
            <h2 className="text-2xl p-4">Posts</h2>
            <Grid container spacing={2}>
                {posts.map((post) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
                        <Card sx={{ height: '100%', backgroundColor: 'var(--light-primary-color)' }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>{post.title}</Typography>
                                <Typography variant="body2">{post.body}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}