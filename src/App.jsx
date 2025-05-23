import React from 'react'
import './App.css';
import NoteInput from './component/NoteInput';
import NoteCard from './component/NoteCard';

const App = () => {
  return (
    <div className='h-screen w-screen overflow-hidden box-border'>
      <div className='h-[40vh] w-8/10 m-2'>
          <div role="tablist" className="tabs tabs-lift text-[#fe9b72]">
            <a role="tab" className="tab tab-active [--tab-bg:#1D232A] [--tab-border-color:#fe9b72]">Notes</a>
            <a role="tab" className="tab [--tab-bg:#1D232A] [--tab-border-color:#fe9b72] ">Money</a>
            <a role="tab" className="tab [--tab-bg:#1D232A] [--tab-border-color:#fe9b72] ">To-Do</a>
          </div>
          <NoteInput />
      </div>
      <div className='notes-container h-[60vh] w-8/10 m-2 py-5 overflow-y-auto'>
        <div className='flex flex-wrap gap-2 ml-12'>
          <NoteCard color="bg-[#fec971]"/>
          <NoteCard color="bg-[#fe9b72]"/>
          <NoteCard color="bg-[#e3ef8f]"/>
          <NoteCard color="bg-[#b693fd]"/>
          <NoteCard color="bg-[#00d4fe]"/>
          <NoteCard color="bg-[#fec971]"/>
          <NoteCard color="bg-[#fe9b72]"/>
          <NoteCard color="bg-[#e3ef8f]"/>
          <NoteCard color="bg-[#b693fd]"/>
        </div>
      </div>
    </div>
  )
}

export default App
