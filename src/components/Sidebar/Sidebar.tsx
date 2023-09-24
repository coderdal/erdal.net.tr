import SidebarItem from "@/components/Sidebar/Item";
import ProfileCard from "@/components/Sidebar/ProfileCard";
// Icons
import { GoCodeOfConduct } from "react-icons/go";
import { TfiWrite } from "react-icons/tfi";
import { RiShining2Line } from "react-icons/ri";

export default function SideBar() {
    return (
        <section className="w-64 p-1.5">
            <nav>
                <ProfileCard title="Software Developer" picture="/assets/images/pp.png">Muhammed ERDAL</ProfileCard>
                <SidebarItem Icon={GoCodeOfConduct} href="/">Home</SidebarItem>
                <SidebarItem Icon={TfiWrite} href="/articles">Articles</SidebarItem>
                <SidebarItem Icon={RiShining2Line} href="/bookmarks">Bookmarks</SidebarItem>
            </nav>
        </section>
    );
}