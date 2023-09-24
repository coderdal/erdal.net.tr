import Link from "next/link";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { HiExternalLink } from "react-icons/hi";

interface NavigationItemProps {
    children: ReactNode;
    Icon: IconType;
    href: string;
    isExternal?: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ children, Icon, href, isExternal }) => {
    return (
        <Link href={href} className="navigation-item group select-none" target={isExternal ? "_blank" : "_self"}>
            <Icon className="text-lg" /> <span className="text-sm font-medium">{ children }</span> {isExternal && <HiExternalLink className="ml-auto text-slate-300 group-hover:text-slate-600 transition-colors" />}
        </Link>
    );
};

export default NavigationItem;