import React from 'react';
import '../css/main.scss';

export const Footer = () => {
    return (
        <footer>
            <div className="polygon"></div>
            <div>
                <div className="container">
                    <div>
                        <img src="../images/logo3.png" alt="Logo PBSiM" />
                    </div>
                    <div className="contact_footer_details">
                        <div className="contact_info">
                            <span>
                                Tel: <br />
                                +48 71 7803176
                            </span>
                            <br />
                            <span>
                                Email: <br />
                                sekretariat@pbsim.pl
                            </span>
                            <br />
                        </div>
                        <div className="footer_menu">
                            <a href="../html/index.html">Start</a>
                            <br />
                            <a href="../html/o-nas.html">O nas</a>
                            <br />
                            <a href="../html/oferta.html">Oferta</a>
                            <br />
                            <a href="../html/kontakt.html">Kontakt</a>
                        </div>
                    </div>
                </div>
                <p>Copyright &copy 2020</p>
            </div>
        </footer>
    );
};
