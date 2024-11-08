import styles from "./index.module.less";
import { Outlet } from "react-router-dom";
import FooterBar from "../FooterBar/index";

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
        <Outlet />
        <FooterBar />
    </div>
  );
};
export default MainLayout;
