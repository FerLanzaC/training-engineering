import classes from './Searcher.module.css'
import searchLogo from './images/search.png'
import banner from './images/banner-mobile.png'

function Searcher() {
    return(
        <div className= {classes.searcher}>
            <img src={banner} className= {classes.searcher__image}/>
            <div className={classes.searcher__title}>Los Mejores agentes de seguridad</div>
            <div className={classes.searcher__bar}>
            <input type="text" className= {classes.searcher__input} placeholder=" Buscar por Ubicación"/> 
            <img src={searchLogo} className={classes.searcher__icon}/>     
            </div>
        </div>
    );  
}

export default Searcher;