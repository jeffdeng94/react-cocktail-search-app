import React, {useRef,useEffect, useCallback} from 'react'
import {useGlobalContext} from '../context'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export default function SearchForm() {
  const searchInput = useRef()
  const  { setIsLoading, setCocktails, searchTerm, setSearchTerm } = useGlobalContext()
 
  const updateSearchTerm = ()=> {
    setSearchTerm(searchInput.current.value)   
  }
  //useCallback to avoid dead loop
  const searchCocktail = useCallback(()=> {
    //fetch drinks
    const fetchDrinks = async ()=> {
      setIsLoading(true)
      try {
        const response = await fetch(`${url}${searchTerm}`)
        const data = await response.json()
        const {drinks} = data
        if(drinks) {
          const cocktailList = drinks.map(item=>{
            const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item
            return {
              id:idDrink,
              name:strDrink,
              image:strDrinkThumb,
              info:strAlcoholic,
              glass:strGlass,
            }
          })
          //update cocktail list to context
          setCocktails(cocktailList)
        } else{
          setCocktails([])
        }
        setIsLoading(false)
      } catch (error) {
        console.log(error);
        setIsLoading(false)
      }
    }

    fetchDrinks()
  },[searchTerm,setCocktails,setIsLoading])

  useEffect(()=>{
    searchCocktail()
  },[searchCocktail])
  
  //auto focus when render the first time
  useEffect(()=>{
    searchInput.current.focus()
  },[])

  return (
    <section className='section search'>
      <form className="search-form" onSubmit={e=>e.preventDefault()}>
        <div className="search-form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text" id='name' ref={searchInput} onChange={updateSearchTerm} />
        </div>
      </form>
    </section>
  )
}
