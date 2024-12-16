import SpecialHeading from "../../components/common/SpecialHeading/SpecialHeading"
import { IoCart } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import './Wishlist.css'
const Wishlist = () => {
  return (
    <div className="wishlist">
      <SpecialHeading title={"(4)المفضله"} />
      <div className="container">
        <h2 className="clear">clear all</h2>
        <div className="top-wishlist">
        <div className="card">
          <div className="image">
       <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="product"/>
       <button className="btn"> <IoCart className="cartbtn"/> add to cart</button>

       <MdDelete className="delete"/>
          </div>
          <div className="text">
       <h2>bag </h2>
       <p>250$</p>
          </div>
      </div>
        <div className="card">
        <div className="image">
       <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="product"/>
       <button  className="btn"> <IoCart className="cartbtn"/> add to cart</button>
       <MdDelete className="delete"/>
          </div>
          <div className="text">
       <h2>bag </h2>
       <p>250$</p>
          </div>
      </div>
        <div className="card">
        <div className="image">
       <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="product"/>
       <button className="btn"> <IoCart className="cartbtn"/> add to cart</button>
       <MdDelete className="delete"/>
          </div>
          <div className="text">
       <h2>bag </h2>
       <p>250$</p>
          </div>
      </div>
        <div className="card">
        <div className="image">
       <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="product"/>
       <button className="btn"> <IoCart className="cartbtn" /> add to cart</button>
       <MdDelete className="delete"/>
          </div>
          <div className="text">
       <h2>bag </h2>
       <p>250$</p>
          </div>
      </div>
        </div>
        <div className="just-for">
          <div className="header">
            <button className="see-all">see all</button>
            <h2>just for you</h2>
          </div>
          <div className="bottom-wishlist">
          <div className="card">
        <div className="image">
       <img src="https://th.bing.com/th/id/OIP.DliQi0D9w8zMVLJHX_vfUAHaF_?w=223&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="product"/>
       <button className="btn"> <IoCart className="cartbtn" /> add to cart</button>
       <MdDelete className="delete"/>
          </div>
          <div className="text">
       <h2>bag </h2>
       <p>250$</p>
          </div>
      </div>
          <div className="card">
        <div className="image">
       <img src="https://th.bing.com/th/id/OIP.DliQi0D9w8zMVLJHX_vfUAHaF_?w=223&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="product"/>
       <button className="btn"> <IoCart className="cartbtn" /> add to cart</button>
       <MdDelete className="delete"/>
          </div>
          <div className="text">
       <h2>bag </h2>
       <p>250$</p>
          </div>
      </div>
          <div className="card">
        <div className="image">
       <img src="https://th.bing.com/th/id/OIP.DliQi0D9w8zMVLJHX_vfUAHaF_?w=223&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="product"/>
       <button className="btn"> <IoCart className="cartbtn" /> add to cart</button>
       <MdDelete className="delete"/>
          </div>
          <div className="text">
       <h2>bag </h2>
       <p>250$</p>
          </div>
      </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Wishlist