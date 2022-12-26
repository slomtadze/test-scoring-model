import AdminPageListItem from "./AdminPageListItem";

const AdminPageList = () => {
  return (
    <ul className="mb-4 min-h-[120px]">
      <li>
        <AdminPageListItem />
      </li>
      <li>
        <AdminPageListItem />
      </li>
      <li>
        <AdminPageListItem />
      </li>
      <li>
        <AdminPageListItem />
      </li>
    </ul>
  );
};

export default AdminPageList;
