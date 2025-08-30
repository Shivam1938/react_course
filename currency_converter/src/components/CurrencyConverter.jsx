function CurrencyConverter() {
  return (
    <div className="flex items-center justify-center h-screen bg-indigo-900">
      <div
        className="bg-white/100 backdrop-blur-lg
       border border-white/20  shadow-lg w-150 h-98 mx-auto p-4 rounded-xl"
      >
        {/* from */}
        <div className=" flex justify-around m-2 rounded-xl border-1">
          <div>
            <h1 className="mx-2 my-5 p-0 mb-2">From</h1>
            <input
              type="text"
              placeholder="Enter Amount"
              className=" w-100 h-18 mx-auto p-2 rounded-xl m-2 outline-none "
            />
          </div>
          <div className=" p-4 w-1/4">
            <h1 className="mb-4">Currency Type</h1>
            <select
              name="currencyswitcher"
              id="switcher"
              className="w-25 h-12 mt-4 rounded-xl border-1 bg-gray-200 "
            >
              <option value="usd" className="text-center">
                USD
              </option>
            </select>
          </div>
        </div>

        {/* swap */}
        <div className="absolute  mx-59 top-40">
          <button className="bg-blue-500 hover:bg-sky-500 rounded">
            <span className="m-6">Swap</span>
          </button>
        </div>

        {/* to */}
        <div className=" flex justify-around m-2 rounded-xl border-1">
          <div>
            <h1 className="mx-2 my-5 p-0 mb-2">To</h1>
            <input
              type="text"
              placeholder="Enter Amount"
              className=" w-100 h-18 mx-auto p-2 rounded-xl m-2 outline-none"
            />
          </div>
          <div className=" p-4 w-1/4 ">
            <h1 className="mb-4">Currency Type</h1>
            <select
              name="currencyswitcher"
              id="switcher"
              className="w-25 h-12 mt-4 rounded-xl border-1 bg-gray-200 "
            >
              <option value="inr" className="text-center">
                INR
              </option>
            </select>
          </div>
        </div>

        {/* convert button */}
        <div>
          <button className="bg-blue-500 w-136 mx-2 h-12 rounded-xl">
            Convert
          </button>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
