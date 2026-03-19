import Link from 'next/link';
import NavLink from '../../components/NavLink';


export default function ArticlesLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            <div className="flex justify-center">
                <NavLink
                    href="/articles/create"
                >
                    <p>Create</p>
                </NavLink>
                <NavLink
                    href="/articles/favorite"
                >
                    <p>Favorite</p>
                </NavLink>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}