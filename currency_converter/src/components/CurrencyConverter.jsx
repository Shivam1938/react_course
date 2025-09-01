import Form from "./Form.jsx";

function CurrencyConverter() {
  return (
    <div className="w-screen h-screen  bg-indigo-900 flex justify-center items-center ">
      <div className="w-95 m-3  h-95 border border-white/15  bg-white/5 backdrop-blur-mdshadow-lg rounded-xl p-2 text-white md:w-130 md:p-6 md:py-4 md:h-98 ">
        {/* from */}
        <Form formType="From" />

        {/* swap */}
        <div></div>

        {/* to */}
        <Form formType="To"/>

        {/* convert */}
        <div className="flex justify-center">
          <button className="bg-blue-500 rounded-lg px-28 py-3 m-4 shadow-lg hover:bg-blue-700 font-[consolas] md:px-34 ">
            Convert
          </button>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
