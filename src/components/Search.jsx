import {useState} from 'react'
import search from '../search.svg';
import { getMovie } from '../api'


function Search({ state }) {

    const [searchTerm, setSearchTerm] = useState("")

    return (
        <div className='search'>
            <input value={searchTerm} placeholder="Search a movie" onChange={(e)=> setSearchTerm(e.target.value)} />
            <img src={search} alt="Search" onClick={()=>{getMovie(searchTerm , state)}}/>
        </div>
    )
}

export default Search