import AppBar from "./components/AppBar";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "./store/auth.js";
import { useEffect } from "react";

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  console.log(auth);

  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
}

export default App;
