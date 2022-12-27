const AdminPageMain = ({ subFields }) => {
  return (
    <div className="h-full w-full">
      <div className="py-4 px-18 w-full flex flex-col items-center">
        <h1 className="text-center text-xl font-mono">აირჩიეთ ქვედარგი</h1>
        <div className="py-8 w-1/2 flex justify-around flex-wrap">
          {subFields.map((item) => (
            <span className="mx-2">{item.subField}</span>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center px-12 py-8">
        <h1>ქვედარგის დეტალები</h1>
        <div></div>
      </div>
    </div>
  );
};

export default AdminPageMain;
