export default function Hr({ className = "", before = true, after = true }) {
  return (
    <>
      <div
        className={`w-full h-1 bg-green-300 ${className} relative this-component`}
      >
        <style jsx>{`
          .this-component::before {
            content: "";
            display: block;
            width: 2px;
            height: inherit;
            background-color: inherit;
            position: absolute;
            top: 0;
            left: 0;
            transform: translateX(-100%);
          }
          .this-component::after {
            content: "";
            display: block;
            width: 2px;
            height: inherit;
            background-color: inherit;
            position: absolute;
            top: 0;
            right: 0;
            transform: translateX(100%);
          }
        `}</style>
      </div>
    </>
  );
}
