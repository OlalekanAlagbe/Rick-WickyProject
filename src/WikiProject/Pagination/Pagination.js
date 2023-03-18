import React from 'react'
import ReactPaginate from 'react-paginate';
import {useEffect, useState} from 'react'

const Pagination = ({setPageNumber, pageNumber, info}) => {

    let [width,setWidth] = useState(window.innerWidth);

    let updateDimension = ()=>{
      setWidth(window.innerWidth)
    }

    useEffect(()=>{
      window.addEventListener('resize', updateDimension )
          return ()=> window.removeEventListener('resize', updateDimension )
    },[])
        
      return <> 
                <style jsx>
                      {`
                        @media (max-width:768px){
                          .next, .prev{
                              display:none;
                          }
                          .pagination{
                            font-size:14px;
                          }
                        }
                      
                      `}
                </style>

                <ReactPaginate 
                className=" color pagination gap-4 my-4 justify-content-center" 
                forcePage={pageNumber===1? 0 : pageNumber-1}
                nextLabel="Next"
                previousLabel="Prev"
                previousClassName="btn btn-dark prev"
                nextClassName="btn btn-dark next"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                activeClassName="active"
                marginPagesDisplayed={width < 576 ? 1 : 2}
                pageRangeDisplayed={width < 576 ? 1 : 2}
                onPageChange={(data)=>{
                  setPageNumber(data.selected+1)
                }}
                pageCount={info?.pages}/>
              </>
}

export default Pagination




// {/* <div className='d-flex justify-content-center gap-5 my-5 container'>
//       <button onClick={prev} className='btn btn-primary'>Prev</button>
//       <button onClick={next} className='btn btn-primary'>Next</button>
//     </div> */}





// let next = () => {
//   setPageNumber(x=>x+1)
// }

// let prev = () => {
//   if(pageNumber===1) 
//   return
//   setPageNumber(x=>x-1)
// }
