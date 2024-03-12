import Alert from "react-bootstrap/Alert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Message() {
  const notify = () => {
    // Calling toast method by passing string
    toast("sommm");
  };
  return <>
  <ToastContainer/>
  </>;
}

export default Message;
