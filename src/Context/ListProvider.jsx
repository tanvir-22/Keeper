import React, { Children, createContext, useState } from 'react'
import { toast } from 'react-toastify';

export const ListContext = createContext();
const ListProvider = ({children}) => {
   const [ListArrayState,setListArrayState] = useState([]);

   const handleListArray = (friendData,action)=>{
        toast.success(`${action} with ${friendData.name}`)
        setListArrayState([...ListArrayState,{...friendData,action}])

   }

   const contextObj = {
    ListArrayState,setListArrayState,handleListArray
   }
  return (
    <ListContext.Provider value={contextObj}>
        {children}
    </ListContext.Provider>
  )
}

export default ListProvider