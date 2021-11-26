import React from "react";
import { Modal } from "../shared/Modal";
import { useToasts } from "react-toast-notifications";

export const CreateForm = ({ onSubmit }) => {
  const { addToast } = useToasts();

  const [data, changeData] = React.useState({
    "serial-number": null,
    name: null,
    ip: null,
    devices: [],
  });

  const [deviceData, changeDeviceData] = React.useState({});
  const [isOpen, open] = React.useState(false);

  const handleDataChange = (key, value) => {
    changeData({ ...data, [key]: value });
  };

  const changeDeviceHandler = (key, value) => {
    changeDeviceData({ ...deviceData, [key]: value });
  };

  const saveDeviceHandler = () => {
    if (Object.keys(deviceData).length == 4) {
      handleDataChange("devices", [...data.devices, deviceData]);
      changeDeviceData({});
      open(false);
    } else {
      addToast("All device data are required", "info");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(data['name'] && data['ip'] && data['serial-number'])
      onSubmit(data);
    else 
      addToast("Serial number, ip and name are required ", "info")
  };

  React.useEffect(() => {
    console.log(JSON.stringify(data));
  }, [data]);

  React.useEffect(() => {
    console.log(JSON.stringify(deviceData));
  }, [deviceData]);

  const inputStyle =
    "px-4 h-12 rounded border border-gray-300 focus:outline-none";
  return (
    <>
      <form className="w-6/12 mx-auto">
        <div className="mb-2 flex flex-col justify-start">
          <label className="mb-2 font-bold text-ms">Serial number</label>
          <input
            className={inputStyle}
            name="serial-number"
            onChange={(e) => handleDataChange(e.target.name, e.target.value)}
            type="text"
          />
        </div>
        <div className="mb-2 flex flex-col justify-start">
          <label className="mb-2 font-bold text-ms">Name</label>
          <input
            className={inputStyle}
            name="name"
            onChange={(e) => handleDataChange(e.target.name, e.target.value)}
            type="text"
          />
        </div>
        <div className="mb-2 flex flex-col justify-start">
          <label className="mb-2 font-bold text-ms">IP</label>
          <input
            className={inputStyle}
            name="ip"
            onChange={(e) => handleDataChange(e.target.name, e.target.value)}
            type="text"
          />
        </div>
        <div className="flex flex items-center justify-between mt-6">
          <span className="py-2">Devices: {data.devices.length}</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              open(true);
            }}
            className="py-2 px-4 cursoor-pointer"
          >
            {" "}
            + add device{" "}
          </button>
        </div>

        <div className="flex flex-col items-end mt-6">
          <button
            onClick={(e) => submitHandler(e)}
            className="border-2 w-32 border-blue-400 rounded py-2 px-4"
          >
            Save
          </button>
        </div>
      </form>

      <Modal isOpen={isOpen} open={open}>
        <div className="px-6 h-16 flex flex-row justify-between items-center border-b border-grey-200">
          <span className="text-lg font-semibold">Add device data</span>
          <span onClick={() => open(false)} className="close"></span>
        </div>
        <div className="p-6 flex flex-col justify-between items-center border-b border-grey-200">
          <div className="w-full mb-2 flex flex-col justify-start">
            <label className="mb-2 font-bold text-ms">UID</label>
            <input
              name="uid"
              onChange={(e) =>
                changeDeviceHandler(e.target.name, e.target.value)
              }
              className={inputStyle}
              type="text"
            />
          </div>
          <div className="w-full mb-2 flex flex-col justify-start">
            <label className="mb-2 font-bold text-ms">Vendor</label>
            <input
              name="vendor"
              onChange={(e) =>
                changeDeviceHandler(e.target.name, e.target.value)
              }
              className={inputStyle}
              type="text"
            />
          </div>
          <div className="w-full mb-2 flex flex-col justify-start">
            <label className="mb-2 font-bold text-ms">Created at</label>
            <input
              name="create_at"
              onChange={(e) =>
                changeDeviceHandler(e.target.name, e.target.value)
              }
              className={inputStyle}
              type="text"
            />
          </div>
          <div className="w-full mb-2 flex flex-col justify-start">
            <label className="mb-2 font-bold text-ms">Status</label>
            <input
              name="status"
              onChange={(e) =>
                changeDeviceHandler(e.target.name, e.target.value)
              }
              className={inputStyle}
              type="text"
            />
          </div>
        </div>
        <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="focus:outline-none w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-red-700 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => saveDeviceHandler()}
          >
            Save
          </button>
          <button
            type="button"
            className="focus:outline-none mt-3 w-full inline-flex justify-center rounded-md border border-gray-200 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-200 hover:bg-gray-50  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => open(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};
export default CreateForm;
