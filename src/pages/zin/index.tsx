import { useEffect, useRef, useState } from 'react'
import taskTextIcon from '@/assets/img/task_text_icon.png'
import zcoinWhiteIcon from '@/assets/img/zcoin_white_icon.png'
import riliIcon from '@/assets/img/rili.png'
import Welcome from './components/welcome'
import styles from './index.module.less'
import Lark from '@/assets/img/Lark.gif'
import zcoin from '@/assets/lottie/zcoin.json'
import Lottie from 'lottie-react'
import { event } from '@/utils/gtag'
import CountUp from 'react-countup'
const zinPage = () => {
  const startRefCountUp = useRef<any>(null)
  const [animating, setAnimating] = useState(false)
  const larkRef = useRef<HTMLImageElement | null>(null)
  const zingoTaskList = [
    {
      name: 'Follow Zingo Channel',
      num: 100,
      status: 1
    },
    {
      name: 'Join Zingo GroupChat',
      num: 100,
      status: 2
    },
    {
      name: 'Follow offlcial Twitter',
      num: 100,
      status: 2
    }
  ]
  useEffect(() => {
    event('zin_pageview')
  }, [])
  const handleSignIn = (index: number, item?: any) => {
    const button = document.querySelector(`.btn${index}`)
    const target = document.querySelector(`.${styles.num}`)
    console.log(button, target, larkRef.current)
    if (button && target) {
      const buttonRect = button.getBoundingClientRect()
      const targetRect = target.getBoundingClientRect()

      // 计算位置
      const startX = buttonRect.left + buttonRect.width / 2
      const startY = buttonRect.top + buttonRect.height / 2
      const endX = targetRect.left + targetRect.width / 2
      const endY = targetRect.top + targetRect.height / 2
      console.log(startX, startY)
      // 设置 Lark 的初始位置
      larkRef.current!.style.left = `${startX}px`
      larkRef.current!.style.top = `${startY}px`
      larkRef.current!.style.opacity = '1'

      setTimeout(() => {
        setAnimating(true)
        larkRef.current!.style.left = `${endX}px`
        larkRef.current!.style.top = `${endY}px`

        setTimeout(() => {
          startRefCountUp.current()
          setAnimating(false)
          larkRef.current!.style.opacity = '0'
          larkRef.current!.style.left = `${startX}px`
          larkRef.current!.style.top = `${startY}px`
          event('zin_click_task', item)
        }, 1000) // 动画持续时间
      }, 0)
    }
  }
  return (
    <>
      <Welcome />
      <div className={styles.zinPage}>
        <div className={styles.header}>
          <img src={taskTextIcon} alt="" />
          <div className={styles.zinBal}>
            <p>Zin Balance</p>
            <div className={styles.num}>
              <img src={zcoinWhiteIcon} alt="" />
              <CountUp
                className="account-balance"
                start={0}
                end={328.2}
                duration={2}
                separator=" "
                decimals={2}
                decimal=","
                prefix=""
                suffix=""
                onEnd={() => console.log('Ended! 👏')}
                onStart={() => console.log('Started! 💨')}
              >
                {({ countUpRef, start }) => {
                  startRefCountUp.current = start
                  return <span ref={countUpRef} />
                }}
              </CountUp>
              {/* <span>
              328.20
              </span> */}
            </div>
          </div>
        </div>
        <div className={styles.zinContent}>
          <div className={styles.zingoTask}>
            <h2>Zingo Task</h2>
            {zingoTaskList.map((item, index) => [
              <div className={styles.zingoTaskItem} key={index}>
                <div className={styles.leftContent}>
                  <img src={riliIcon} alt="" />
                  <div>
                    <p className={styles.taskName}>{item.name}</p>
                    <p>
                      <img
                        src={zcoinWhiteIcon}
                        alt=""
                        className={styles.numIcon}
                      />
                      <span>{item.num}</span>
                    </p>
                  </div>
                </div>
                <div
                  className={`${styles.rightBtn} ${'btn' + index}`}
                  onClick={() => handleSignIn(index, item)}
                >
                  {item.status === 1 ? 'GO' : 'Claim'}
                </div>
              </div>
            ])}
          </div>
          <div className={styles.line}></div>
          <div className={styles.zingoTask}>
            <h2>Daily Task</h2>
            {zingoTaskList.map((item, index) => [
              <div className={styles.zingoTaskItem} key={index}>
                <div className={styles.leftContent}>
                  <img src={riliIcon} alt="" />
                  <div>
                    <p className={styles.taskName}>{item.name}</p>
                    <p>
                      <img
                        src={zcoinWhiteIcon}
                        alt=""
                        className={styles.numIcon}
                      />
                      <span>{item.num}</span>
                    </p>
                  </div>
                </div>
                <div className={styles.rightBtn}>
                  {item.status === 1 ? 'GO' : 'Claim'}
                </div>
              </div>
            ])}
          </div>
        </div>
        <div
          ref={larkRef}
          className={`${styles.lark} ${animating && styles.animate}`}
        >
          <Lottie animationData={zcoin} loop={true} />
        </div>
      </div>
    </>
  )
}

export default zinPage
