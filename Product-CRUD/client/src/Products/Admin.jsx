import { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Admin = () => {
  let [products,setProducts]=useState([]);

  let getProducts=()=>{
    Axios.get('http://127.0.0.1:5000/api/products')
    .then((response)=>{
      setProducts(response.data)
    })
    .catch(()=>{})
  }
  useEffect(()=>{
    getProducts()
  },[])

  let deleteProduct=(id)=>{
    let url=`http://127.0.0.1:5000/api/products/${id}`
    Axios.delete(url).then(()=>{
      getProducts()
    }).catch(()=>{})
  }
  return (
    <div>
        <h1>Admin component</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
            <Link to='/createProduct' className='btn btn-success' >Create new product</Link>
            </div>
          </div>
          <div className="row">
            <pre>{JSON.stringify(products)}</pre>
            {
              products.length>0 ? <>
              <div className="col-md-8">
               <table className="table">
                <thead className="bg-primary text-white">
                  <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Qty</td>
                    <td>Image</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    products.map((product)=>{
                      return <tr>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.qty}</td>
                        <td><img src={product.image} alt="" width={'30px'} /></td>
                        <td><Link to={`/updateProduct/${product._id}`} className='btn btn-warning mr-2'>Update</Link><button className='btn btn-danger' onClick={deleteProduct.bind(null,product._id)}>Delete</button></td>
                      </tr>
                    })
                  }
                </tbody>
               </table>
              </div>
              </>:<>NO DATA</>
            }
          </div>
        </div>
    </div>
  )
}

export default Admin