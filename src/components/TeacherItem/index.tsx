import React from 'react';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/52793184?s=460&v=4" alt="Danilo O. Pinheiro"/>
                        <div>
                            <strong>Danilo O. Pinheiro</strong>
                            <span>Músico</span>
                        </div>
                    </header>

                    <p> 
                        Arranjador instrumental e Músico há mais de 10 anos.
                        <br /><br />
                        Com mais de 2 anos na área da tecnologia.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 100,00</strong>
                        </p>
                        <button type="button">
                            <img src={WhatsappIcon} alt="whatsapp"/>
                            Entrar Em Contato
                        </button>

                    </footer>    

        </article>
    )
}

export default TeacherItem;