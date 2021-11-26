import Head from "next/head";
import { Header, ListAll } from "../src/components";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const openCreate = () => {
    router.push("/create-gateway");
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header
        title="Gateways"
        buttonTitle="Create new gateway"
        actionHandler={openCreate}
      />
      <ListAll />
    </>
  );
}
