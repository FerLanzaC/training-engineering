import logo from './images/logo.png'
import classes from './MainNavigation.module.css'

function MainNavigation() {
    return(
     <header className= {classes.header}>
        <div className= {classes.header__body}>
        <img src={logo} class={classes.header__img}/>
           <button className={classes.header__button}>
              <canvas className={classes.header__rectangle} ></canvas>
              <canvas className={classes.header__rectangle} ></canvas>
              <canvas className={classes.header__rectangle}></canvas>
           </button>
        </div>
     </header>  
    );  
}
export default MainNavigation;