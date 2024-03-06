export function ListItem({ children }) {
  return (
    <div className="my-4 w-full">
      <ul className="rounded-md bg-[#eeeef3] py-4 pl-6 pr-8 font-serif  text-[#8e8e8f] [&_li]:my-2 [&_li]:cursor-pointer">
        {children.map((child) => {
          return <li key={child}>{child}</li>;
        })}
      </ul>
    </div>
  );
}
