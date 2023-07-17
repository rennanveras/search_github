import { useEffect, useState } from "react";
import styles from './ReposList.module.css';
import '../cores.css';

const ReposList = ({ github, corCSS }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${github}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setEstaCarregando(false);
                setRepos(resJson);
            })
    }, [github]);

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.listItemName}>
                                <b>Nome:</b> {name}
                            </div>
                            <div className={styles.listItemLanguage}>
                                <b>Linguagem:</b> {language}
                            </div>
                            <a className={`${styles.listItemLink} ${corCSS}`} target="_blank" rel="noopener noreferrer" href={html_url}>Visitar no GitHub</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ReposList;
