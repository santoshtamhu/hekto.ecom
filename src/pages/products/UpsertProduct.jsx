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
    image: "",
  };
  const [data, setData] = useState(initialValue);
  const [isSubmitting, setisSubmitting] = useState(false);
  const [validationError, setValidationError] = useState({});

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
    let access_token = localStorage.getItem("access_token");

    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("image", data.image);
    data.categories.forEach((cat) => {
      formData.append("categories", cat);
    });

    setisSubmitting(true);

    let url = `${API_URL}/products`;
    let method = "post";

    if (_id) {
      method = "put";
      url = `${API_URL}/products/${_id}`;
    }
    axios[method](url, formData, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => {
        setisSubmitting(false);
        if (!_id) {
          toast("product created.");
          setData(initialValue);
        } else {
          toast("product updated.");
        }
      })
      .catch((err) => {
        setisSubmitting(false);
        if (err.response?.status == 400) {
          let errObj = {};
          err.response.data.errors.forEach((el) => {
            errObj[el.param] = el.msg;
          });
          setValidationError(errObj);
          console.log(errObj);
        } else {
          toast.error("something went wrong");
        }
      });
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setData({
      ...data,
      [name]: type === "file" ? files[0] : value,
    });

    setValidationError({
      ...validationError,
      [name]: "",
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

  const handleCategoryDelete = (index) => {
    let temp = [...data.categories];
    temp.splice(index, 1);
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
            />
            {validationError.name && (
              <span className="text-sm text-red-500">
                {validationError.name}
              </span>
            )}
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
            />
            {validationError.price && (
              <span className="text-sm text-red-500">
                {validationError.price}
              </span>
            )}
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
                  <button
                    type="button"
                    onClick={() => {
                      handleCategoryDelete(index);
                    }}
                    className="btn"
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>

          <div>
            <label htmlFor="description" className="form-label">
              Image
            </label>
            <input
              onChange={handleChange}
              id="image"
              name="image"
              type="file"
              className="form-control"
            />
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
              type="string"
              className="form-control"
            ></textarea>
          </div>
          <button
            disabled={isSubmitting}
            className="btn w-full disabled:cursor-no-drop disabled:opacity-50 "
          >
            {isSubmitting ? "loading..." : _id ? "Edit" : "Add Product"}
          </button>
        </form>
      </div>
    </>
  );
};
