import styles from './index.module.less'; // 引入 Less 文件
import closeIcon from '@/assets/img/close_icon.png'
interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer = ({ isOpen, onClose, children }:DrawerProps) => {
  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}
      {isOpen && <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
        <div className={styles.drawerContent}>
          <img src={closeIcon} className={styles.closeButton} onClick={onClose} />
          {children}
        </div>
      </div>}
    </>
  );
};

export default Drawer;
