import React from 'react'
import {Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from '../../ui/components'
import { MarvelPage, DcPage, Hero, Search } from '../pages'

export const HeroesRoutes = () => {
  return (
    <div>
        <Navbar/>
        <div className='container'>
        <Routes>
            <Route path="marvel" element={<MarvelPage/>}/>
            <Route path="dc" element={<DcPage/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="hero/:id" element={<Hero/>}/>
            <Route path="/" element={<Navigate to='/marvel'/>}/>
        </Routes>
        </div>
    </div>
  )
}
