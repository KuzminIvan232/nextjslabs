'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
    const pathname = usePathname();
    // console.log(pathname);
    return (
        <Link
            href={href}
            className={clsx(
                'inline-block p-1.5 rounded-md',
                {
                    'bg-sky-200': pathname === href
                }
            )}
        >
            {children}
        </Link>
    )
}