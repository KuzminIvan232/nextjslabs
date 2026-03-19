'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import styles from './NavLink.module.css';

type Text = "sm" | "lg" | "xl";

type Size = {
    text: Text,
    width: string,
    height: string
}

export default function NavLink({
    href,
    children,
    size = { text: "xl", width: "28", height: "16" } }:
    {
        href: string,
        children: React.ReactNode,
        size?: Size
    }) {
    const pathname = usePathname();
    const isActive = pathname === href;
    // console.log(pathname);
    return (
        <Link
            href={href}
            className={clsx(
                `w-${size.width} h-${size.height} text-${size.text}`,
                styles.link,
                {
                    [styles.active]: isActive
                }
            )}
        >
            {children}
        </Link>
    )
}