import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useReducer } from "react";
import layoutReducer from "../reducers/layoutReducer";
import LayoutContext from "../contexts/layoutContext";

const Layout = () => {
  const [layout, dispatch] = useReducer(layoutReducer, {
    device: window.innerWidth < 768 ? "mobile" : "pc",
  });
  return (
    <LayoutContext.Provider value={{ layout, dispatch }}>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </LayoutContext.Provider>
  );
};

export default Layout;
