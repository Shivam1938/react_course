function Form({formType="From"}) {
  return (
    <div className="flex justify-around mt-2 p-3 rounded-xl border-white/5 shadow-lg bg-white/5 backdrop-blur-mdshadow-lg text-white w-full">
      <div className="m-2 mx-0.5  md:mx-0 ">
        <h1 className="m-2 font-[consolas] font-bold  ">{formType}</h1>
        <input
          type="number"
          placeholder="0"
          className="m-2 p-2 outline-none "
        />
      </div>
      <div className="m-2 mx-0  px-2  ">
        <h1 className="font-[consolas] flex justify-between gap-2 mt-2 ">
          <p> Currency </p> <p> Type </p>
        </h1>
        <select className="m-4 pr-4 py-1 rounded-lg border-white/20 shadow-lg mb-3  ">
          <option value="usd" className="font-[consolas]  ">
            USD
          </option>
        </select>
      </div>
    </div>
  );
}

export default Form;
