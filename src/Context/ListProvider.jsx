import React, { Children, createContext, useState } from 'react'

export const ListContext = createContext();
const ListProvider = ({children}) => {
   const [ListArrayState,setListArrayState] = useState([]);

   const handleListArray = (friendData,action)=>{

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