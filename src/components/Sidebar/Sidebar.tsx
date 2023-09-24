import SidebarItem from "@/components/Sidebar/Item";
import ProfileCard from "@/components/Sidebar/ProfileCard";
import HorizontalLine from "@/components/Sidebar/HorizontalLine";
// Icons
import { GoCodeOfConduct } from "react-icons/go";
import { TfiWrite } from "react-icons/tfi";
import { RiShining2Line } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { BiLogoLinkedin } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc";
import { FaMediumM } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

 const SideBar = () => {
    return (
        <section className="border-r bg-zinc-50 p-1.5 w-60 xl:w-72">
            <nav>
                <ProfileCard title="Software Developer" picture="/assets/images/pp.png">Muhammed ERDAL</ProfileCard>
                <HorizontalLine />
                <SidebarItem Icon={GoCodeOfConduct} href="/">Home</SidebarItem>
                <SidebarItem Icon={TfiWrite} href="/articles">Articles</SidebarItem>
                <SidebarItem Icon={RiShining2Line} href="/bookmarks">Bookmarks</SidebarItem>
                <HorizontalLine />
                <SidebarItem Icon={HiOutlineMail} href="mailto:contact@erdal.net.tr" isExternal={true}>Mail</SidebarItem>
                <SidebarItem Icon={BiLogoLinkedin} href="https://www.linkedin.com/in/muhammederdal/" isExternal={true}>Linkedin</SidebarItem>
                <SidebarItem Icon={VscGithub} href="https://github.com/coderdal" isExternal={true}>Github</SidebarItem>
                <SidebarItem Icon={SiLeetcode} href="https://leetcode.com/coderdal/" isExternal={true}>Leetcode</SidebarItem>
                <SidebarItem Icon={FaMediumM} href="https://medium.com/@coderdal" isExternal={true}>Medium</SidebarItem>
            </nav>
        </section>
    );
};

export default SideBar;