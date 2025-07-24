import { FaAddressCard } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import NavItem from "../components/NavItem";

const menu = [
  {
    id: 1,
    title: "About",
    href: "/",
    icon: <FaAddressCard className='w-8 h-8' /> ,
  },
  {
    id: 2,
    title: "Resume",
    href: "resume",
    icon: <IoDocumentText className='w-8 h-8' />,
  },
  {
    id: 3,
    title: "Works",
    href: "works",
    icon: <FaBriefcase className='w-8 h-8' />,
  },
  {
    id: 4,
    title: "Blog",
    href: "blog",
    icon: <FaRegNewspaper className='w-8 h-8' />,
  },
  {
    id: 5,
    title: "Contact",
    href: "contact",
    icon: <FaAddressBook className='w-8 h-8' /> ,
  },
];

const Navigation = () => {
  return (
    <div className='w-fit bg-white rounded-2xl text-red-600 text-5xl p-6 gap-6 flex flex-col'>
      {menu.map((m) => (
        <NavItem key={m.id} icon={m.icon} title={m.title} href={m.href} />
      ))}
    </div>
  );
};

export default Navigation;
