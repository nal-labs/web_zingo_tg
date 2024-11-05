import { useEffect, useRef, useState } from 'react'
import gameonTextIcon from '@/assets/img/gameon_text_icon.png'
import gameIcon from '@/assets/img/game-icon.png'
import gamePicture from '@/assets/img/game_picture.png'
import shareIcon from '@/assets/img/share_icon.png'
import playButton from '@/assets/img/play_button.png'
import playButtonClick from '@/assets/img/play_button_click.png'
import Share from '@/components/Share'
import styles from './index.module.less'
import { retrieveLaunchParams  } from '@telegram-apps/sdk';
import CryptoJS from 'crypto-js';
import { parse,validate  } from '@telegram-apps/init-data-node';
const gameOn = () => {
  const [isPlay, setIsPlay] = useState<boolean>(false)
  const [isValid, setIsValid] = useState<boolean>(false);  // 用于存储验证结果
  const shareRef = useRef<any>(null);
  const { initDataRaw, initData} = retrieveLaunchParams();

  const BotToken = '7939475782:AAHcneYBLKBcANQCdAcgJrgjscDsPgxlyuY'
  const hash = parse(initDataRaw)?.hash || ''
   // 根据 initData 生成需要验证的 hash
  useEffect(() => {
    const valid = validateHash(parse(initDataRaw), hash); // 验证数据
    setIsValid(valid); // 设置验证结果
  }, [initDataRaw]);

   // 处理参数，排除 hash 字段并创建字符串数组
  const processParams = (params: any): string[] => {
    const filteredParams = Object.entries(params)
    .filter(([key]) => key !== 'hash') // 排除 'hash' 键
    .map(([key, value]) => {
      if (key === 'user' && typeof value === 'object' && value !== null) {
        return `${key}=${JSON.stringify(value)}`;
      } else {
        return `${key}=${value}`;
      }
    });
    return filteredParams.sort()
    // return [
    //   'auth_date=1709144340',
    //   'chat_instance=-3788475317572404878',
    //   'chat_type=private',
    //   'user={\"id\":279058397,\"first_name\":\"Vladislav\",\"last_name\":\"Kibenko\",\"username\":\"vdkfrost\",\"language_code\":\"en\",\"is_premium\":true,\"allows_write_to_pm\":true}'
    // ];
  };

  // 计算 HMAC-SHA256
  const generateHMAC = (key:string, data:string): string => {
    const hmac = CryptoJS.HmacSHA256(key, data);  
    return hmac.toString(CryptoJS.enc.Hex); 
  };


  // 验证 hash 的函数
  const validateHash = (params: any, expectedHash: string): boolean => {
    const data = processParams(params);  
    // 连接所有成对的参数为带换行符的字符串
    const dataString = data.join('\n');
    const generatedHash = generateHMAC("WebAppData",BotToken);  
    console.log(generatedHash,'BotToken')
    const Hashs = generateHMAC(generatedHash,dataString)
    console.log(Hashs,expectedHash)
    return Hashs === expectedHash;  
  };












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
              <div className={styles.leftInfo}>
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