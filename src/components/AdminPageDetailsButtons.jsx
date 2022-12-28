const { Fragment } = require("react");

const AdminPageDetailsButtons = ({
  editIsActive,
  exitEditMode,
  setEditMode,
}) => {
  return (
    <Fragment>
      {editIsActive ? (
        <div className="flex absolute bottom-8 left-16">
          <button
            className="bg-orange-300 px-4 py-[2px] rounded-lg mr-2"
            type="submit"
          >
            დადასტურება
          </button>
          <button
            className="bg-orange-300 px-4 py-[2px] rounded-lg"
            type="button"
            onClick={exitEditMode}
          >
            გაუქმება
          </button>
        </div>
      ) : (
        <button
          className="absolute bottom-8 left-16 bg-orange-300 px-4 py-[2px] rounded-lg"
          type="button"
          onClick={setEditMode}
        >
          შეცვლა
        </button>
      )}
    </Fragment>
  );
};

export default AdminPageDetailsButtons;

/* const AdminPageDetailsButtons = () ={
     return (
         
         {editIsActive ? (
         
        ) : (
         
        )}
     )
 }
 
 export default AdminPageDetailsButtons */
