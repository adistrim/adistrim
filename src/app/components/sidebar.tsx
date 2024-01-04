import React from 'react';
import { usePathname } from 'next/navigation';
import { CiFolderOn } from "react-icons/ci";
import { FaFolder, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoCameraOutline, IoCamera, IoBookOutline, IoBookSharp, IoMusicalNotes, IoMusicalNotesOutline } from "react-icons/io5";
import { MdBookmarks, MdOutlineBookmarks, MdArrowOutward } from "react-icons/md";
import NextLink from 'next/link';

const Sidebar: React.FC = () => {
    const pathname = usePathname();

    return (
        <div className="font-thin w-1/6 bg-gray-900 pt-[5rem] p-8 h-screen">
            <div className="flex items-center mb-4">
                <a href="/">
                    <img
                        src="me-white.png"
                        alt="Aditya Raj's illustration"
                        className="w-10 h-10 mr-3"
                    />
                </a>
                <a href="/">
                    <div className='flex flex-col'>
                        <p className="text-white text-sm">Aditya Raj</p>
                        <p className="text-gray-400 mb-0 pt-1 text-xs">CSE Undergrad</p>
                    </div>
                </a>
            </div>

            <div className="mt-10 mb-4">
                <h2 className="text-white text-xs text-gray-500 tracking-[0.1rem] mb-2">WHAT I CREATE</h2>

                <NextLink href="/projects" passHref className={`flex mt-[0.1rem] p-2 pl-3 pt-3 ${pathname === '/projects' ? 'bg-gray-800' : 'hover:bg-gray-800' } rounded-[0.5rem] transition duration-400`}>
                    {pathname === '/projects' ? <FaFolder size={16} /> : <CiFolderOn size={16} />}
                    <span className="text-[#E5E6E9] ml-2 text-sm">
                        Projects
                    </span>
                </NextLink>

                <NextLink href="/photography" passHref className={`flex mt-[0.1rem] p-2 pl-3 pt-3 ${pathname === '/photography' ? 'bg-gray-800' : 'hover:bg-gray-800' } rounded-[0.5rem] transition duration-400`}>
                    {pathname === '/photography' ? <IoCamera size={16} /> : <IoCameraOutline size={16} />}
                    <span className="text-[#E5E6E9] ml-2 text-sm hover:text-white">Photography
                    </span>
                </NextLink>
            </div>

            <div className="mt-10 mb-4">
                <h2 className="text-white text-xs text-gray-500 tracking-[0.1rem] mb-2">WHAT I CONSUME</h2>

                <NextLink href="/books" passHref className={`flex mt-[0.1rem] p-2 pl-3 pt-3 ${pathname === '/books' ? 'bg-gray-800' : 'hover:bg-gray-800' } rounded-[0.5rem] transition duration-400`}>
                    {pathname === '/books' ? <IoBookSharp size={16} /> : <IoBookOutline size={16} />}
                    <span className="text-[#E5E6E9] ml-2 text-sm hover:text-white">Books
                    </span>
                </NextLink>
                <NextLink href="/music" passHref className={`flex mt-[0.1rem] p-2 pl-3 pt-3 ${pathname === '/music' ? 'bg-gray-800' : 'hover:bg-gray-800' } rounded-[0.5rem] transition duration-400`}>
                    {pathname === '/music' ? <IoMusicalNotes size={16} /> : <IoMusicalNotesOutline size={16} />}
                    <span className="text-[#E5E6E9] ml-2 text-sm hover:text-white">Music
                    </span>
                </NextLink>
                <NextLink href="/bookmarks" passHref className={`flex mt-[0.1rem] p-2 pl-3 pt-3 ${pathname === '/bookmarks' ? 'bg-gray-800' : 'hover:bg-gray-800' } rounded-[0.5rem] transition duration-400`}>
                    {pathname === '/bookmarks' ? <MdBookmarks size={16} /> : <MdOutlineBookmarks size={16} />}
                    <span className="text-[#E5E6E9] ml-2 text-sm hover:text-white">Bookmarks
                    </span>
                </NextLink>
            </div>

            <div className="mt-10 mb-4">
                <h2 className="text-white text-xs text-gray-500 tracking-[0.1rem] mb-2">WHERE TO FIND ME</h2>

                <NextLink href="https://github.com/adistrim" target="_blank" passHref className='flex mt-[0.1rem] p-2 pl-3 pt-3 hover:bg-gray-800 rounded-[0.5rem] transition duration-400'>
                    <FaGithub size={16} />
                    <span className="text-[#E5E6E9] ml-2 text-sm hover:text-white">Github
                    </span>
                    <div className="flex-grow"></div>
                    <MdArrowOutward size={14} />
                </NextLink>
                <NextLink href="https://linkedin.com/in/adistrim" target='_blank' className='flex mt-[0.1rem] p-2 pl-3 pt-3 hover:bg-gray-800 rounded-[0.5rem] transition duration-400'>
                    <FaLinkedin size={16} />
                    <span className="text-[#E5E6E9] ml-2 text-sm hover:text-white">LinkedIn
                    </span>
                    <div className="flex-grow"></div>
                    <MdArrowOutward size={14} />
                </NextLink>
                <NextLink href="https://twitter.com/_adistrim_" target='_blank' className='flex mt-[0.1rem] p-2 pl-3 pt-3 hover:bg-gray-800 rounded-[0.5rem] transition duration-400'>
                    <FaTwitter size={16} />
                    <span className="text-[#E5E6E9] ml-2 text-sm hover:text-white">Twitter
                    </span>
                    <div className="flex-grow"></div>
                    <MdArrowOutward size={14} />
                </NextLink>
            </div>

            <div className="mt-[9.9rem] flex space-x-4">
                <a href="/legals" className="text-gray-400 hover:text-white text-xs">
                    Legals
                </a>
                <br />
                <a href="/changelog" className="text-gray-400 hover:text-white text-xs">
                    Changelog
                </a>
            </div>

            {/* <DarkLightToggleBtn /> */}
        </div>
    );
};

export default Sidebar;
