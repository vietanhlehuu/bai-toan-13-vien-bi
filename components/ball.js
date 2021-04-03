export default function Ball({ color, children }) {
  return (
    <span
      className={`${color} text-cent rounded-lg text-white w-6 h-6 inline-flex items-center justify-center m-1 font-bold focus:outline-none focus:ring `}
    >
      {children}
    </span>
  );
}
