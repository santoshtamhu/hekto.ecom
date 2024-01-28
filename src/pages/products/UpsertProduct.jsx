import { Breadcrumb } from "../../components/common/Breadcrumb";
import axios from "axios";
import { API_URL } from "../../components/common/constants/domian";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const UpsertProduct = () => {
  const { _id } = useParams();
  let initialValue = {
    name: "",
    price: "",
    description: "",
    in_stock: "",
    categories: [""],
  };
  const [data, setData] = useState(initialValue);
  const [isSubmitting, setisSubmitting] = useState(false);

  useEffect(() => {
    if (_id) {
      axios
        .get(`${API_URL}/products/${_id}`)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          toast.error("something went wrong, please try again");
        });
    }
  }, []);
  console.log(_id);
  const handleSubmit = (e) => {
    e.preventDefault();
    let productData = data;
    let access_token = localStorage.getItem("access_token");
    setisSubmitting(true);
    axios
      .post(`${API_URL}/products`, productData, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        setisSubmitting(false);
        toast("product created.");
        setData(initialValue);
      })
      .catch((err) => {
        setisSubmitting(false);
        toast.error("something went wrong");
      });
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const addCategory = () => {
    setData({
      ...data,
      categories: [...data.categories, ""],
    });
  };

  const handleCategoryChange = (e, index) => {
    let temp = data.categories.map((el, idx) => {
      if (index == idx) {
        return e.target.value;
      } else {
        return el;
      }
    });
    setData({
      ...data,
      categories: temp,
    });
  };
  return (
    <>
      {_id ? (
        <Breadcrumb
          title="Edit Product"
          links={[
            { title: "Home", url: "/" },
            { title: "Products", url: "/products" },
            { title: "My Products", url: "/products/my-products" },
            { title: "Edit", url: "" },
          ]}
        />
      ) : (
        <Breadcrumb
          title="Add Product"
          links={[
            { title: "Home", url: "/" },
            { title: "Products", url: "/products" },
            { title: "Add Product", url: "" },
          ]}
        />
      )}
      <div className="mx-auto mt-9 max-w-md rounded border bg-white p-8 font-josefin shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="form-label required-field">
              Product Name
            </label>
            <input
              value={data.name}
              onChange={handleChange}
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              className="form-control "
              required
            />
          </div>

          <div>
            <label htmlFor="price" className="form-label required-field">
              Price
            </label>
            <input
              value={data.price}
              onChange={handleChange}
              type="number"
              id="price"
              placeholder="Price"
              name="price"
              className="form-control"
              required
            />
          </div>

          <div>
            <label htmlFor="in_stock" className="form-label">
              In Stock
            </label>
            <input
              value={data.in_stock}
              onChange={handleChange}
              type="number"
              id="in_stock"
              name="in_stock"
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="categories" className=" form-label">
              Categories
              <button onClick={addCategory} type="button" className="btn ml-2">
                Add
              </button>
            </label>
            {data.categories.map((e, index) => {
              return (
                <div className="mt-2 flex items-center gap-2">
                  <input
                    value={e}
                    onChange={(e) => handleCategoryChange(e, index)}
                    type="string"
                    id="category"
                    name="category"
                    className="form-control"
                  />
                  <button type="button" className="btn">
                    Delete
                  </button>
                </div>
              );
            })}
          </div>

          <div>
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              value={data.description}
              onChange={handleChange}
              id="description"
              name="description"
              rows="5"
              className="form-control"
              required
            ></textarea>
          </div>
          <button
            disabled={isSubmitting}
            className="btn w-full disabled:cursor-no-drop disabled:opacity-50 "
          >
            {isSubmitting ? "loading..." : _id ? "Submit" : "Add Product"}
          </button>
        </form>
      </div>
    </>
  );
};
