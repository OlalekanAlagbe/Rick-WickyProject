import React from 'react';
import styles from "./Search.module.scss";

const Search = ({ setSearch, setPageNumber }) => {

    let handleSearch = (e)=>{
        setPageNumber(1)
        setSearch(e.target.value)
    }

  return (
    <form className='d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5'>
        <input onChange={handleSearch} placeholder="Search for characters" type="text" className={styles.input}/>
        <button onClick={(e)=>{e.preventDefault()}} className={`btn btn-primary fs-5 ${styles.btn}`}>Search</button>
    </form>
  )
}

export default Search