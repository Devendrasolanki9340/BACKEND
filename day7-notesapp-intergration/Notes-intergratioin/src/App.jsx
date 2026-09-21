
import {useState} from "react";
import axios from "axios"
import { useEffect } from "react";
import NotesCard from "./components/NotesCard";
const App = () => {
  const [allNotes, setAllNotes] = useState([])
  const [updateNoteId, setUpdateNoteId] = useState(null)

  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
  })

  const handleChange = (e)=>{
    setFormValue((prev)=> ({...prev, [e.target.name]:e.target.value}))
  }

  

  let getAllNotes = async()=>{
    try {
    let res = await axios.get("http://localhost:3000/notes/allNotes")
    console.log(res)
    setAllNotes (res.data.data)
    } catch (error) {
      console.log("error in get all notes api",error)
    }
  }
  useEffect(()=>{
    getAllNotes()
  },[])


  const handleSubmit = async (e)=>{
    e.preventDefault()
    console.log(formValue)


    if(updateNoteId){
    //  api call for Updateing note
    let res = await axios.put(`http://localhost:3000/notes/${updateNoteId}`,formValue)
  console.log(res)
  setUpdateNoteId (null)
    }else{
    //  api call for Create note
    let res = await axios.post("http://localhost:3000/notes/create",formValue)
  }
  // console.log(res)
  // }

    setFormValue({
      title:"",
      description:""
    })
    getAllNotes()
  }

  let deleteNote = async (id)=>{
    try {
      let res = await axios.delete(`http://localhost:3000/notes/${id}`)
      console.log(res)
      getAllNotes()
    } catch (error) {
      console.log("error in delete note",error)
    }
  }

  let noteForUpdate = (note)=>{
    console.log(note)
    setUpdateNoteId (note._id)
    setFormValue ({
      title :note.title,
      description : note.description,
    })

  }


  return (
    <div className="h-screen p-5 flex flex-col gap-5">
      <h1 className="text-3xl font-semibold">Notes App</h1>
      <form onSubmit={handleSubmit}
       className="w-70 gap-5  border border-white p-4 rounded-xl flex flex-col">
        <input  onChange={handleChange}
          name="title"
          value={formValue.title}
          className="p-2 outline-none text-xl rounded-xl border-white"
          type="text"
          placeholder="Title"
        />
        <input onChange={handleChange}
          name="description"
          value={formValue.description}
          className="p-2 outline-none text-xl rounded-xl border-white"
          type=" text"
          placeholder="Description"
          minLength={10}
          required
        />
        <button className="bg-blue-500 gap-2 text-white">{updateNoteId ? "Update note" : "Add note"}</button>
      </form>

      <div className=" flex gap-4 flex-wrap">
        {
          allNotes.map((val) => (
          <NotesCard key={val._id} note={val} deleteNote={deleteNote} noteForUpdate={noteForUpdate}/>
          ))}
      </div>
    </div>
  );
};

export default App;
