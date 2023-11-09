import { Link, useNavigate } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react'

//CSS
import './css/Navbar.css'

const Navbar = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
   
    if(!search){
      return
    }
    navigate(`/search?q=${search}`)
    setSearch('')
  }

  return (
    <div>
      <nav id='navbar'>
      <h2>
        <Link to="/"><BiCameraMovie/>MoviesLib</Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="Busque um filme" 
        onChange={(e) => setSearch(e.target.value)} 
        value={search}
        />
        <button type="submit">
        <BiSearchAlt2/>
        </button>
      </form>
       
    </nav>
   
    </div>
  )
}

export default Navbar
