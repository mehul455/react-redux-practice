import React,{useState} from 'react'
import {connect} from 'react-redux'
import {buyBook} from '../reduxx'
// koi bhi value get karr ni hai as a prop call  kar skte hai (state ki vlaue map ke thorrgh pass kar na)


const mapStatetoProps=(state)=>{
                return{
                  numberOfBooks:state.numberOfBooks
                }         
}

const mapDispatchtoProps=(dispatch)=>{
  return{
    // props value
    buyBook:(num)=>{
      dispatch(buyBook(num))
    }
  }
}

const BookContainer = (props) => {
  const [num, setNum]=useState(1)
  return (
    <>
       <h1>Number of Books {props.numberOfBooks} </h1>
       <input type='text' value={num} onChange={(e)=>setNum(e.target.value)}/>
       <button onClick={()=>props.buyBook(num)}>Buy{num} Book</button>
    </>
  )
}

export default connect(mapStatetoProps,mapDispatchtoProps) (BookContainer);