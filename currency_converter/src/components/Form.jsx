import { useId } from "react";

function Form({
  formType,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions =[],
  selectCurrency = "USD",
  amountDisabled = false,
  currencyDisabled = false,
  className="",
}) {
  const amountId = useId();

  return (
    <div className={`border-1 p-2 border-white/10 rounded-lg ${className}`}>
      <div>
        <div className=" flex justify-between">
          <label htmlFor={amountId} className=" m-2 font-bold">{formType}</label>
          <h1 className=" m-2 font-bold">Currency Type</h1>
        </div>
        <div className="mt-2 ">
          <input
            id={amountId}
            className=" w-[58%] m-2 px-1 outline-none font-[consolas]  sm:w-[68%]"
            type="number"
            placeholder="0"
            disabled={amountDisabled}
            value={amount ?? ""}
            onChange={(e) =>
              onAmountChange && onAmountChange(e.target.value === "" ? null : Number(e.target.value))
            }
          />
          <select
            className="border-1 rounded-lg m-2 mx-[5%]  border-white/10 px-2 bg-gray-400/20 sm:px-4 sm:ml-[6%] sm:mr-0"
            value={selectCurrency}
            disabled={currencyDisabled}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
          >
            {currencyOptions.map((option) => (
              <option key={option} value={option}>
                {option.toUpperCase()}
              </option>
            ))}
            
          </select>
        </div>
      </div>
    </div>
  );
}

export default Form;
