import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assests/star_icon.png";
import star_dull from "../Assests/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className = 'productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull} alt="" />
            <p>{122}  </p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-prices-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aspernatur fugit optio quidem laudantium animi dicta inventore dolor, impedit, dignissimos odit accusantium rerum placeat reprehenderit voluptatem aliquid autem nulla deleniti, molestiae labore.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category :</span> Women , T-shirt Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span> Modern , Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay


// import React from 'react';
// import './ProductDisplay.css';
// import star_icon from '../Assests/star_icon.png';
// import star_dull from '../Assests/star_dull_icon.png';

// const ProductDisplay = ({ product }) => {
//   if (!product) {
//     return null;
//   }

//   const { image, id, name } = product;

//   return (
//     <div className='productdisplay'>
//       <div className="productdisplay-left">
//         <div className="productdisplay-img-list">
//           <img src={image} alt={`${name} thumbnail 1`} />
//           <img src={image} alt={`${name} thumbnail 2`} />
//           <img src={image} alt={`${name} thumbnail 3`} />
//           <img src={image} alt={`${name} thumbnail 4`} />
//         </div>
//         <div className="productdisplay-img">
//           <img className='productdisplay-main-img' src={image} alt={`${name} main`} />
//         </div>
//       </div>
//       <div className="productdisplay-right">
//         <h1>Product ID: {id}</h1>
//         <h1>{name}</h1>
//         <div className="productdisplay-right-star">
//           <img src={star_icon} alt="star" />
//           <img src={star_icon} alt="star" />
//           <img src={star_icon} alt="star" />
//           <img src={star_icon} alt="star" />
//           <img src={star_dull} alt="dull star" />
//           <p>{122} reviews</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDisplay;
