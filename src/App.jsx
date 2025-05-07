import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0);

  const decrementHandler = () => {
    setValue(prev => prev - 1);
  };

  const incrementHandler = () => {
    setValue(prev => prev + 1);
  };

  const resetHandler = () => {
    setValue(0);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-slate-800 to-gray-900">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 w-[310px] h-[250px] rounded-2xl shadow-2xl flex flex-col justify-center items-center gap-6 p-6">
        <h1 className="text-white text-3xl font-bold drop-shadow">Counter App</h1>

        <div className="flex gap-6 items-center">
          <button
            onClick={decrementHandler}
            className="bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white font-bold w-[4rem] py-2 px-4 rounded-xl transition duration-200"
          >
            -
          </button>

          <span className="text-white text-2xl font-bold w-16 text-center">
            {value}
          </span>

          <button
            onClick={incrementHandler}
            className="bg-green-500 hover:bg-green-600 hover:cursor-pointer text-white font-bold py-2 px-4 w-[4rem] rounded-xl transition duration-200"
          >
            +
          </button>
        </div>

        <button
          onClick={resetHandler}
          className="mt-2 bg-yellow-500 w-[7rem] hover:cursor-pointer hover:bg-yellow-600 text-black font-semibold px-5 py-2 rounded-xl transition duration-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
