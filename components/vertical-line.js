export default function VerticalLine({ big, className = "" }) {
  return (
    <div
      className={`${big ? "h-16" : "h-10"} w-1 bg-green-300 ${className}`}
    ></div>
  );
}
