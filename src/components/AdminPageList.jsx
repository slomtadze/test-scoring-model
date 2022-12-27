import AdminPageListItem from "./AdminPageListItem";

const AdminPageList = ({ title, data, onClickHandler }) => {
  const onClick = (string) => {
    onClickHandler(string);
  };

  return (
    <>
      <h1 className="ml-4 mb-2 font-mono">{title}</h1>
      <ul className="mb-4 min-h-[120px] w-full overflow-scroll">
        {data &&
          data.map((item) => (
            <AdminPageListItem title={item} onClick={onClick} />
          ))}
      </ul>
    </>
  );
};

export default AdminPageList;
