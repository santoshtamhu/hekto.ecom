import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const useAuthenticate = () => {
  const user = useSelector((store) => store.user.value);

  return (callback) => {
    if (user) {
      callback();
    } else {
      toast.error("login required");
    }
  };
};
