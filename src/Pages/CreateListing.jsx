import { useState } from "react";

export const CreateListing = () => {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    year: "",
    warranty: "",
    cleanTitle: false,
    salvage: false,
    address: "",
    description: "",
    offer: true,
    regularPrice: 0,
    discountedPrice: 0,
  });
  const {
    type,
    name,
    year,
    warranty,
    cleanTitle,
    salvage,
    address,
    description,
    offer,
    regularPrice,
    discountedPrice,
  } = formData;

  function onChange(e) {
    let value = e.target.value;

    // Convert string "true"/"false" to actual booleans
    if (value === "true") value = true;
    if (value === "false") value = false;

    // Convert numeric strings to numbers if the input type is number
    if (e.target.type === "number") value = Number(value);

    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: value,
    }));
  }

  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">
        {" "}
        Create a Listing{" "}
      </h1>
      <form action="">
        <p className="text-l mt-6 font-semibold">Sell / Rent</p>

        <div className="flex ">
          <button
            type="button"
            id="type"
            value="sell"
            onClick={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "rent"
                ? "bg-white text-black"
                : "bg-slate-800 text-white"
            }`}
          >
            {" "}
            Sell
          </button>
          <button
            type="button"
            id="type"
            value="rent"
            onClick={onChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "sell"
                ? "bg-white text-black"
                : "bg-slate-800 text-white"
            }`}
          >
            {" "}
            Rent
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold ">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="name"
          maxLength="30"
          minLength="5"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus-border-slate-600 mb-6 mt-2"
        />
        <div className="flex space-x-6 mb-6">
          {/* <div>
            {" "}
            <p className="text-lg font-semibold">Year</p>{" "}
            <input
              type="number"
              id="year"
              value={year}
              onChange={onChange}
              min="1950"
              max="2035"
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
            />
          </div> */}
          <div>
            {" "}
            <p className="text-lg font-semibold">Year</p>{" "}
            <input
              type="number"
              id="year"
              value={year}
              onChange={onChange}
              min="1950"
              max="2035"
              required
              className=" w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
            />
          </div>
        </div>
        <p className="text-l mt-6 mb-2 font-semibold">Clean-Title</p>

        <div className="flex ">
          <button
            type="button"
            id="clean"
            value={true}
            onClick={onchange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !cleanTitle ? "bg-white text-black" : "bg-slate-800 text-white"
            }`}
          >
            {" "}
            Yes
          </button>
          <button
            type="button"
            id="clean"
            value={false}
            onClick={onchange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              cleanTitle ? "bg-white text-black" : "bg-slate-800 text-white"
            }`}
          >
            {" "}
            No
          </button>
        </div>
        <p className="text-l mt-6 mb-2 font-semibold">Warranty</p>

        <div className="flex ">
          <button
            type="button"
            id="warranty"
            value={true}
            onClick={onchange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !warranty ? "bg-white text-black" : "bg-slate-800 text-white"
            }`}
          >
            {" "}
            Yes
          </button>
          <button
            type="button"
            id="warranty"
            value={false}
            onClick={onchange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              warranty ? "bg-white text-black" : "bg-slate-800 text-white"
            }`}
          >
            {" "}
            No
          </button>
        </div>

        <p className="text-lg mt-6 font-semibold ">Address</p>
        <textarea
          type="text"
          id="address"
          value={address}
          onChange={onChange}
          placeholder="Address"
          maxLength="300"
          minLength="5"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus-border-slate-600 mb-6 mt-2"
        />
        <p className="text-lg  font-semibold ">Description</p>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={onChange}
          placeholder="Description"
          maxLength="30"
          minLength="5"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus-border-slate-600 mb-6 mt-2"
        />
        <p className="text-l mb-2 font-semibold">Offer</p>

        <div className="flex ">
          <button
            type="button"
            id="offer"
            value={true}
            onClick={onchange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !offer ? "bg-white text-black" : "bg-slate-800 text-white"
            }`}
          >
            {" "}
            Yes
          </button>
          <button
            type="button"
            id="offer"
            value={false}
            onClick={onChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              offer ? "bg-white text-black" : "bg-slate-800 text-white"
            }`}
          >
            {" "}
            No
          </button>
        </div>
        <div className="">
          <div className="">
            <p className="text-lg font-semibold mt-4 mb-2"> Regular Price</p>
            <div className="flex items-center justify-center space-x-4">
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={onChange}
                min="50"
                max="100000"
                required
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition  duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
              />
              {type === "rent" && (
                <div className="">
                  {" "}
                  <p className="text-md w-full whitespace-nowrap ">
                    {" "}
                    $ / day
                  </p>{" "}
                </div>
              )}
            </div>
          </div>
          {offer && (
            <div className="">
              <p className="text-lg font-semibold mt-4 mb-2">
                {" "}
                Discounted Price
              </p>
              <div className="flex items-center justify-center space-x-4">
                <input
                  type="number"
                  id="discountedPrice"
                  value={discountedPrice}
                  onChange={onChange}
                  min="50"
                  max="100000"
                  required={offer}
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition  duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
                />
                {type === "rent" && (
                  <div className="">
                    {" "}
                    <p className="text-md w-full whitespace-nowrap ">
                      {" "}
                      $ / day
                    </p>{" "}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="mb-6 mt-6">
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-600">
            The first image will be the cover(max 6)
          </p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg, .png, jpeg"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
          />
        </div>
        <button
          type="submit"
          className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg:blue-800 focus:shadow:lg active:bg-blue-900 active:shadow-lg transition duration-150 ease-in-out"
        >
          {" "}
          Create Listing
        </button>
      </form>
    </main>
  );
};
