"use client";
import Image from 'next/image';
// import styles from './page.module.css'
import styles from '@/styles/LandingPage.module.scss';
import bannerImage from '@/assets/hombre-tiro-medio-gafas-vr.jpg';
import QuickStopImage1 from '@/assets/WhatsApp Image 2023-12-11 at 10.14.26 PM.jpeg';
import QuickStopImage2 from '@/assets/WhatsApp Image 2023-12-11 at 10.14.27 PM.jpeg';
import CompanyLogo from '@/assets/174a6eab-ea91-4643-bf49-e0fc18fe3f2e - Diego Balderrama.jpeg';

export default function Home() {
    return (
        <main className={styles['landing-page']}>
            <div className={styles.nav}>
                <div className={styles['nav-desktop']}>
                    <div className="logo">
                        <Image src={CompanyLogo} alt="Logo" width={80} height={80} />
                    </div>
                    <div className={styles["links"]}>
                        <a href="#">Inicio</a>
                        <a href="#">Nosotros</a>
                        <a href="#">Contactanos</a>
                        <a href="#">Ubicación</a>
                    </div>
                </div>
                <div className={styles['nav-mobile']}>

                </div>
            </div>
            <div className={styles['banner']}>
                <div className={styles["text_box"]}>
                    <div className={styles["text"]}>
                        <h1>¡Bienvenido a la página de aterrizaje!</h1>
                        <p>Esto es una página de aterrizaje</p>
                        <button className={styles.button}>¡Comienza ahora!</button>

                    </div>
                </div>

            </div>

            <div className={styles['desciption']}>
                <div className={styles["description__text"]}>
                    <div className={styles['description__text-title']}>
                        <h2 >¿Qué es una página de aterrizaje?</h2>
                    </div>
                    <div className={styles['description__text-content']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magni voluptates, asperiores dolores voluptatibus neque blanditiis eaque recusandae, provident veniam cum ipsum ab, pariatur vero distinctio doloremque nam deserunt deleniti earum ducimus. Ratione nostrum aliquid deserunt aut, voluptas similique dolorum aliquam eligendi, magnam commodi distinctio provident assumenda praesentium hic totam.
                    </div>
                </div>
                <div className={styles["description__icons"]}>
                    <div className={styles['description__icons-icon-1']}>
                        <Image src={CompanyLogo} alt="Logo" className={styles['image1']} />
                    </div>
                    {/* <div className={styles['description__icons-icon-2']}>
            <Image src={QuickStopImage2} alt="Logo" className={styles['image2']} />
          </div> */}
                </div>
            </div>
            <div className={styles['companys']}>
                <h2>Compañias que se poseen</h2>
                <div className={styles['row-1']}>
                    <div className={styles['box']}>
                        <Image src={QuickStopImage1} alt="Logo" className={styles['image1']} />
                        <div>
                            <h3>Quick Stop</h3>
                            <p>Descripción de la compañia</p>
                        </div>
                    </div>
                    <div className={styles['box']}>
                        <Image src={QuickStopImage1} alt="Logo" className={styles['image1']} />
                        <div>
                            <h3>Quick Stop</h3>
                            <p>Descripción de la compañia</p>
                        </div>
                    </div>
                    <div className={styles['box']}>
                        <Image src={QuickStopImage1} alt="Logo" className={styles['image1']} />
                        <div>
                            <h3>Quick Stop</h3>
                            <p>Descripción de la compañia</p>
                        </div>
                    </div>

                </div>
                <div className={styles['row-2']}>
                    <div className={styles['box']}>
                        <Image src={QuickStopImage2} alt="Logo" className={styles['image2']} />
                        <div>
                            <h3>Quick Stop</h3>
                            <p>Descripción de la compañia</p>
                        </div>
                    </div>
                    <div className={styles['box']}>
                        <Image src={QuickStopImage1} alt="Logo" className={styles['image2']} />
                        <div>
                            <h3>Quick Stop</h3>
                            <p>Descripción de la compañia</p>
                        </div>
                    </div>
                    <div className={styles['box']}>
                        <Image src={QuickStopImage1} alt="Logo" className={styles['image2']} />
                        <div>
                            <h3>Quick Stop</h3>
                            <p>Descripción de la compañia</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['ubication']}>
                <h2>Ubicación</h2>
                <div className={styles['map']}>
                    <div className={styles['ubication__map']}>
                        <iframe className={styles['iframe']} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425.8434217508825!2d-113.50763612518847!3d31.36594978905401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x812ba549b7883a9b%3A0x79ddba99c5403d62!2sQuick%20Stop!5e0!3m2!1ses-419!2smx!4v1704334044066!5m2!1ses-419!2smx" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                    <div className={styles['text']}>
                        <div>
                            <h3>
                Dirección
                            </h3>
                            <p>
                9F8R+CW, 83556 Puerto Peñasco, Son.
                            </p>
                        </div>
                        <div>
                            <h3>
                Teléfono
                            </h3>
                            <p>
                638 388 5000
                            </p>
                        </div>
                        <div>
                            <h3>
                Correo
                            </h3>
                            <p>
                test@test.com
                            </p>
                        </div>
                        <div>
                            <h3>
                Horario de atención
                            </h3>
                            <p>
                Lunes a viernes de 9:00 a 18:00
                            </p>

                        </div>
                    </div>
                </div>

            </div>
            <div className={styles['footer']}>
                <div className={styles['section-1']}>
                    <div className={styles['logo-section']}>
                        <Image src={CompanyLogo} alt="Logo" className={styles['logo']} />
                    </div>
                    <div className={styles['faqs']}>
                        <h3>Preguntas frecuentes</h3>
                        <div className={styles['faqs__list']}>
                            <div className={styles['faqs__list-item']}>
                                <a href="#">¿Qué es una página de aterrizaje?</a>
                            </div>
                            <div className={styles['faqs__list-item']}>
                                <a href="#">¿Qué es una página de aterrizaje?</a>
                            </div>
                            <div className={styles['faqs__list-item']}>
                                <a href="#">¿Qué es una página de aterrizaje?</a>
                            </div>
                            <div className={styles['faqs__list-item']}>
                                <a href="#">¿Qué es una página de aterrizaje?</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles['social']}>
                        <h3>Siguenos en nuestras redes</h3>
                        <div className={styles['social__list']}>
                            <div className={styles['social__list-item']}>
                                <a href="#">Facebook</a>
                            </div>
                            <div className={styles['social__list-item']}>
                                <a href="#">Instagram</a>
                            </div>
                            <div className={styles['social__list-item']}>
                                <a href="#">Twitter</a>
                            </div>
                            <div className={styles['social__list-item']}>
                                <a href="#">Youtube</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['legal-section']}>
                    <div className={styles['blank']}>

                    </div>
                    <div className={styles['reserved']}>
                        <p>© 2021 Todos los derechos reservados</p>
                    </div>
                    <div className={styles['legal']}>
                        <a href="#">Términos y condiciones</a>
                        <a href="#">Política de privacidad</a>
                    </div>
                </div>
            </div>
        </main>
    );
}
