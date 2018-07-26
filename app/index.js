import {Person, SuperPerson} from "./person";


const naruto = new Person("Naruto"); 

console.log(naruto.speak('Come back to the village, Sasuke'));

const sasuke = new SuperPerson('Sasuke', 'Chidori');


sasuke.speak("You're a fool");
sasuke.saySuperPower();