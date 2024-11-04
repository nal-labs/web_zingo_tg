import { useEffect, useState } from 'react'
import welComeIcon from '@/assets/img/welCome_icon.png'
import styles from './index.module.less'
const Welcome = () => {
  const [open, setOpen] = useState(true)
  const [countdown, setCountdown] = useState(3);
  useEffect(() => {
    let timer: any
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setOpen(false);
    }
    return () => {
      clearTimeout(timer)
    };
  }, [countdown]);
  return(
    <>
      {open ? <div className={styles.welcome}>
        <h3>Hooray! You’ve sniffed out xx Zins!</h3>
        <img src={welComeIcon} alt="" />
        <div className={styles.gotchaBtn} onClick={() => setOpen(false)}>
          Gotcha({countdown}s)
        </div>
      </div> : null}
    </>
  )
}

export default Welcome