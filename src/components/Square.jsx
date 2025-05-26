export default function Square({ value }) {
  return (
    <button className="bg-slate-300 font-semibold text-lg w-14 h-14 m-1 cursor-pointer active:shadow-inner active:shadow-slate-400">
      {value}
    </button>
  );
}
