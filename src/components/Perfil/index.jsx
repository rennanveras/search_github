import { useEffect, useState } from 'react';
import styles from './Perfil.module.css';
import ReposList from '../ReposList';
import '../cores.css';

function Perfil({ github }) {
    const [corCSS, setCorCSS] = useState('');

    useEffect(() => {
        const cores = ['purple', 'green', 'blue', 'orange'];
        const corAleatoria = cores[Math.floor(Math.random() * cores.length)];

        setCorCSS(corAleatoria);
    }, [github]);

    return (
        <div>
            <div className={`${styles.banner} ${corCSS}`}>
                <img className={styles.avatar} src={`https://github.com/${github}.png`} alt="" />
                <h1 className={styles.name}>{github}</h1>
            </div>
            <ReposList github={github} corCSS={corCSS} />
        </div>
    );
}

export default Perfil;
