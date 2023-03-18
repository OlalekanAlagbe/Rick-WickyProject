import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = ({setPageNumber, setStatus, setGender, setSpecies}) => {

    let clear = () => {
      setPageNumber("");
      setStatus("");
      setGender("");
      setSpecies("");
      window.location.reload(false);
    }

  return (
    <div className='col-lg-3 col-12 mb-5'>
      <div className='text-center fs-4 mb-2 fw-bold'>Filters</div>
      <div onClick={clear} style={{cursor:"pointer"}}className='text-center mb-4 text-primary text-decoration-underline'>Clear Filters</div>
      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />  
        <Gender setPageNumber={setPageNumber} setGender={setGender} />      
      </div>
    </div>
  )
}

export default Filters
