import React, { useEffect } from 'react'
import Movies from '../Movies/Movies'
import Product from '../Products/Product'
import Articles from '../Articles/Article'
import './home.css'
import { Link } from 'react-router-dom' 
import Skills from '../Skills/Skills'
import FooterComponent from '../../Component/Footer/Footer'
export default function Home() {
 
  return (
   <> 
    {/* <h2 className='homeedit pt-5' ><Link to={"/movies"}>Movies Page</Link></h2> */}
   <Movies></Movies>
      {/* <h2 className='homeedit pt-5' ><Link to={"/articles"}>Articles Page</Link></h2> */}
      {/* <Articles></Articles> */}
   {/* <h2 className='homeedit pt-5' ><Link to={"/product"}>Products Page</Link></h2> */}
   {/* <Product></Product>
<Skills></Skills>
<FooterComponent></FooterComponent> */}
   </>
  )
}
