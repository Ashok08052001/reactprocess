const Navbar = () => {
  const menu = [{ name: "Home" }, { name: "Movies" }, { name: "About" }];

  return (
    <div className="w-full bg-gray-500 text-white p-4 flex justify-between items-center ">
      <h1 className="text-2xl font-bold ">Movies</h1>
      <ul className="flex gap-10 text-2xl">
        {menu.map((e, i) => (
          <li
            key={i}
            className="hover:text-red-800 hover:bg-white p-2 cursor-pointer hover:rounded-2xl"
          >
            {e.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
