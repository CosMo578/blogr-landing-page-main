export function Wrapper({ children }) {
  return (
    <div className="hero absolute top-0 left-0 right-0 -z-[99] h-[80vh] rounded-bl-[4rem] bg-[#ff525d] text-white">
      {children}
    </div>
  );
}
  