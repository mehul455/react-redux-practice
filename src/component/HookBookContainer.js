import React from 'react'
import {buyBook} from '../reduxx/book/bookAction'

import { useSelector, useDispatch } from 'react-redux'
const HookBookContainer = () => {
  const numberOfBooks =useSelector((state)=>state.numberOfBooks)
const dispatch = useDispatch();
  return (
    <> 
       <h1>Number of Books {numberOfBooks} </h1>
       <button onClick={()=>dispatch(buyBook())}>Click</button>
    </>

  )
}

export default HookBookContainer