import React from 'react';
import '../css/main.scss';

export const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <a href="../html/index.html">
                        <img src="../images/logo3_small.png" alt="Logo PBSiM" />
                    </a>
                    <div className="menu">
                        <ol>
                            <li>
                                <a href="../html/index.html" className="active">
                                    Start
                                </a>
                            </li>
                            <li>
                                <a href="../html/o-nas.html">O nas</a>
                            </li>
                            <li className="offertLink">
                                <span>Oferta</span>
                                <ul className="submenu">
                                    <li>
                                        <a href="../html/oferta-inwestycje.html">
                                            Inwestycje
                                        </a>
                                    </li>
                                    <li>
                                        <a href="../html/oferta-nieruchomosci.html">
                                            Nieruchomości
                                        </a>
                                    </li>
                                    <li>
                                        <a href="../html/oferta-praca.html">
                                            Praca
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="../html/realizacje.html">Realizacje</a>
                            </li>
                            <li>
                                <a href="../html/aktualnosci.html">
                                    Aktualności
                                </a>
                            </li>
                            <li>
                                <a href="../html/kontakt.html">Kontakt</a>
                            </li>
                        </ol>
                    </div>
                    <div className="nav_icon">
                        <img src="../images/bars-solid.svg" alt="Ikona menu" />
                    </div>
                </nav>
            </div>
        </header>
    );
};
