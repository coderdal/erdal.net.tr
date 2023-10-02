"use client";
import ProfileCard from "@/components/Sidebar/ProfileCard";
import React, { useState, useEffect } from "react";
import MobileMenu from "@/components/Sidebar/MobileMenu";
import { usePathname } from "next/navigation";

// Icons
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const NavigationItem: React.FC = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpened(prev => !prev);
    };
    const closeMenu = () => {
        setIsMenuOpened(() => false);
    };

    const pathName = usePathname();

    useEffect(() => {
        closeMenu();
    }, [pathName]);

    return (
        <div className="hidden relative max-md:block mx-4">
            <ProfileCard title="Software Developer" picture="/assets/images/pp.png">Muhammed ERDAL</ProfileCard>
            <button className="absolute top-1.5 right-0 rounded transition-colors hover:bg-gray-200 text-2xl h-12 w-12" onClick={toggleMenu}>
                { isMenuOpened ? <IoMdClose className="m-auto" /> : <FiMenu className="m-auto" /> }
            </button>
            { isMenuOpened && <MobileMenu /> }
        </div>
    );
};

export default NavigationItem;