import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/shopContext';

const ProductDisplay = (props) => {

  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const [mainImage, setMainImage] = useState(product.image);

  return (
    <div className='productdisplay'>
      <div className="productdisplay_left">

        {/* thumbnails */}
        <div className="productdisplay-img-list">
          {[1,2,3,4].map((_, i) => (
            <img
              key={i}
              src={product.image}
              alt=""
              onClick={() => setMainImage(product.image)}
            />
          ))}
        </div>

        {/* main image */}
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={mainImage} alt="" />
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="productdisplay-right">
        <h1>{product.name}</h1>

        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">₹{product.old_price}</div>
          <div className="productdisplay-right-price-new">₹{product.new_price}</div>
        </div>

        <p className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline.
        </p>

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

        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>

        <p className='productdisplay-right-category'>
          <span>Category :</span> Women, T-shirt, Crop Top
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay
