import React from 'react'
import { HeroCard } from '../components/HeroCard'

export const Search = () => {
  return (
    <div>
        <h1>Search</h1>
        <hr />
        <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form action="">
            <input type="text" name="searchText" id="" placeholder='Search a hero...' className='form-control' autoComplete='off'/>
            <button className='btn btn-outline-primary mt-1'>Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className='alert alert-primary'>
            Search a hero
          </div>
          <div className='alert alert-danger'>
            No hero found with <b>ABC</b>
          </div>
         {/*  <HeroCard />*/}
        </div>
        </div>
    </div>
  )
}
