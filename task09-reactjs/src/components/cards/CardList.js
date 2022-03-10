import CardItem from './CardItem';
import classes from './CardList.module.css'

const CardList = ({cards}) => (
    <div className= {classes.elementsContainer}>
        {cards.map(card => (
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
)

export default CardList;
