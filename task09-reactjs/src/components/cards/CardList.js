import CardItem from './CardItem';
import classes from './CardList.module.css'

function CardList(props) {
    return(
        <div className= {classes.elementsContainer}>
            {props.cards.map(card => (
                <CardItem 
                key= {card.name} 
                name= {card.name}
                description= {card.description}
                image= {card.image}
                isCertified= {card.isCertified} 
                hours= {card.hours} 
                rate= {card.rate} 
                />
            ))}
        </div>
    );
}

export default CardList;