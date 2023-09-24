import Link from "next/link";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";

interface NavigationItemProps {
    children: ReactNode;
    Icon: IconType;
    href: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ children, Icon, href }) => {
    return (
        <Link href={href} className="navigation-item">
            <Icon className="text-lg" /> <span className="text-sm font-medium">{ children }</span>
        </Link>
    );
};

export default NavigationItem;