export const MetallicBackgroundDiv = ({ children }) => {
  return (
    <div
      id="calc-body"
      className="flex  w-72 justify-center px-2 py-4 rounded-lg mx-auto my-32 border-transparent border-solid border-1 relative flex-col overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #00c3d4, #0ed3e6, #0ed3e6, #0ed3e6, #00c3d4), linear-gradient(to right, #00c3d4, #0ed3e6, #0ed3e6, #0ed3e6, #00c3d4)",
        backgroundSize: "100% 20%, 20% 100%",
        backgroundPosition: "center center",
        backgroundBlendMode: "overlay",
        boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
      }}
    >
      <div className="z-10 text-center ">{children}</div>
      <span className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 mix-blend-multiply"></span>
      <span className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-25 mix-blend-overlay"></span>
      <span className="absolute inset-0 bg-gradient-to-b from-white opacity-25 mix-blend-overlay"></span>
    </div>
  );
};

export const GradientSpans = () => {
  return (
    <div>
      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-30"></span>
      <span className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-40 hover:opacity-60"></span>
    </div>
  );
};
