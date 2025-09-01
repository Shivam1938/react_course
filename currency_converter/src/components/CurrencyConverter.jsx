import {Form} from "./index.js";
import useCurrencyInfo from "../hooks/useCurrencyInfo.js";
import { useState } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const rates = currencyInfo?.rates || {};
  const options = Object.keys(rates);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  // const convert = () => {
  //   if (!currencyInfo || !currencyInfo[to]) return;
  //   setConvertedAmount(amount * currencyInfo[to]);
  // };
 const convert = () => {
    const rate = rates[to];
    const val = amount;
    if (typeof rate !== "number" || val == null || Number.isNaN(Number(val))) {
      setConvertedAmount(0);
      return;
    }
    setConvertedAmount(Number((Number(val) * rate).toFixed(4)));
  };
  return (
    <div
      className="w-full h-screen bg-indigo-900 flex justify-center items-center "
    >
      <div className=" m-3 p-3 border border-white/15  bg-white/5 backdrop-blur-mdshadow-lg rounded-xl text-white sm:h-84 sm:w-120">
        {/* from */}
        <div className="w-full mt-2"></div>
        <Form
          formType="From"
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
          onAmountChange={(amount) => setAmount(amount)}
          amountDisabled={false}
          currencyDisabled={false}
          
        />

        {/* swap */}
        <div
          onClick={swap}
          className="bg-blue-600 inline py-1 px-3 rounded-lg position absolute left-1/2 -translate-x-1/2 -translate-y-1/2 hover:bg-blue-700 mt-2"
        >
          <button>Swap</button>
        </div>

        {/* to */}
        <div className="w-full mt-4"></div>
        <Form
          formType="To"
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          amountDisabled={true}
          currencyDisabled={false}
          
        />

        {/* convert */}
        <div>
          <button onClick={convert} className=" border-1 border-white/10 rounded-lg w-full p-2 mt-4 pb-4 bg-blue-600 hover:bg-blue-700 font-bold">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
