"use client";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <div className='font-mons font-thin tracking-[0.08rem] flex flex-row'>
      <Sidebar />
      <h1 className='font-mons bg-[#1C1D21]'>welcome to Photography</h1>
    </div>
  )
}
