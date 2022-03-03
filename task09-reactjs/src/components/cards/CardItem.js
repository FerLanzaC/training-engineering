import classes from './CardItem.module.css'

function CardItem(props) {
    return(
        <div className= {classes.element}>
            <div className= {classes.element__header}>
                <h3>{props.name}</h3>
                <img className= {classes.element__icon} src= {props.isCertified}/>
            </div>
            <div className= {classes.element__body}>
                <div className= {classes.element__topBody}>
                <img className= {classes.element__image} src= {props.image}/>
                <p className= {classes.element__description}> {props.description}</p>
                </div>
                <div className= {classes.element__bottomBody}>
                    <b>Desde: ${props.rate} / {props.hours}</b>
                    <button className= {classes.element__button}>Contratar</button>
                </div>
            </div>
        </div>     
    );
}

export default CardItem; 