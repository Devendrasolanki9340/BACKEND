
const NotesCard = ({ note,deleteNote,noteForUpdate }) => {
  return (
    <div className="w-[30%] border border-white flex-col gap-4 p-2 flex   rounded-xl">
      <h1>{note.title}</h1>
      <p className="text-xs">
        {note.description.length > 10
          ? note.description.substring(0, 20)
          : note.description}
      </p>
      <div onClick={()=> noteForUpdate(note)}
      className="flex justify-between gap-5 m-2">
        <button className="p-1 bg-yellow-600   rounded text-white text-sm">
          Update
        </button>
        <button onClick={()=> deleteNote(note._id)}
         className="p-1 bg-red-600 rounded text-white">Delete</button>
      </div>
    </div>
  );
};

export default NotesCard;
