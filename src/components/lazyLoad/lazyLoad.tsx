import Lottie from "lottie-react";
import { Suspense } from "react";
import styles from './lazyLoad.module.less'
import loadingZingo from '@/assets/lottie/loading_zingo.json'

/**
 * @description 路由懒加载
 * @param {Element} Comp 需要访问的组件
 * @returns element
 */
const lazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => {
	return (
		<Suspense
			fallback={
				<div className={styles.loadingOverlay}>
          <Lottie animationData={loadingZingo} loop={true} />
        </div>
			}
		>
			<Comp />
		</Suspense>
	);
};

export default lazyLoad;
