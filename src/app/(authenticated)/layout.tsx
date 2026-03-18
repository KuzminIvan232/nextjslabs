import Link from 'next/link';
import NavLink from '../components/NavLink';

export default function AuthenticatedLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <div className="flex flex-col items-start">
                <NavLink
                    href="/articles"
                >
                    <p>Articles</p>
                </NavLink>
                <NavLink
                    href="/profile/settings"
                >
                    <p>Settings</p>
                </NavLink>
                <NavLink
                    href="/profile/security"
                >
                    <p>Security</p>
                </NavLink>
            </div>
            <div className="w-full h-screen flex flex-col items-center box-border">
                {children}
            </div>
        </div>
    )
}