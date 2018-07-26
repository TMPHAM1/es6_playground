
import $ from 'jquery'
export class Person {
    constructor(name) {
        this.name = name;


    }
    speak(text) {
        return `${this.name} Says: ${text}`;
    }
}


export class SuperPerson extends Person { 
    constructor (name,ninjutsu) {
        super(name);
        this.ninjutsu = ninjutsu;
    }
    speak(text) {
       
       
        $('body').append(`<h1>${super.speak(text)}</h1>`)

    }
    
    saySuperPower() {
        this.speak(`My special ninjutsu is ${this.ninjutsu}`)
    }
} 

