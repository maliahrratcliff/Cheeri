import React from 'react'
import '../../App.css'
import ProductCards from './ProductCards';
import Footer from '../Footer';

function Products (){
    return (
        <>
            <h1 className='products'>Products</h1>
            <ProductCards/>
        </>
    )
}

export default Products;