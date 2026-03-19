import styles from './FavoriteArticle.module.css';

interface FavoriteArticleProps {
    id: number;
    title: string;
    body: string;
}

export default function FavoriteArticle({ id, title, body }: FavoriteArticleProps) {
    return (
        <article className={styles.article}>
            <h3 className="font-bold text-xl">{id}, {title}</h3>
            <p>{body}</p>
        </article>
    )
}