import { useRef, useState } from 'react'
import gameonTextIcon from '@/assets/img/gameon_text_icon.png'
import gameIcon from '@/assets/img/game-icon.png'
import gamePicture from '@/assets/img/game_picture.png'
import shareIcon from '@/assets/img/share_icon.png'
import playButton from '@/assets/img/play_button.png'
import playButtonClick from '@/assets/img/play_button_click.png'
import Share from '@/components/share'
import styles from './index.module.less'
const gameOn = () => {
  const [isPlay, setIsPlay] = useState<boolean>(false)
  const shareRef = useRef<any>(null);
  const handlePlay = () => {
    setIsPlay(true)
    setTimeout(() => {
      setIsPlay(false)
    },2000)
  }
  const handleShare = () => {
    if (shareRef.current) {
      shareRef.current.onOpen(); 
    }
  }
  const gameList = [
    {
      icon:gameIcon,
      mainImg:gamePicture,
      name:'Pokemon Go',
      developer:'Adventure',
      playNum: 1230,
    },
    {
      icon:gameIcon,
      mainImg:gamePicture,
      name:'Pokemon Go',
      developer:'Adventure',
      playNum: 1230,
    }
  ]

  return <div className={styles.gameOn}>
    <div className={styles.header}>
      <img src={gameonTextIcon} alt="" />
    </div>
    <div className={styles.gameList}>
      {
        gameList.map(item => [
          <div className={styles.gameItem} key={item.name}>
            <div className={styles.gamePicture}>
              <img src={item.mainImg} alt="" className={styles.mainImg}/>
              <img onClick={handleShare} src={shareIcon} alt="" className={styles.shareIcon}/>
            </div>
            <div className={styles.gameInfo}>
              <img src={item.icon} alt="" />
              <div className={styles.info}>
                <p className={styles.gameName}>{item.name}</p>
                <p className={styles.developer}>
                  <span className={styles.devName}>
                    {item.developer}
                  </span>
                  · 
                  <span className={styles.playNum}>
                    {item.playNum}
                  </span> 
                  played
                </p>
              </div>
              <div className={styles.playBtn}>
                {!isPlay ? <img src={playButton} alt="" onClick={handlePlay}/> :
                <img src={playButtonClick} alt="" />}
              </div>
            </div>
          </div>
        ])
      }
    </div>
    <Share ref={shareRef}/>
  </div>
}

export default gameOn