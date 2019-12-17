import React,{Component} from "react";
import "./App.css";
import {connect} from "react-redux";
class App extends React.Component{
render(){
  return(
    <div className="App">
<h1>Age:<span style={{color:'red'}}>{this.props.age}</span></h1>
<button onClick={this.props.onageup}>AGEUP</button>
<button onClick={this.props.onagedown}>AGEDOWN</button>
<h1>{this.props.arr.map((el)=>(
  <p onClick={()=>this.props.delage(el.id)}>{el.age}</p>

))}
 
</h1>
    </div>
  )
}
};
const receive=(state)=>{
return{
  age:state.age,
  arr:state.arr
}
};
const send=(dispatch)=>{
  return{
    onageup:()=>dispatch({type:"AGE_UP",value:1}),
    onagedown:()=>dispatch({type:"AGE_DOWN",value:1}),
    delage:(id)=>dispatch({type:"DEL_AGE",value:id})
  }
};



export default connect(receive,send)(App);
