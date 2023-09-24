import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

interface NavigationItemProps {
    children: ReactNode;
    title?: string;
    picture: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ children, title, picture }) => {
    return (
        <Link href="/" className="navigation-item !gap-3 select-none">
            <Image src={picture} width={36} height={36} alt="Profile Picture" className="rounded-full -rotate-45 pointer-events-none"/>
            <div className="flex flex-col">
                <span className="text-sm font-medium">{ children }</span>
                <span className="text-xs tracking-wide">{ title }</span>
            </div>
        </Link>
    );
};

export default NavigationItem;