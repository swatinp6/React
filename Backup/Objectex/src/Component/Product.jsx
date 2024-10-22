import React, { Component } from 'react'
import Cart from './Cart'

export class Product extends Component {
    products;
    constructor(props){
        super(props);
        console.log("constructor method")
        this.Product={
            pid:101,
            pname:"Iphone",
            price:50000,
            color:["red","blue"],
            image:'https://www.bing.com/aclick?ld=e8RrHzmM0VOXLaVNq0Csz6CTVUCUz_GTOGfQPSW3pLpB-aFVUTEiMpRWpBEc02QnwdEzXYyBT8W-eq0K9BV7ZOXPoXqzsYUsollb3eHz3j945Bt6gO6gkqRIey3JQQ2b_m-_Sk3WN32beUZxB0H0NJoeoV6QBhVxH4mRHLr_Rb8Ho1i0ayu1hZsYUKBQlV2LmKk7rupA&u=aHR0cHMlM2ElMmYlMmZ3d3cuY3JvbWEuY29tJTJmYXBwbGUtaXBob25lLTE1LTEyOGdiLWJsYWNrLSUyZnAlMmYzMDA2NTIlM2Z1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RwcyUyNnV0bV9jYW1wYWlnbiUzZFNva19QTWF4X0NhdGNoQWxsX0JpbmclMjZtc2Nsa2lkJTNkNTk5M2VlMjQ3MmRiMTkxYWM2NDM4ODkyNzk1YjdkZTIlMjZ1dG1fdGVybSUzZDIzMjQ3Nzk4OTg2NTA0MjAlMjZ1dG1fY29udGVudCUzZERlYyUyNTIwUHJvZHVjdHM&rlid=5993ee2472db191ac6438892795b7de2'
        }
    }
    render() {
    console.log("render method")
    return (
      <div>
        <h1>Product component</h1>
        <Cart products={this.Product}/>
      </div>
    )
  }
}

export default Product