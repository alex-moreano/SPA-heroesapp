import React, { useMemo } from 'react'
import { getHeroesByPublusher } from '../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
  const heroes = useMemo(()=>getHeroesByPublusher(publisher), [publisher]);
  
    return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {
            heroes.map(heroe=>{
              return  <HeroCard key={heroe.id}
                                {...heroe}
              />
            })
        }
    </div>
  )
}
