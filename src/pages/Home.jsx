import React from 'react'
//import components
import {useGlobalContext} from '../context'
import SearchForm from '../components/SearchForm'
import CocktailList from '../components/CocktailList'
import Loading from '../components/Loading'
export default function Home() {
  const {isLoading} = useGlobalContext()
  return (
    <main>
      <SearchForm/>
      { isLoading ? <Loading/> :<CocktailList/>}
    </main>
  )
}
