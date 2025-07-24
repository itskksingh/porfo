import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";

// Define social data with individual colors
const social = [
  {
    id: 1,
    href: "https://facebook.com/kksingh.dev",
    icon: FaFacebookF,
    color: "text-[#3b5998]",
  },
  {
    id: 2,
    href: "https://instagram.com/kksingh.dev",
    icon: AiFillInstagram,
    color: "text-[#E1306C]",
  },
  {
    id: 3,
    href: "https://github.com/itskksingh",
    icon: IoLogoGithub,
    color: "text-[#181616]",
  },
  {
    id: 4,
    href: "https://twitter.com/kksingh_dev",
    icon: FaTwitter,
    color: "text-[#55acee]",
  },
];

const Socialicons = () => {
  return (
    <div className='flex gap-5'>
      {social.map((s) => {
        const Icon = s.icon;
        return (
          <Link
            href={s.href}
            key={s.id}
            target='_blank'
            className={`group bg-light-grey p-3 rounded-xl shadow-md transition-all duration-300 hover:bg-main-blue`}>
            <Icon className={`text-xl transition-colors duration-300 ${s.color} group-hover:text-white`} />
          </Link>
        );
      })}
    </div>
  );
};

export default Socialicons;
