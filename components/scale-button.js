export default function ScaleButton({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 bg-white border-2 rounded-md outline-none cursor-pointer whitespace-nowrap focus:ring-4 hover:bg-gray-100 focus:outline-none"
      {...props}
    >
      {children}
    </button>
  );
}
