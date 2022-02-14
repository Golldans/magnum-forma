import styles from './styles/index.module.css';


export default function Principium(){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.first}>
                    <div className={styles.navContainer}>
                        INDEX
                    </div>
                    <div className={styles.navContainer}>
                        ITEMS
                    </div>
                    <div className={styles.navContainer}>
                        LOGIN
                    </div>
                </div>
                <div className={styles.second}>
                <div className={styles.hero}>

                    <div className={styles.title}>
                        GOLLDAN
                    </div>

                    <div className={styles.subtitle}>

                    </div>

                    <div className={styles.verticalPhoto}>
                        
                    </div>
                    <div className={styles.horizontalPhoto}>
                        
                    </div>
                    <div className={styles.mote}>
                        
                    </div>

                    <div className={styles.interests}>

                    </div>

                    <div className={styles.me}>
                        whoami
                    </div>

                    </div>
                </div>
                <div className={styles.third}/>
            </div>
        </>
    )
}