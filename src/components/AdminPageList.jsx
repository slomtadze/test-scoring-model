import AdminPageListItem from "./AdminPageListItem";

const AdminPageList = ({title}) => {
  return (
    <>
      <h1 className="ml-4 mb-2 font-mono">{title}</h1>
      <ul className="mb-4 min-h-[120px]">
        <AdminPageListItem />
        <AdminPageListItem />
        <AdminPageListItem />
        <AdminPageListItem />
      </ul>
    </>
  );
};

export default AdminPageList;
