import { useState, useImperativeHandle,forwardRef } from "react";
import Drawer from "../Drawer";
import styles from './index.module.less'
import wenhaoIcon from '@/assets/img/wenhao_icon.png'
import zinBinIcon from '@/assets/img/zin_bin_icon.png'
import xIcon from '@/assets/img/x_icon.png'
import whatsapp from '@/assets/img/whatsapp.png'
import fsbook from '@/assets/img/fsbook.png'
import link from '@/assets/img/link.png'
import noDataIcon from '@/assets/img/no_data_icon.png'
import linkIconShare from '@/assets/img/link_icon_share.png'
import { shareURL } from '@telegram-apps/sdk';


const Share = forwardRef((_, ref:any) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const onClose = () => {
    setDrawerOpen(false)
  };
  useImperativeHandle(ref, () => ({
    onClose: onClose,
    onOpen: () => {
      setDrawerOpen(true);
    }
  }));
  const handleShareOnTg = () => {
    shareURL('https://t.me/heyqbnk', 'Check out this cool group!');
  }
  return(
      <Drawer isOpen={isDrawerOpen} onClose={onClose}>
        <div className={styles.shareBox}>
          <div className={styles.content}>
            <h3>
              Invite your friends, and both of you can get invitation bonus
            </h3>
            <p>(Invite a Premium user = 10X rewards)</p>
            <div className={styles.reward}>
              <div>
                <img src={zinBinIcon} alt="" />
                <p>+5</p>
              </div>
              <div className={styles.wenhaoIcon}>
                <img src={wenhaoIcon} alt="" />
                <p>+5</p>
              </div>
              <div className={styles.wenhaoIcon}>
                <img src={wenhaoIcon} alt="" />
                <p>+5</p>
              </div>
            </div>
            <div className={styles.footBtn}>
              <div className={styles.shareBtn} onClick={handleShareOnTg}>
                Share on Telegram
              </div>
              <img src={linkIconShare} alt="" />
            </div>
            {/* <div className={styles.shareClass}>
                img
            </div> */}
          </div>
          <div className={styles.invitation}>
            <p>Invitation list</p>
            <img src={noDataIcon} alt="" className={styles.noDataIcon}/>
          </div>
        </div>
      </Drawer>
  )
})

export default Share