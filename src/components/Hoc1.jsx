import { forwardRef } from "react"

  export const Hoc=({com})=>{
    return (
        <div>
            <Demo2 />
            {/* <Hocr com={Demo}/>
            <Hocg com={Demo}/>
            <Hocg com={Demo1}/> */}
        </div>
    )
}


export const Hocg=(props)=>{
    return(
        <div style={{color:'green'}}>hoc page  {<props.com />} </div>
    )
}

export const Hocr=(props)=>{
    return(
        <div style={{color:'red'}}>hoc page  {<props.com  />} </div>
    )
}
 const Demo=()=>{
    return(
        <div>this is demo page</div>
    )
}
const Demo1=()=>{
    return(
        <div>this is demo1 page</div>
    )
}





    