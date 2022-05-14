import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import Chart from "../components/Chart";
import { productData } from "../components/dummyData";
import PublishIcon from "@material-ui/icons/Publish";
const Product = () => {
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
            data={productData}
            dataKey="Sales"
            title="Sales Performance"
            grid
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="data:image/jpeg;base64,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"
              alt="productImage"
              className="productInfoImg"
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales</span>
              <span className="productInfoValue">$123.00</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">instock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpods" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="data:image/jpeg;base64,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"
                alt="productImage"
                className="productUploadImg"
              />
              <label htmlFor="file">
                <PublishIcon />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
