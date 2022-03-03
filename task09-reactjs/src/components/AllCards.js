import classes from './AllCards.module.css'
import CardList from './cards/CardList'
import chuckLogo from './images/logo/chuck-norris.png'
import powerLogo from './images/logo/power-rangers.png'
import kameLogo from './images/logo/kame.png'
import capsuleLogo from './images/logo/capsule-corp.jpg'
import raptorLogo from './images/logo/raptor-squad.jpg'
import donutLogo from './images/logo/donuts-security.png'
import shieldLogo from './images/logo/Shield-logo.png'
import certified from './images/certified.svg'
const DATA = [
    {
        name: "Chuck Norris' Bodyguards",
        description: "Carlos Ray Norris (born March 10, 1940) is an American martial artist and actor. After serving in the United States Air Force, he began his rise to fame as a martial artist.",
        rate: "500",
        hours: "8",
        isCertified: certified,
        image: chuckLogo
      },
      {
         name: "Power Rangers Squad",
        description: "Power Rangers is an American entertainment and merchandising franchise built around a live-action superhero television series, based on the Japanese tokusatsu franchise Super Sentai.",
        rate: "100",
        hours: "12",
        isCertified: certified,
        image: powerLogo
      },
      {
        name: "Kame Security Ltda.",
        description: "Master Roshi, also known as the Turtle Hermit or Jackie Chun, is a master of martial arts, who trained Gohan, Ox-King, Goku, Krillin, and Yamcha. He has a sister named Fortuneteller Baba.",
        rate:"150",
        hours: "10",
        isCertified: certified,
        image: kameLogo
      },
      {
        name: "Capsule Corp.",
        description: "Son Goku is the main protagonist of the Dragon Ball metaseries. A Saiyan, sent to Earth as a baby with the mission to destroy it, Goku became a kind-hearted boy after he bumped his head and was adopted by Grandpa Gohan.",
        rate: "125",
        hours: "12",
        isCertified: certified,
        image: capsuleLogo
      },
      {
        name: "Raptor Squad",
        description: "She is a female Velociraptor who serves as the leader of her pack and is the oldest of the four raptors consisting of her, Delta, Echo, and Charlie.",
        rate: "225",
        hours: "8",
        isCertified: certified,
        image: raptorLogo
      },
      {
        name: "Donuts Security",
        description: "Chief Clarence Clancy Wiggum is a fictional character from the animated television series The Simpsons, voiced by Hank Azaria. He is the chief of police in the show's setting of Springfield.",
        rate: "50",
        hours: "12",
        isCertified: certified,
        image: donutLogo
      },
      {
        name: "S.H.I.E.L.D",
        description: "S.H.I.E.L.D. is a fictional espionage, special law enforcement, and counter-terrorism agency appearing in American comic books published by Marvel Comics. Created by Stan Lee and Jack Kirby in Strange.",
        rate: "250",
        hours: "12",
        isCertified: certified,
        image: shieldLogo
      }
];
function AllCards() {
    return(
      <div className= {classes.container}>
         <CardList cards={DATA} />
      </div>
    );  
}

export default AllCards;