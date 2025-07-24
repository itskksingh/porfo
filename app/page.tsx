import { HiMiniArrowTrendingDown } from "react-icons/hi2";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import ServiceCard from "../components/ServiceCard.jsx";

const services = [
  {
    id: 1,
    title: "React Development",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    icon: FaReact,
    bgColor: "bg-rose-50",
    iconColor: "text-rose-700",
  },
  {
    id: 2,
    title: "NextJs Development",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    icon: RiNextjsFill,
    bgColor: "bg-green-50",
    iconColor: "text-green-700",
  },
  {
    id: 3,
    title: "Tailwind Styling",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    icon: RiTailwindCssFill,
    bgColor: "bg-pink-50",
    iconColor: "text-pink-700",
  },
  {
    id: 4,
    title: "NodeJs",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    icon: FaNodeJs,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-700",
  },
  {
    id: 5,
    title: "Web Development",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    icon: FaCode,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-700",
  },
  {
    id: 6,
    title: "Android App",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    icon: IoLogoAndroid,
    bgColor: "bg-amber-50",
    iconColor: "text-amber-700",
  },
];

const Home = () => {
  return (
    <div className='bg-white rounded-2xl p-10'>
      <div className='flex items-start gap-5 mb-4'>
        <h1 className='text-4xl text-black font-semibold'>About Me</h1>
        <HiMiniArrowTrendingDown className='w-10 h-10 text-main-blue' />
      </div>
      <p className='text-dark-grey text-base'>
        I&apos; m Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print
        media. I enjoy turning complex problems into simple, beautiful and intuitive designs. <br />
        <br />
        My aim is to bring across your message and identity in the most creative way. I created web design for many
        famous brand companies.
      </p>
      <h1 className='text-4xl text-black font-semibold mt-10'> What I Do</h1>

      <div className='grid grid-cols-1 md:grid-cols-2  gap-6 mt-6'>
        {services.map((s) => (
          // const Icon = s.icon;
          <ServiceCard
            key={s.id}
            title={s.title}
            content={s.content}
            icon={s.icon}
            bgColor={s.bgColor}
            iconColor={s.iconColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
