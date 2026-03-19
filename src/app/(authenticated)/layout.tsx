import Link from 'next/link';
import NavLink from '../components/NavLink';

export default function AuthenticatedLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <div className="flex justify-center items-center p-2">
                <NavLink
                    href="/profile/settings"
                    size={{ text: "sm", width: "32", height: "12" }}
                >
                    <p>Settings</p>
                </NavLink>
                <NavLink
                    href="/articles"
                >
                    <p>Articles</p>
                </NavLink>
                <NavLink
                    href="/profile/security"
                    size={{ text: "sm", width: "32", height: "12" }}
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