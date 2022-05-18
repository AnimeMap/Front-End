import './style.css'

function Footer() {

    const url_facebook = 'https://i.imgur.com/6A3PCA2.png';
    const url_instagram = 'https://i.imgur.com/fojnAgc.png';
    const url_youtube = 'https://i.imgur.com/yuX8C03.png';

    return (
        <div className="footer">
            <div className="container_footer">
                <div className="paragrafo">
                    <p><span>Vale</span>Mobi</p>
                </div>
            </div>

            <div className="container_footer">
                <div className="box-item">
                    <img id="imagemNotFound" src={url_facebook} alt="" />
                </div>
                <div className="box-item">
                    <img id="imagemNotFound" src={url_instagram} alt="" />
                </div>
                <div className="box-item">
                    <img id="imagemNotFound" src={url_youtube} alt="" />
                </div>
            </div>
            <div className="paragrafo">
                <p>© 2022 AnimeMap Entretenimento. Todos os direitos reservados | 
                    
                    <a href="https://www.sonymusic.com/privacy-policy/#your-california-privacy-rights" target="_blank">
                        Política de Privacidade
                    </a>
                    |
                    <a href="https://www.sonymusic.com/terms-and-conditions/" target="_blank">
                        Termos e condições
                    </a>|
                    <a href="https://github.com/DuduzinCardoso" target="_blank">
                        Feito por Eduardo
                    </a>
                </p>
            </div>
        </div>

    )

}
export default Footer;