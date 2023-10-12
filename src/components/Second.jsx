import { forwardRef } from "react"

    
    const Second=(props,ref)=>{
        return (
            <div>
                Second here
            <input type="text" value={ref} />
               
            </div>
        )
        }

        export default forwardRef(Second)