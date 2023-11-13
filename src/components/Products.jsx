import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'



const Products = () => {
const [products,setProducts]=useState([])

const dataFetch=async()=>{
const response =await fetch("https://fakestoreapi.com/products")
const data=await response.json();
setProducts(data);
}

useEffect(()=>{
    dataFetch();
},[])

  return (
    <>
    <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
    {
        products.map((item)=>{
            return(
                <div class="card" style={{width: "18rem"}}>
    <img src={item.image} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{item.title}</h5>
      <p class="card-text">{item.category}</p>
      <Link to={`/products/${item.id}`} class="btn btn-warning">{item.price}</Link>
    </div>
  </div>
            )
        })
    }
    </div>
    </>
  )
}

export default Products