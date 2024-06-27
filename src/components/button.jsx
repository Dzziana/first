
export const Button = (props)=> {
    console.log(props);
    return (

        <button onClick={ ()=> props.setCount(props.count + 1)}
        >encrease</button>
    )
}
// ///////
const DecButton = ( { count , setCount})=>{
    return(
    <button onClick={()=>  setCount( count-1)}>decrease</button>)
}
export default DecButton;