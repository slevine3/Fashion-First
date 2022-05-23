import React, { useMemo, useState, useEffect } from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Chart from "../../components/Chart/Chart";

import PublishIcon from "@material-ui/icons/Publish";
import { userRequest } from "../../requestMethods";
import { updateProduct } from "../../redux/apiCalls";

const Product = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productId = location.pathname.split("/")[2];

  const [inputs, setInputs] = useState([]);
  const [productStats, setProductStats] = useState([]);
  const [updateStatus, setUpdateStatus] = useState([]);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await userRequest.get(
          "/orders/income/?pid=" + productId
        );
        const list = response.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setProductStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    updateProduct(productId, inputs, dispatch);
    setUpdateStatus("Successfully Updated");
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productStats}
            dataKey="Sales"
            title="Sales Performance"
            grid
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src={product.img}
              alt="productImage"
              className="productInfoImg"
            />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">ID:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">Product Description:</span>
              <span className="productInfoValue">{`${product.desc}`}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">In Stock:</span>
              <span className="productInfoValue">{`${product.inStock}`}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <span className="productUpdateTitle">Edit</span>
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              onChange={handleChange}
              name="title"
              type="text"
              placeholder={product.title}
            />
            <label>Product Description</label>
            <input
              onChange={handleChange}
              name="desc"
              type="text"
              placeholder={product.desc}
            />
            <label>Price</label>
            <input
              onChange={handleChange}
              name="price"
              type="text"
              placeholder={`$${product.price}`}
            />
            <label>In Stock</label>
            <select onChange={handleChange} name="inStock" id="inStock">
              <option selected default>
                Choose
              </option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button onClick={handleClick} className="productButton">
              Update
            </button>
            <h4 style={{ color: "green", marginTop: "20px", fontSize: '20px' }}>
              {updateStatus}
            </h4>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
