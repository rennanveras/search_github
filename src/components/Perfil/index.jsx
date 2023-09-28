import { useEffect, useState } from 'react';
import styles from './Perfil.module.css';
import ReposList from '../ReposList';
import PhotoDefault from '../../assets/default.jpg';
import '../cores.css';

// eslint-disable-next-line react/prop-types
function Perfil({ github}) {
    const [corCSS, setCorCSS] = useState('');
    const [imagemURL, setImagemURL] = useState('');
    

    useEffect(() => {
        const cores = ['purple', 'green', 'blue', 'orange'];
        const corAleatoria = cores[Math.floor(Math.random() * cores.length)];

        setCorCSS(corAleatoria);
        setImagemURL(`https://github.com/${github}.png`)
    }, [github]);

    return (
        <div>
            <div className={`${styles.banner} ${corCSS}`}>
                <div className={styles.avatar} style={{ backgroundImage: `url(${PhotoDefault})` }}>
                    <img src={imagemURL} alt="" />
                </div>
                
                <h1 className={styles.name}>{github}</h1>
            </div>
            <ReposList github={github} corCSS={corCSS} />
        </div>
    );
}

export default Perfil;
