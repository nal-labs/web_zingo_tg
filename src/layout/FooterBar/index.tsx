import { useEffect, useMemo, useState } from "react";
import { FooterBarItemType } from "./type";
import missionIconOff from '@/assets/img/mission_icon_off.png'
import missionIconOn from '@/assets/img/mission_icon_on.png'
import zinIconOff from '@/assets/img/zin_icon_off.png'
import zinIconOn from '@/assets/img/zin_icon_on.png'
import gameonIconOff from '@/assets/img/gameon_icon_off.png'
import gameonIconOn from '@/assets/img/gameon_icon_on.png'
import styles from './index.module.less'
import footerBarIconBg  from '@/assets/img/footer_bar_icon_bg.png'
import { useNavigate,useLocation } from "react-router-dom";

const FooterBar = () => {
  const navigate = useNavigate();
  const finishTaskText = 'You’ve sniffed out all Zins here today, explore more on mission!'
  const [dialogTextArr,setDialogTextArr] = useState([
    'Let’s uncover the treasure of Zingo together!',
    'Sniff Sniff！',
    'Have a lovely day!',
    'I can smell happiness in the air！'
  ])
  const [dialogText,setDialogText] = useState(null)
  const getRandomText:any = () => {
    const randomIndex = Math.floor(Math.random() * dialogTextArr.length);
    return dialogTextArr[randomIndex];
  };
  const { pathname } = useLocation();
  const footerBarItems: FooterBarItemType[] = [
    {
      off_icon: <img src={gameonIconOff} />,
      on_icon: <img src={gameonIconOn} />,
      name: "Game on",
      path: "/game_on",
    },
    {
      off_icon: <img src={zinIconOff} className={styles.zinIcon}/>,
      on_icon: <img src={zinIconOn}  className={styles.zinIcon}/>,
      name: "",
      path: "/zin",
    },
    {
      off_icon: <img src={missionIconOff} />,
      on_icon: <img src={missionIconOn} />,
      name: "Mission",
      path: "/mission",
    },
  ];
  const handleClickBar = (barItem:FooterBarItemType) => {
    navigate(barItem.path)
    if (pathname === "/zin" && barItem.path === '/zin') {
      setDialogText(getRandomText())
    } else {
      setDialogText(null)
    }
  }
  return <div className={styles.footerBar}>
    <img src={footerBarIconBg} className={styles.footerBarIconBg}/>
    {dialogText && <div className={styles.dialog}>
      {dialogText}
    </div>}
    {footerBarItems.map((item, index) => [<div className={styles.barItem} onClick={() => handleClickBar(item)} key={item.name}>
      {pathname === item.path ? item.on_icon : item.off_icon}
      {item.name && <div className={`${styles.barName} ${pathname === item.path && styles.onBarName}`}>
        {item.name}
      </div>}
    </div>])}
  </div>;
};
export default FooterBar;
