function Form({ formType = "From" }) {
  return (
    <div className="border-1 p-2 border-white/10 rounded-lg">
      <div>
        <div className=" flex justify-between">
          <h1 className=" m-2 font-bold">{formType}</h1>
          <h1 className=" m-2 font-bold">Currency Type</h1>
        </div>
        <div className="mt-2 ">
          <input
            type="number"
            placeholder="0"
            className=" w-[58%] m-2 px-1 outline-none font-[consolas]"
          />
          <select
            name=""
            id=""
            className="border-1 rounded-lg m-2 mx-[5%] border-white/10 px-2 bg-gray-400/20"
          >
            <option value="usd" className="font-bold ">
              USD
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Form;
