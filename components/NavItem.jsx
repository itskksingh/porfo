import Link from "next/link";

const NavItem = ({ icon, title, href }) => {
  return (
    <Link
      href={href}
      className='p-2 bg-light-grey flex flex-col items-center justify-center cursor-pointer text-dark-grey hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white rounded-xl transition-all duration-300 w-10 h-10 '>
      {icon}
      {/* <span className='text-sm font-medium'>{title}</span> */}
    </Link>
  );
};

export default NavItem;
