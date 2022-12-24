const HomePage = () => {
  return (
    <div className="bg-neutral-100 py-4 px-8 w-96">
      <h1 className="text-center text-2xl uppercase">Scoring</h1>
      <div className="py-2 grid grid-rows-3 gap-4">
        <input
          className="py-2 px-4 border-2 outline-none"
          type="email"
          name="email"
          placeholder="მომხმარებლის სახელი"
        />
        <input
          className="py-2 px-4 border-2 outline-none"
          type="password"
          name="password"
          placeholder="პაროლი"
        />
        <button className="bg-neutral-200 font-bold text-gray-600 hover:bg-neutral-300 duration-100">
          შესვლა
        </button>
      </div>
    </div>
  );
};

export default HomePage;
