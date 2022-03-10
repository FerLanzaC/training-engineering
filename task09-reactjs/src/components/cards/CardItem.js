import classes from './CardItem.module.css'

function CardItem({name,isCertified,description,image,rate,hours}) {
    return(
        <div className= {classes.element}>
            <div className= {classes.element__header}>
                <h3>{name}</h3>
                <img className= {classes.element__icon} src= {isCertified}/>
            </div>
            <div className= {classes.element__body}>
                <div className= {classes.element__topBody}>
                <img className= {classes.element__image} src= {image}/>
                <p className= {classes.element__description}> {description}</p>
                </div>
                <div className= {classes.element__bottomBody}>
                    <b>Desde: ${rate} / {hours}</b>
                    <button className= {classes.element__button}>Contratar</button>
                </div>
            </div>
        </div>     
    );
}

export default CardItem; 
