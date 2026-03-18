interface FavoriteArticleProps {
    id: number;
    title: string;
    body: string;
}

export default function FavoriteArticle({ id, title, body }: FavoriteArticleProps) {
    return (
        <article className="w-md p-4">
            <h3 className="font-bold text-xl">{id}, {title}</h3>
            <p>{body}</p>
        </article>
    )
}