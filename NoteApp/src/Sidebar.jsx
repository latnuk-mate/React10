import React from 'react'

function Sidebar({notes, currentNote, setCurrentId, deleteNote}) {
  
  return (
    <div className='w-[20%] max-h-full h-[100vh] pt-8 bg-gray-100 relative'>
    <h4 className='text-center justify-center flex items-center gap-4 text-3xl'>NoteApp
      <span className='bg-gray-700 p-2 text-center text-white'>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-plus font-bold" viewBox="0 0 16 16">
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
    </svg>
      </span>
    </h4>
 
    <ul className='list-none text-center mt-4 sidebar--list'>
     {  
    notes && notes.map((note) => (
        <li 
        className={
      `${note.id === currentNote.id ? 
        "activeList" :
        ""}`}
          key={note.id}
        onClick={() => setCurrentId(note.id)}>
           {note.body.split("\n")[0]}
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16" onClick={deleteNote}>
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
  </svg>
        </li>
    ))}

  </ul>
  
  </div>
  )
}

export default Sidebar;