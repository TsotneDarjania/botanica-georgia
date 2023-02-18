import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from "./products.module.css"

const Products = () => {

    const [products, setProducts] = useState({})
    const [page, setPage] = useState(1)

    useEffect( () => {
        fetch("/products/page/" + page).then(
            response => response.json()
        ).then(
        data => {
            setProducts(data)
        })
    }, [page])

    const getProducts = () => {
        let productItems = [];

        if(products.image !== undefined){
            for (let i = 0; i < products.image.length; i++) {

                let img = "http://localhost:3001/productImages/"+products.image[i];

                let productItem = 
                <div key={"product_key_"+i} className={style.productBox}>
                    <div style={{backgroundImage : 'url(' + img + ')'}} className={style.productImage}></div>
                    <p className={style.productName}> {products.name[i]} </p>
                    <p className={style.productPrice}> {products.price[i]}₾ </p>
                </div>

                productItems.push(productItem)
            }  
        }

        return productItems;
    }

  return (
    <div className={style.products}>
        <h1> ჩვენი პროდუქტი </h1>
        <div className={style.productsContainer}>
            {
                getProducts()
            }
        </div>
        <div className={style.pageButtons}>
            <button className={style.pageButton}> 1</button>
            <button className={style.pageButton}> 2</button>
            <button className={style.pageButton}> 3</button>
        </div>
    </div>
  )
}

export default Products