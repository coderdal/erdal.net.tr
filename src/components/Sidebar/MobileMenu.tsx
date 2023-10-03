import SidebarItem from "@/components/Sidebar/Item";
import HorizontalLine from "@/components/Sidebar/HorizontalLine";

// Icons
import { GoCodeOfConduct } from "react-icons/go";
import { TfiWrite } from "react-icons/tfi";
import { RiShining2Line } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { BiLogoLinkedin, BiLogoTypescript } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc";
import { FaMediumM } from "react-icons/fa";
import { SiLeetcode, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const NavigationItem: React.FC = () => {
    return (
        <div className="w-full h-screen absolute bg-white overflow-hidden animate__animated animate__fadeInDown">
            <nav>
                <SidebarItem Icon={GoCodeOfConduct} href="/">Home</SidebarItem>
                <SidebarItem Icon={TfiWrite} href="/articles">Articles</SidebarItem>
                <SidebarItem Icon={RiShining2Line} href="/bookmarks">Bookmarks</SidebarItem>
                <HorizontalLine />
                <SidebarItem Icon={HiOutlineMail} href="mailto:contact@erdal.net.tr" isExternal={true}>Mail</SidebarItem>
                <SidebarItem Icon={BiLogoLinkedin} href="https://www.linkedin.com/in/muhammederdal/" isExternal={true}>Linkedin</SidebarItem>
                <SidebarItem Icon={VscGithub} href="https://github.com/coderdal" isExternal={true}>Github</SidebarItem>
                <SidebarItem Icon={SiLeetcode} href="https://leetcode.com/coderdal/" isExternal={true}>Leetcode</SidebarItem>
                <SidebarItem Icon={FaMediumM} href="https://medium.com/@coderdal" isExternal={true}>Medium</SidebarItem>
                <div className="info mt-6 flex justify-between text-gray-600 text-sm select-none">
                    <span>v1.0.0</span>
                    <span className="flex items-center gap-1 text-xs"><TbBrandNextjs className="text-xl" />&<BiLogoTypescript className="text-xl" />&<SiTailwindcss className="text-xl" /></span>
                </div>
            </nav>
        </div>
    );
};

export default NavigationItem;