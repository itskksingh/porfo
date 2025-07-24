import Image from "next/image";
import React from "react";
import Socialicons from "./Socialicons";
import ContactCard from "./ContactCard";
import Profile from "../public/img/people.png";

const SideProfile = () => {
  return (
    <div className='relative flex flex-col items-center max-w-md mx-auto'>
      <div className='mx-15 md:mx-5 -mb-35 md:-mb-30 z-10'>
        <Image src={Profile} alt='main-profile' className='rounded-2xl object-cover ' />
      </div>

      <div className='pt-45 w-full bg-white rounded-3xl shadow-lg px-6 pb-6 flex flex-col items-center justify-center gap-5'>
        <h1 className='text-3xl font-semibold text-gray-800'>K K Singh</h1>
        <p className='text-gray-500 text-sm mb-4'>Full Stack Web Developer</p>
        <Socialicons />
        <ContactCard />
      </div>
    </div>
  );
};

export default SideProfile;
