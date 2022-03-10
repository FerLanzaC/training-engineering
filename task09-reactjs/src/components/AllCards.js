import classes from './AllCards.module.css'
import CardList from './cards/CardList'
import { DataCards } from './Data'

const AllCards = () => ( <div className= {classes.container}> <CardList cards={DataCards} /> </div> )

export default AllCards;
