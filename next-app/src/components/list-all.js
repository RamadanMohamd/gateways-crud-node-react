import React from "react";
import { useToasts } from "react-toast-notifications";
export const ListAll = () => {
  const { addToast } = useToasts();

  const [gateways, setGateways] = React.useState([]);
  const getGateways = async () => {
    const response = await fetch("http://localhost:3001/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const jsonResponse = await response.json();
    setGateways(jsonResponse);
  };

    React.useEffect(() => {
      getGateways();
    }, []);

  const deleteHandler = async (_id) => {
    const response = await fetch(
      `http://localhost:3001/delete-gateway/?id=${_id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const jsonResponse = await response.json();
    if (jsonResponse) {
      addToast(`Gateway has been deleted successfully`, {
        appearance: "success",
        autoDismiss: true,
      });
      getGateways();
    }
  };

  if (gateways.length)
    return (
      <>
        <div className="pt-6 mx-auto w-6/12 grid grid-cols-3 border-b border-grey-2 pb-2">
          <span className="font-bold col-span-1">Name</span>
          <span className="font-bold col-span-1 text-right">IP Address</span>
          <span className="font-bold col-span-1 text-right">Action</span>
        </div>
        {gateways.map(({ _id, name, ip }) => {
          return (
            <div
              key={_id}
              className="mx-auto my-2 w-6/12 grid grid-cols-3 pb-2"
            >
              <span className=" col-span-1">{name}</span>
              <span className=" col-span-1 text-right">{ip}</span>
              <button
                onClick={() => deleteHandler(_id)}
                className="text-blue-300 cursor-pointer col-span-1 text-right"
              >
                {" "}
                delete{" "}
              </button>
            </div>
          );
        })}
      </>
    );

  return (
    <div className="mt-12 h-32 border border-gray-200 w-6/12 flex items-center justify-center mx-auto">
      <span className="font-bold text-gray-600">There is no gateways </span>
    </div>
  );
};
export default ListAll;
