/**
Zoo Exercise

We are building a zoo inside a computer. Each animal species in our zoo has lots
of different, particular, behaviors, but all animals talk to each other in a similar
way. Specifically, they all implement a speak method, the output of which is the
arbitrary input string interspersed with an "animal sound" that is particular to that
type of animal. For example, the lion's speak function behaves like so:

  > lion.speak( "I'm a lion" );
  < "I'm roar a roar lion roar"

The tiger's speak function behaves similarly but with a different sound:

  > tiger.speak( "Lions suck" );
  < "Lions grrr suck grrr"

Please write logic and classes to support our zoo in JavaScript (using whatever
class model you like) with attention to code structure and readability.
 */

/**
 * A working example is available at: https://stackblitz.com/edit/typescript-scrm34?devtoolsheight=33&file=index.ts
 */

class Animal {
  public name: string;

  public animalSound: string;

  constructor(name: string, animalSound: string) {
    this.name = name;
    this.animalSound = animalSound;
  }

  speak(phrase: string) {
    return phrase
      .split(" ")
      .map((word) => `${word} ${this.animalSound}`)
      .join(" ");
  }
}

class Lion extends Animal {}

class Tiger extends Animal {}

const lion = new Lion("Lion", "roar");
console.log(lion.speak("Hello everyone"));

const tiger = new Tiger("Tiger", "grrr");
console.log(tiger.speak("Lions suck"));
