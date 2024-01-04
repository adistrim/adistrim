"use client";
import Sidebar from './components/sidebar';
import React, { useState } from 'react';
import NextLink from 'next/link';
import { MdArrowOutward } from "react-icons/md";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";


export default function Home() {
  const [inputs, setInputs] = useState({});
  const [state, setState] = useState({show: true});

  return (
    <div className='fixed top-0 left-0 w-full h-full overflow-auto bg-gray-900 font-mons font-thin tracking-[0.05rem] flex flex-row'>
      <Sidebar />
      <div className="relative 80vh w-4/5 overflow-auto bg-gray-800 mt-16 mb-16 rounded-md">
        <div className="absolute top-0 right-0 bottom-0 left-0 overflow-auto p-4">
          <div className="xl:grid m-[7rem] xl:grid-cols-2 xl:gap-20">
            <h1 className="text-[1.5rem] font-bold leading-[2.1rem] text-text-lvl-1">
              Hey, I am <RoughNotation type="underline" color='yellow' show={state.show}>
              <span className='cursor-pointer hover:font-gray-900'>Aditya</span>  
              </RoughNotation> –  an aspiring Software Engineer
              doing bachelors in Jaipur, who enjoys working at the intersection of code, design, and art.
            </h1>

            <h2 className="text-md text-text-lvl-2">
              This personal website is my own little space on the internet
              where I want to share my interests and passions with others,
              without having to please the algorithms of social media
              platforms or follow any other rules. I hope you enjoy
              exploring my digital living room as much as I enjoyed
              creating it.
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

