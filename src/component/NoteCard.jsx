import React from 'react'
import '../App.css';
import { FaRegBookmark,FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";

const NoteCard = (props) => {
  return (
    <div className={`note-card h-[160px] w-[277px] text-black ${props.color} box-border flex flex-col gap-2 px-4 py-3 rounded-lg`}>
        <div className='card-header flex justify-between'>
            <h1 className='title font-bold'>Title</h1>
            <FaRegBookmark />
        </div>
        <div className='card-content h-[10vh] overflow-hidden'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ducimus.
        </div>
        <div className='card-footer flex justify-between items-center'>
            <h4 className='text-red-700 font-semibold'>23-05-2025</h4>
            <div className='card-actions'>
                <FaEdit />
                <MdDelete />
                <SlOptionsVertical />
            </div>
        </div>
    </div>
  )
}

export default NoteCard
