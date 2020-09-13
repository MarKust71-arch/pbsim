import React from 'react';
import '../css/main.scss';
import { Slideshow } from './Slideshow';

export const Main = () => {
    const images = [
        '../images/slider1_1260x660.png',
        '../images/slider2_1260x660.png',
    ];

    return (
        <main>
            <section className="welcome">
                <div className="slideshow-container">
                    {/* <!-- Slider images --> */}
                    {/*
                    <div className="mySlides fade"></div>
                    <div className="mySlides fade"></div>
*/}
                    <Slideshow images={images} />
                </div>

                <p>
                    <span>PBSiM</span>
                    <br />
                    <span>
                        Przedsiębiorstwo Budownictwa Specjalistycznego i
                        Melioracji
                    </span>
                </p>
            </section>

            <section className="about_us_index">
                <div className="container">
                    <p>PBSiM</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus perspiciatis harum beatae officiis
                        reprehenderit quis nisi dignissimos numquam velit.
                        Veniam ut culpa numquam ipsa! Cupiditate rerum
                        distinctio mollitia eveniet architecto?
                    </p>
                </div>
            </section>

            <section className="project">
                <div className="container">
                    <p>Bieżąca realizacja</p>
                    <p>
                        <b>Nazwa projekt:</b> Uporządkowanie gospodarki
                        wodno-ściekowej na terenie aglomeracji Sława
                    </p>
                    <p>
                        <b>Cel projektu:</b> Głównym celem projektu jest
                        Uporządkowanie gospodarki wodno-ściekowej na terenie
                        aglomeracji Sława dla zapewnienia jej zgodności z
                        obowiązującymi przepisami prawa w zakresie oczyszczania
                        ścieków komunalnych dla obniżenia jego presji na
                        środowisko naturalne, w tym na jednolitą część wód, stan
                        zdrowia ludzi i zwierząt, a także na powstrzymanie zmian
                        klimatu.
                    </p>
                </div>
            </section>

            <section className="contact_mention">
                <div className="container">
                    <p>Masz pytania, chcesz nawiązać współpracę?</p>
                    <a href="../html/kontakt.html">
                        <div className="blue_button">Kontakt</div>
                    </a>
                </div>
            </section>
        </main>
    );
};
