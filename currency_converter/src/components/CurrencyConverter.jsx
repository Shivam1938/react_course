import Form from "./Form.jsx";

function CurrencyConverter() {
  return (
    <div className="w-full h-screen bg-indigo-900 flex justify-center items-center ">
      <div className=" m-3 p-3 border border-white/15  bg-white/5 backdrop-blur-mdshadow-lg rounded-xl text-white sm:h-84 sm:w-120">
        {/* from */}
        <div className="w-full mt-2"></div>
        <Form formType="From" />

        {/* swap */}
        <div className="bg-blue-600 inline py-1 px-3 rounded-lg position absolute left-1/2 -translate-x-1/2 -translate-y-1/2 hover:bg-blue-700 mt-2">
          <button>Swap</button>
        </div>

        {/* to */}
        <div className="w-full mt-4"></div>
        <Form formType="To" />

        {/* convert */}
        <div>
          <button className=" border-1 border-white/10 rounded-lg w-full p-2 mt-4 pb-4 bg-blue-600 hover:bg-blue-700 font-bold">
            Convert Currency
          </button>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
