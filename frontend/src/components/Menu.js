import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Menu = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        const { products } = res.data;

        setProductsState(products);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something's not right");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div id="menu" className="container-fluid">
      <img
        src="/assets/img/burger-outlined.png"
        className="d-block mx-auto burger-top"
        alt="burger"
      />

      <h1 className="main">BURGERS</h1>

      <hr className="mt-5" />

      <div className="menu-1 row">
        {isLoading && (
          <div className="text-center">
            <h2>Loading...</h2>
          </div>
        )}
        {productsState.map((el) => {
          return (
            <div
              key={el._id}
              className="col-sm-6 col-md-4 text-center text-sm-start"
            >
              <h5 className="mt-3">{el.name}</h5>
              <p className="mb-0">{el.description}</p>
              <h6 className="price">${el.price}</h6>
            </div>
          );
        })}
      </div>

      <div className="menu-2 pt-5 mt-5">
        <h1 className="py-5 mx-auto">
          TRY THE MOST STYLISH AND UNIQUE BURGERS OF OUR BAR. YOU WILL LOVE
          THEM!
        </h1>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-6 item-card">
            <img
              src="/assets/img/menu-burger-1.jpg"
              className="mt-4"
              alt="burger"
            />

            <h5 className="mt-4">Big Papa Burger</h5>
            <p className="desc">Meat, salad, cucumbers, onions</p>
          </div>

          <div className="col-md-4 col-sm-6 item-card">
            <div className="badge">NEW</div>
            <img
              src="/assets/img/menu-burger-2.jpg"
              className="mt-4"
              alt="burger"
            />

            <h5 className="mt-4">Mamasita Burger</h5>
            <p className="desc">Meat, salad, cucumbers, onions</p>
          </div>

          <div className="col-md-4 col-sm-3 d-none d-sm-block d-md-none"></div>

          <div className="col-md-4 col-sm-6 item-card">
            <img
              src="/assets/img/menu-burger-3.jpg"
              className="mt-4"
              alt="burger"
            />

            <h5 className="mt-4">Hot Chicken Burger</h5>
            <p className="desc">Meat, salad, cucumbers, onions</p>
          </div>
        </div>

        <div className="text-center mt-5">
          <button className="btn theme-btn">SHOW OUR MENU</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
