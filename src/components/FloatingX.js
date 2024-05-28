// components/FloatingXs.js
import styles from './FloatingXs.module.css';

const FloatingXs = () => {
    return (
        <div className={styles.container}>
            {[...Array(6)].map((_, rowIndex) => (
                <div key={rowIndex} className={styles.row}>
                    {[...Array(4)].map((_, colIndex) => (
                        <span key={colIndex} className={styles.floatingX}>X</span>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default FloatingXs;
