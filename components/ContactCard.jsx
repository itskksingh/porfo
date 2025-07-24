import ContactItem from "./ContactItem";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";

const contacts = [
  { id: 1, title: "Phone", content: "+91-9798390050", icon: <IoIosPhonePortrait /> },
  { id: 2, title: "location", content: "Deoghar, India", icon: <FaLocationDot /> },
  { id: 3, title: "Email", content: "hello@kksingh.com", icon: <HiOutlineMail /> },
  { id: 4, title: "Birthday", content: "26 May 2001", icon: <FaCalendarAlt /> },
];

const ContactCard = () => {
  return (
    <div className='flex flex-col gap-0 bg-light-grey w-full rounded-lg p-5 divide-y divide-slate-300'>
      {contacts.map((c) => (
        <div key={c.id} className='py-3'>
          <ContactItem icon={c.icon} title={c.title} content={c.content} />
        </div>
      ))}
    </div>
  );
};

export default ContactCard;
