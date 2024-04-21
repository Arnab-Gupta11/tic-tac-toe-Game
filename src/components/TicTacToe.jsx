import useTicTacToe from "../hooks/useTicTacToe";

const TicTacToe = () => {
  const { board, handleClick, getCurrentStatus, handleReset } = useTicTacToe();
  return (
    <div className="max-w-96 h-96 mx-auto mt-10 ">
      <h1 className="text-4xl font-extrabold text-center mb-10">Tic Tac Toe</h1>
      <h2 className="text-xl font-semibold text-center">{getCurrentStatus() ? getCurrentStatus() : "Start Game"}</h2>
      <div className="grid grid-cols-3 mt-5 rounded-sm text-black font-semibold text-2xl">
        {board?.map((value, index) => {
          return (
            <button
              key={index}
              className="bg-gray-300 border h-20 border-gray-500 hover:transition-colors hover:ease-in-out hover:bg-gray-400 hover:duration-700"
              onClick={() => handleClick(index)}
            >
              {value}
            </button>
          );
        })}
      </div>
      <div className="flex justify-center">
        <button className="bg-slate-400 text-lg font-medium px-8 py-3 text-gray-800 mt-5 hover:bg-slate-300" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
