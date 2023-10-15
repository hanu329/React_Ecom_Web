import { useState,createContext } from "react"

export const DataContext=createContext();

export const DataContextProvider=({children})=>{
   const [f, setF]=useState(1)
   
   const handleF=(v)=>{
    setF(v)
   }

    return (
<DataContext.Provider value={{f,handleF}}>
  {children}
</DataContext.Provider>
    ) 
}