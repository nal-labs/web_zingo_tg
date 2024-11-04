import { useEffect } from "react";
import styles from "./index.module.less";
import { Outlet } from "react-router-dom";
import FooterBar from "../FooterBar/index";
const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Outlet></Outlet>
      <FooterBar />
    </div>
  );
};
export default MainLayout;
