import React, { useContext, useState } from 'react'

const MyContext = React.createContext()

const MyContextProvider = props => {
  const [cocktails, setCocktails] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <MyContext.Provider value={{ cocktails, isLoading, setIsLoading, setCocktails, searchTerm, setSearchTerm }}>
      {props.children}
    </MyContext.Provider>
  )
}

//define a global context wrapper, wrap the useContext hook
//so that each component does not need to import useContext hook every time
const useGlobalContext = () => {
  return useContext(MyContext)
}
export { useGlobalContext, MyContextProvider }
