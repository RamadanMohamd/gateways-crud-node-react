import "../styles/index.css";
import { ToastProvider } from "react-toast-notifications";

function MyApp({ Component, pageProps }) {
  return <ToastProvider autoDismiss autoDismissTimeout={6000} placement="top-right"><Component {...pageProps} /> </ToastProvider>;
}
export default MyApp;
