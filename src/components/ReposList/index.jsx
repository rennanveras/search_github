import { useEffect, useState } from "react";
import styles from './ReposList.module.css';
import '../cores.css';

const ReposList = ({ github, corCSS }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erroAPI, setErroAPI] = useState(false);

    useEffect(() => {
        setEstaCarregando(true);
        setErroAPI(false); // Resetando o estado de erro antes de uma nova requisição

        fetch(`https://api.github.com/users/${github}/repos`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else if (res.status === 404) {
                    throw new Error("Usuário não encontrado");
                }
                throw new Error(res.statusText);
            })
            .then(resJson => {
                setEstaCarregando(false);
                setRepos(resJson);
            })
            .catch(e => {
                setEstaCarregando(false);
                setErroAPI(true);
            });
    }, [github]);

    if (erroAPI) {
        return <h1>Ocorreu um erro ao carregar os repositórios.</h1>;
    }

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
