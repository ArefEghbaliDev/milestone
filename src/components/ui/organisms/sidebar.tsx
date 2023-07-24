import SidebarItem from '../atoms/sidebar-item';
import { FiBarChart2, FiBook, FiCalendar, FiCloudLightning, FiHome, FiUsers } from 'react-icons/fi';

export default function sidebar() {
    return (
        <div className="border-r border-dark-100 pr-5 py-5 h-full w-[220px]">
            <h2 className="font-bold mb-8 pl-5">Milestone</h2>
            <span className=" opacity-50 pl-5">Dashboard</span>
            <SidebarItem icon={<FiHome size={18} className="mr-3" />} text="Dashboard" linkTo="/" isActive={true} />
            <SidebarItem icon={<FiHome size={18} className="mr-3" />} text="Boards" linkTo="/board" isActive={false} />
            <SidebarItem icon={<FiHome size={18} className="mr-3" />} text="Roadmap" linkTo="/roadmap" isActive={false} />
            <SidebarItem icon={<FiUsers size={18} className="mr-3" />} text="Members" linkTo="/members" isActive={false} />
            <SidebarItem icon={<FiCalendar size={18} className="mr-3" />} text="Schedule" linkTo="/schedule" isActive={false} />
            <span className=" opacity-50 pl-5 mt-5 block">AI</span>
            <SidebarItem icon={<FiUsers size={18} className="mr-3" />} text="AI Insight" linkTo="/members" isActive={false} />
            <SidebarItem icon={<FiCloudLightning size={18} className="mr-3" />} text="Brainstorming" linkTo="/members" isActive={false} />
            <span className=" opacity-50 pl-5 mt-5 block">Analytics</span>
            <SidebarItem icon={<FiBarChart2 size={18} className="mr-3" />} text="Statics" linkTo="/statics" isActive={false} />
            <SidebarItem icon={<FiBook size={18} className="mr-3" />} text="Reports" linkTo="/report" isActive={false} />
        </div>
    );
}
