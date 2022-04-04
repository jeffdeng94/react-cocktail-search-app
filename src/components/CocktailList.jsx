import React from 'react'
import Cocktail from './Cocktail'
import {useGlobalContext} from '../context'

export default function CocktailList() {
  const {cocktails} = useGlobalContext()


  if(cocktails.length < 1){
    return <h2 className="section-title">no cocktails matched your search critera</h2>

  }

  return (
    <section>
      <h2 className='section-title'>
        cocktails
      </h2>
      <div className="cocktails-center">
        {cocktails.map(item=>{
          return <Cocktail key={item.id} {...item}/>
        })}
      </div>
    </section>
  )
}
