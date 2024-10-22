import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrAction, incrAction } from './redux/Products/products.action';

const Product = () => {
    let dispatch=useDispatch();
    let Product=useSelector((state)=>{
        return state
    })
    let incrHandler=()=>{
        dispatch(incrAction())
    }
    let decrHandler=()=>{
        dispatch(decrAction())
    }


  return (
    <div className='container mt-3'>
  <div className="row">
  <div className="col-12">
        <table className='table'>
            <thead className='bg-success text-white'>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>QTY</th>
                <th>Total</th>
            </thead>
            <tbody>
            <tr>
                <td>{Product.p_Name}</td>
                <td><img src={Product.image} width={'40px'} alt="" /></td>
                <td>{Product.price}</td>
                <td> <i className='fa fa-circle-minus' onClick={decrHandler} ></i> {Product.qty}  <i className='fa fa-circle-plus' onClick={incrHandler}></i> </td>
                <td>{Product.qty * Product.price}</td>
            </tr>
            </tbody>
        </table>
  </div>
  </div>
</div>
  )
}

export default Product