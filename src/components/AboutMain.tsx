import React from 'react';
import '../css/main.scss';

export const AboutMain = () => {
    return (
        <main>
            <section className="about_us">
                <div className="container">
                    <p>O nas</p>
                    <p>
                        Przedsiębiorstwo Budownictwa Specjalistycznego i
                        Melioracji Sp. z o.o. od 27 lat świadczy usługi w
                        zakresie kompleksowej budowy instalacji wodociągowych,
                        deszczowych i kanalizacyjnych, stacji uzdatniania wody,
                        przemysłowych oczyszczalni ścieków. W skład oferowanych
                        usług wchodzą również inne roboty ziemne i pozostałe
                        prace z zakresu budownictwa ogólnego.
                    </p>
                    <p>
                        Rzeczowy i wartościowy zakres realizowanych przez nas
                        zadań, lista referencyjna naszych Zleceniodawców oraz
                        wykwalifikowana kadra pozwalają nam skutecznie
                        konkurować na rynku i z satysfakcją poszerzać grono
                        zadowolonych klientów.
                    </p>
                    <p>
                        Posiadane kompetencje pozwalają nam uczestniczyć w
                        realizacji wielu istotnych projektów w skali regionu
                        pełniąc rolę Generalnego Wykonawcy, bądź podwykonawcy,
                        często finansowanych przy współudziale środków unijnych,
                        Banku Światowego, czy też Narodowego Funduszu Ochrony
                        Środowiska.
                    </p>
                    {/*
                    <a href="#">
                        <div className="blue_button">Prezentacja</div>
                    </a>
*/}
                </div>
            </section>
        </main>
    );
};
