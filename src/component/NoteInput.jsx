import React from 'react'
import '../App.css';

const NoteInput = () => {
  return (
    <div className='mx-12 my-5 flex flex-col gap-3'>
      <form className="note-input py-2 px-5 bg-green-400 rounded-lg bg-zinc-800">
        <input type='text' placeholder='Title' id='Title' className='text-lg font-semibold w-full outline-0 border-b-1'></input>
        <textarea type='text' placeholder='Type Your Note...' id='Notes' rows={4} cols={20} className='text-md font-medium w-full outline-0 mt-1'></textarea>
      </form>
      <div className='buttons px-1'>
        <button className="btn bg-red-500">Add Notes</button>
      </div>
    </div>
  )
}

export default NoteInput
