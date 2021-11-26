import React from "react";
import { CreateForm, Header } from "../src/components";
import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";

const CreateGateway = () => {
  const { addToast } = useToasts();

  const router = useRouter();
  const openList = () => {
    router.push("/");
  };

  const submit = async (data) => {
    const response = await fetch(`http://localhost:3001/create-gateway`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jsonResponse = await response.json();
    if (jsonResponse && jsonResponse._id) {
      addToast(`Gateway has been Added successfully`, {
        appearance: "success",
        autoDismiss: true,
      });
      openList();
    }
  };
  return (
    <>
      <Header
        title="Create Gateway Form"
        buttonTitle="Show All Gateways"
        actionHandler={openList}
      />
      <div className="w-full bg-gray-100 min-h-screen p-12">
        <h1 className="text-blue-400 text-center mb-6">Create new gateway</h1>
        <CreateForm onSubmit={submit} />
      </div>
    </>
  );
};

export default CreateGateway;
