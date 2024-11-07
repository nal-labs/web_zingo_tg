import { useEffect, useRef, useState } from 'react'
import missionTextIcon from '@/assets/img/mission_text_icon.png'
import shareIcon from '@/assets/img/share_icon.png'
import zinGameIcon from '@/assets/img/zin_game_icon.png'
import goIcon from '@/assets/img/go_icon.png'
import time100Icon from '@/assets/img/time_100_icon.png'
import timeSinIcon from '@/assets/img/time_sin_icon.png'
import zcoinWhiteIcon from '@/assets/img/zcoin_white_icon.png'
import Share from '@/components/Share'
import Lark from '@/assets/img/Lark.gif'
import zcoin from '@/assets/lottie/zcoin.json'
import styles from './index.module.less'
import Lottie from 'lottie-react'
import { event } from '@/utils/gtag'
const missionPage = () => {
  const shareRef = useRef<any>(null);
  const [animating, setAnimating] = useState(false)
  const larkRef = useRef<HTMLImageElement | null>(null);
  const [selectItem, setSelectItem] = useState(1)
  const handleShare = () => {
    if (shareRef.current) {
      shareRef.current.onOpen(); 
      event('mission_share')
    }
  }
  const zinList = [
    {
      icon: zinGameIcon,
      name:'Ben 10 Power Surge',
      dsc:'Play to win all rewards!', 
      zinNum: 200,
      statusIcon: goIcon,
    },
    {
      icon: zinGameIcon,
      name:'Ben 10 Power Surge',
      dsc:'Play to win all rewards!', 
      zinNum: 200,
      statusIcon: time100Icon,
    },
    {
      icon: zinGameIcon,
      name:'Ben 10 Power Surge',
      dsc:'Play to win all rewards!', 
      zinNum: 200,
      statusIcon: timeSinIcon,
    },
    {
      icon: zinGameIcon,
      name:'Ben 10 Power Surge',
      dsc:'Play to win all rewards!', 
      zinNum: 200,
      statusIcon: zcoinWhiteIcon,
    }
    
  ]
  const handleClickMission = (index:number) => {
    const button = document.querySelector(`.btns${index}`);
    const target = document.querySelector(`[class*=zinIcon]`);
    if (button && target) {
      const buttonRect = button.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      // 计算位置
      const startX = buttonRect.left + buttonRect.width / 2;
      const startY = buttonRect.top + buttonRect.height / 2;
      const endX = targetRect.left + targetRect.width / 2;
      const endY = targetRect.top + targetRect.height / 2;
      console.log(startX,startY)
      // 设置 Lark 的初始位置
      larkRef.current!.style.left = `${startX}px`;
      larkRef.current!.style.top = `${startY}px`;
      larkRef.current!.style.opacity = '1';
      
      setTimeout(() => {
        setAnimating(true);
        larkRef.current!.style.left = `${endX}px`;
        larkRef.current!.style.top = `${endY}px`;
        
        setTimeout(() => {
          setAnimating(false);
          larkRef.current!.style.opacity = '0';
          larkRef.current!.style.left = `${startX}px`;
          larkRef.current!.style.top = `${startY}px`;
        }, 1000); // 动画持续时间
      }, 0);
    }
  }
  useEffect(() => {
    event('mission_pageview')
  }, []);
  return(
    <div className={styles.missionPage}>
      <Share ref={shareRef}/>
      <div className={styles.header}>
        <img src={missionTextIcon} alt="" />
        <img className={styles.shareIcon} onClick={handleShare} src={shareIcon} alt="" />
      </div>
      <div className={styles.missionContent}>
        {zinList.map((item,index) => [
          <div className={`${styles.missionItem} ${index === selectItem && styles.onItem}`} key={index}>
            <div className={styles.leftItem}>
              <img src={item.icon} alt="" />
              <div className={styles.content}>
                <p className={styles.name}>{item.name}</p>
                <span className={styles.dsc}>{item.dsc}</span>
                <p className={styles.integral}>
                  <img src={zcoinWhiteIcon} alt="" />
                  {
                    item.zinNum
                  }
                </p>
              </div>
            </div>
            <div className={`${styles.statusBox} ${'btns'+index}`} onClick={() => handleClickMission(index)}>
              <img src={item.statusIcon}  />
            </div>
          </div>
        ])}
      </div>
      <img
        src={Lark}
        alt=""
        ref={larkRef}
        className={`${styles.lark} ${animating && styles.animate}`}
      />
      <div  ref={larkRef} className={`${styles.lark} ${animating && styles.animate}`}>
          <Lottie animationData={zcoin} loop={true}  />
        </div>
    </div>
  )
}

export default missionPage