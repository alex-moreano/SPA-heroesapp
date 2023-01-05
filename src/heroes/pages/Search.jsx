import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';
import { HeroCard } from '../components/HeroCard';
import { getHeroesByName } from '../helpers';

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {q=''} = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const {searchText, onInputChange} = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if(searchText.trim().lenght <= 1) return;

    navigate(`?q=${searchText}`);
  }
  return (
    <div>
        <h1>Search</h1>
        <hr />
        <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input value={searchText} onChange={onInputChange} type="text" name="searchText" id="" placeholder='Search a hero...' className='form-control' autoComplete='off'/>
            <button className='btn btn-outline-primary mt-1'>Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            (q === '')?
            <div className='alert alert-primary'>
              Search a hero
            </div>
            :
            (heroes.length === 0) &&
            <div aria-label='alert-danger' className='alert alert-danger'>
              No hero found with <b>{q}</b>
            </div>

          }

          {
            heroes.map(hero =>( 
              <HeroCard key={hero.id} {...hero}/>
            ))
          }
        </div>
        </div>
    </div>
  )
}
