<template>
<div class= "container">
  <div class= "elementsContainer">
    <div  v-for="card in cards" :key="card.name" class= "element">
      <div class= "element__header">
        <h3>{{card.name}}</h3>
          <img class= "element__icon" src= "../assets/img/certified.svg">
      </div>
      <div class= "element__body">
      <div class= "element__topBody">
      <img class= "element__image" src= {{card.image}}>
        <p class= "element__description">{{card.description}}</p>
        </div>
        <div class= "element__bottomBody">
          <b>Desde: ${{card.rate}} / {{card.hours}} horas</b>
          <button class= "element__button">Contratar</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default{
  name: 'app',
  data(){
    return {
      cards:[
      {
                name: "Chuck Norris' Bodyguards",
                description: "Carlos Ray Norris (born March 10, 1940) is an American martial artist and actor. After serving in the United States Air Force, he began his rise to fame as a martial artist.",
                rate: "500",
                hours: "8",
                isCertified: 'certified',
                image: '../assets/img/logo/chuck-norris.png'
            },
            {
                name: "Power Rangers Squad",
                description: "Power Rangers is an American entertainment and merchandising franchise built around a live-action superhero television series, based on the Japanese tokusatsu franchise Super Sentai.",
                rate: "100",
                hours: "12",
                isCertified: 'certified',
                image: '../assets/img/logo/power-rangers.png'
            },
            {
                name: "Kame Security Ltda.",
                description: "Master Roshi, also known as the Turtle Hermit or Jackie Chun, is a master of martial arts, who trained Gohan, Ox-King, Goku, Krillin, and Yamcha. He has a sister named Fortuneteller Baba.",
                rate:"150",
                hours: "10",
                isCertified: 'certified',
                image: '../assets/img/logo/kame.png'
            },
            {
                name: "Capsule Corp.",
                description: "Son Goku is the main protagonist of the Dragon Ball metaseries. A Saiyan, sent to Earth as a baby with the mission to destroy it, Goku became a kind-hearted boy after he bumped his head and was adopted by Grandpa Gohan.",
                rate: "125",
                hours: "12",
                isCertified: 'certified',
                image: '../assets/img/logo/capsule-corp.jpg'
            },
             {
                name: "Raptor Squad",
                description: "She is a female Velociraptor who serves as the leader of her pack and is the oldest of the four raptors consisting of her, Delta, Echo, and Charlie.",
                rate: "225",
                hours: "8",
                isCertified: 'certified',
                image: '../assets/img/logo/raptor-squad.jpg'
            },
            {
                name: "Donuts Security",
                description: "Chief Clarence Clancy Wiggum is a fictional character from the animated television series The Simpsons, voiced by Hank Azaria. He is the chief of police in the show's setting of Springfield.",
                rate: "50",
                hours: "12",
                isCertified: 'certified',
                image: '../assets/img/logo/donuts-security.png'
            },
            {
                name: "S.H.I.E.L.D",
                description: "S.H.I.E.L.D. is a fictional espionage, special law enforcement, and counter-terrorism agency appearing in American comic books published by Marvel Comics. Created by Stan Lee and Jack Kirby in Strange.",
                rate: "250",
                hours: "12",
                isCertified: 'certified',
                image: '../assets/img/logo/Shield-logo.png'
            }      
      ]
    }
  }
}
</script>



<style>
.container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.elementsContainer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  gap: 60px 38px;
  margin-top: 5px;
  margin-bottom: 50px;
  max-width: 1600px;
}

.element {
  max-width: 420px;
}

.element__header {
  border-bottom: 1px solid black;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin-bottom: 10px;
}

.element__description {
  margin: 0;
  text-align: justify;
}

.element__topBody {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}

.element__icon {
  width: 20px;
}

.element__image {
  width: 180px;
  height: 180px;
}

.element__bottomBody {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  gap: 20px;
}

.element__button {
  background-color: black;
  color: white;
  border-radius: 15px;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
}
</style>
