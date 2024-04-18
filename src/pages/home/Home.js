import styles from './Home.module.css'
import flipclock from '../../assets/images/flipclock.png'
import { Link } from 'react-router-dom';

function Home() {
    return(
        <div className={styles.container}>
            <div className={styles.grid_continer}>
                <div className={styles.item}>
                    <Link to={"/widget/flipclock"}>
                        <div className={styles.item_img}>
                            <img src={flipclock} alt='flipclock'></img>
                        </div>
                        <div className={styles.item_title}>
                            <span className={styles.title}>Flip Clock</span>
                            <span className={styles.content}>Flip Clock</span>
                        </div>
                    </Link>
                </div>
                <div className={styles.item}>
                    <div className={styles.item_img}>
                        <span>위젯 이미지</span>
                    </div>
                    <div className={styles.item_title}>
                        <span className={styles.title}>위젯 이름</span>
                        <span className={styles.content}>위젯 설명</span>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item_img}>
                        <span>위젯 이미지</span>
                    </div>
                    <div className={styles.item_title}>
                        <span className={styles.title}>위젯 이름</span>
                        <span className={styles.content}>위젯 설명</span>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item_img}>
                        <span>위젯 이미지</span>
                    </div>
                    <div className={styles.item_title}>
                        <span className={styles.title}>위젯 이름</span>
                        <span className={styles.content}>위젯 설명</span>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item_img}>
                        <span>위젯 이미지</span>
                    </div>
                    <div className={styles.item_title}>
                        <span className={styles.title}>위젯 이름</span>
                        <span className={styles.content}>위젯 설명</span>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item_img}>
                        <span>위젯 이미지</span>
                    </div>
                    <div className={styles.item_title}>
                        <span className={styles.title}>위젯 이름</span>
                        <span className={styles.content}>위젯 설명</span>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item_img}>
                        <span>위젯 이미지</span>
                    </div>
                    <div className={styles.item_title}>
                        <span className={styles.title}>위젯 이름</span>
                        <span className={styles.content}>위젯 설명</span>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item_img}>
                        <span>위젯 이미지</span>
                    </div>
                    <div className={styles.item_title}>
                        <span className={styles.title}>위젯 이름</span>
                        <span className={styles.content}>위젯 설명</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;