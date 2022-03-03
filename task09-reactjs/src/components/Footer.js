import classes from './Footer.module.css'
function Footer() {
    return(
        <footer className= {classes.footer}>
            <div className= {classes.footer__body}>
                <small className={classes.footer__description}>Desarrollado por Akurey.com Todos los derechos reservados.</small>
                <u className={classes.footer__bottomBody}>Terminos y Condiciones </u>
            </div>
        </footer>
    );  
}

export default Footer;