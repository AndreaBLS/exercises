"use strict";


/* 
The tigers inheritance

We will try to build our class inheritance in order to create instances of Tigers.
As you may know there are two species of Tigers, the Siberian Tigers and the Bengal Tigers. That means every Tiger is unique, but also inherits characteristics from it's own species. 

Let's see how we could build this structure step by step.

At the beginning define a class named AllSpecies. This is the parent class and doesn't inherit from anyone. Define a constructor that is going to be used from all sub-classes that extend AllSpecies. In the AllSpecies constructor define 4 arguments. species, numOfEyes, numOfLegs, and hasTail. These indicate the species of the class that inherits from AllSpecies, how many eyes this species has, how many legs, and if this species has tail or not.

 */

 class AllSpecies {
     constructor(species, numOfEyes, numOfLegs, hasTail) {
         this.species = species;
         this.numOfEyes = numOfEyes;
         this.numOfLegs = numOfLegs;
         this.hasTail = hasTail;
     }
 }

/*  Then it's time to create the Tiger class that extends from AllSpecies and uses inside it's constructor the super with these values. super('Tiger', 2, 4, true). The class Tiger inside it's own constructor also bequeaths some properties to all the sub-classes that will extend from Tiger class. These properties namely are: colorFur, eyeColor, region, eatMeet. The first three are going to be strings, the last is boolean as always.  */

class Tiger {
    constructor(colorFur, eyeColor, region, eatMeet) {
        
    }
}

/* Once this is done create the BengalTiger class that extends Tiger class with the following values ('Orange-black', 'brown', 'India', true). That means that the colorFur is 'orange-black', the eye color is 'brown' etc.

Create the SiberianTiger with the exact same way but use as values the following ('Black-white', 'blue', 'Siberia', false). Yes they are veggan! (at least for our example!). 

Both Siberian and Bengal Tiger classes expose some properties to every unique tiger that will be created from them. These are the following: name, age, height, length and gender

The last step is to instantiate two actual objects, one from each Tiger sub-class.

For example:

Create a unique bengal tiger with these properties ('Richard Parker', 15, 82, 226, 'male');

Create a siberian tiger with these properties ('The Nights King', 990, 88, 204, 'White Walker');

Console.log both tigers after you have stored them into their own variables and see if you can see all the properties they belong to them, plus the ones they inherited from the classes above!

Extra Bonus: Create a function that prints the colorFur. This should be a method that every tiger should have regardless of type! You may want to take a look here first on how to do this.

Anytime you want to visualize the task, take a look at the top of the screen. 
 */