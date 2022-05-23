import React, { useEffect } from "react";
import "./ProductList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";

import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";

const ProductList = () => {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.product.products);

  products = products.filter((item) => item._id);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "Product ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="avatar" />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "inStock",
      headerName: "Stock",
      width: 180,
    },
    {
      field: "price",
      headerName: "Price Volume",
      width: 180,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="productList">
      {products && (
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={10}
          getRowId={(row) => row._id}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
        />
      )}
    </div>
  );
};

export default ProductList;
