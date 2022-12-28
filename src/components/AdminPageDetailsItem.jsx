const AdminPageDetailsItem = ({ label, type, name, placeholder }) => {
  return (
    <div className="flex bg-slate-50 p-2 rounded-lg m-2">
      <div className="flex flex-col">
        <label className="mb-2" htmlFor="minProfit">
          {label}
        </label>
        <input
          className="bg-transparent px-2"
          type={type}
          name={name}
          placeholder={`${placeholder}`}
          disabled
        />
      </div>
    </div>
  );
};

export default AdminPageDetailsItem;
