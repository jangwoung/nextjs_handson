"use client";

type Props = {
  count: number;
  setCount: Function;
};

export const CountButton = ({ count, setCount }: Props) => {
  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <div className="flex">
      <button
        onClick={countDown}
        className="bg-yellow-500 py-2 mx-2 px-4 rounded font-bold text-white shadow-md duration-300 hover:shadow-none"
      >
        －１
      </button>
      <button
        onClick={countUp}
        className="bg-yellow-500 py-2 mx-2 px-4 rounded font-bold text-white shadow-md duration-300 hover:shadow-none"
      >
        ＋１
      </button>
    </div>
  );
};
