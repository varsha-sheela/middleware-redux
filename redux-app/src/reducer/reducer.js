const initialstate={
    age:20,
    arr:[]
}
const reducer=(state=initialstate,action)=>{
    const newstate={...state};
    switch(action.type){
        case "AGE_UP":
            return{
                ...state,
                age:state.age+action.value,
                arr:state.arr.concat({id:Math.random(),age:state.age+action.value})
            }
            break;
            case "AGE_DOWN":
                return{
                    ...state,
                    age:state.age-action.value,
                    arr:state.arr.concat({id:Math.random(),age:state.age-action.value})

                }
                break;
            case "DEL_AGE":
                return{
                    ...state,
                    arr:state.arr.filter((element,index)=>{
                        return element.id!=action.value;
                    })
                }
                break;
    }
return newstate;

};
export default reducer;