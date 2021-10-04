function Pokemon(name,type,attack,defense) {
    this.name = name;
    this.type = type;
    this.attack = attack;
    this.defense = defense;

    this.getType = function() {
        return type;
    }
    this.getAttack = function() {
        return this.attack;
    }
    this.getDefense = function() {
        return this.defense;
    }
}

function calculateDamage(pokemon1, pokemon2){
    let damage;
    let typeOne = pokemon1.getType();
    let typeTwo = pokemon2.getType();
    console.log(typeOne);
    let effectiveness = calculateEffective(typeOne, typeTwo);
    console.log(effectiveness);
    damage = 50 * (pokemon1.attack / pokemon2.defense) * effectiveness;
    return damage;

}

const calculateEffective = function(typeOne, typeTwo) {
    let types = typeOne + typeTwo;
    switch(types){
        case 'firegrass' :
            return 2;
            break;

        case 'waterfire' :
            return 2;
            break;

        case 'grasswater' :
            return 2;
            break;

        case 'electricwater' :
            return 2;
            break;

        case 'fireelectric' :
            return 1;
            break;

        case 'electricfire' :
            return 1;
            break;

        case 'grasselectric':
            return 1;
            break;

        case 'electricgrass' :
            return 1;
            break;

        default:
            return 0.5;
            break;
    }
}

let pokemon1 = new Pokemon ('Bulbasaur', 'fire', '90', '75');
let pokemon2 = new Pokemon ('Squirtle', 'grass', '57', '50');
console.log(calculateDamage(pokemon1,pokemon2));