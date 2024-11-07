import styles from './index.module.less'; // 引入 Less 文件
import closeIcon from '@/assets/img/close_icon.png'
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer = ({ isOpen, onClose, children }:DrawerProps) => {
   // 使用 useEffect 来在弹窗打开时禁用页面滚动
   useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // 禁止页面滚动
    } else {
      document.body.style.overflow = ''; // 恢复页面滚动
    }

    // 清理 effect，恢复页面滚动
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  return isOpen
  ? ReactDOM.createPortal(
      <>
        <div className={styles.overlay} onClick={onClose} />
        <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
          <div className={styles.drawerContent}>
            <img src={closeIcon} className={styles.closeButton} onClick={onClose} />
            {children}
          </div>
        </div>
      </>,
      document.body
    )
  : null;
};

export default Drawer;
