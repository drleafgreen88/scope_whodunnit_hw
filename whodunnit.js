//EPISODE 1. Universally considered the weakest. Not by me.
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
};

const declareMurderer = function () {
    return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
//Predicted result: I don't see anything wrong with this bit of code. It should print 'The murderer is Miss Scarlet.'
//Actual result: Worked as I expected it to.



//EPISODE 2: Underrated.
const murderer = 'Professor Plum';

const changeMurderer = function () {
    murderer = 'Mrs. Peacock';
}

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
//Predicted Result: This should throw an error because the changeMurderer function is attempting to overwrite a previously declared constant variable.
//Actual Result: Threw a Type Error: Assignment to constant variable. The original murder cannot be overwritten due to being declared a constant.



//EPISODE 3: Saw it five times.
let murderer = 'Professor Plum';

const declareMurderer = function () {
    let murderer = 'Mrs. Peacock';
    return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
//Predicted Result: This should print "The murderer is Mrs. Peacock". I'm not sure what the 'First Verdict' is doing.
//Actual Result: Printed two statements. The first was as expected. However, I didn't anticipate that the second statement would print as "The murderer is Professor Plum". Seems obvious now, but even though a constant function is being declared where the murderer is Mrs. Peacock, the murder variable hasn't been changed to a constant.



//EPISODE 4: Classic.
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function () {
    let suspectThree = 'Colonel Mustard';
    return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);
//Predicted Result: This should print the list of suspects with Mrs. Peacock replaced by Colonel Mustard. It should then print "Suspect Three is Colonel Mustard".
//Actual Result: Printed the list as expected, but then stated suspect three as Mrs. Peacock. This is because the let declaration is only calling Colonel Mustard the third suspect in that particular block. Once the list is called outside of that block, the code reverts to the original list.



//EPISODE 5: The best.
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
};

const changeWeapon = function (newWeapon) {
    scenario.weapon = newWeapon;
}

const declareWeapon = function () {
    return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);
//Predicted Result: This should print the scenario with the weapon replaced with 'Revolver'. Nothing should conflict with the scenario that would cause the code to not run.
//Actual Result: Worked as expected.



//EPISODE 6: Controversial opinion: The worst.
let murderer = 'Colonel Mustard';

const changeMurderer = function () {
    murderer = 'Mr. Green';

    const plotTwist = function () {
        murderer = 'Mrs. White';
    }

    plotTwist();
}

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
//Predicted Result: This should print that the murderer is Mr. Green. The plotTwist function isn't doing anything in this scenario and isn't being called.
//Actual Result: Completely failed to see that the plotTwist function is being called within the changeMurderer function. Therefore, it overwrites the original changeMurderer of Mr. Green and changes it to Mrs. White. Ah well, live and learn I guess.



//EPISODE 7: Meh.
let murderer = 'Professor Plum';

const changeMurderer = function () {
    murderer = 'Mr. Green';

    const plotTwist = function () {
        let murderer = 'Colonel Mustard';

        const unexpectedOutcome = function () {
            murderer = 'Miss Scarlet';
        }

        unexpectedOutcome();
    }

    plotTwist();
}

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
//Predicted Result: This should print "The murderer is Mr. Green". The nested functions have changed the murderer multiple times, but it should ultimately revert back to the original change at the top.
//Actual Result: Worked as expected.



//EPISODE 8: Fanboys suck. It rocks.
const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
};

const changeScenario = function () {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';

    const plotTwist = function (room) {
        if (scenario.room === room) {
            scenario.murderer = 'Colonel Mustard';
        }

        const unexpectedOutcome = function (murderer) {
            if (scenario.murderer === murderer) {
                scenario.weapon = 'Candle Stick';
            }
        }

        unexpectedOutcome('Colonel Mustard');
    }

    plotTwist('Dining Room');
}

const declareWeapon = function () {
    return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
//Predicted Result: This should print "The weapon is candlestick". I don't really know why.
//Actual Result: Worked as expected. I think it's because the function has stated that if the murder is 100% Colonel Mustard, the weapon must be a candle stick. The rest of the functionality is a bit of a red herring to confuse the issue.



//EPISODE 9: Please, no more.
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
}

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
//Predicted Result: This should return "The murderer is Mrs. Peacock". The === doesn't permanently assign Professor Plum as the murderer, so the let murderer = 'Mrs. Peacock' function overwrites it.
//Actual Result: Returned the opposite. Not completely sure how it's working, but it seems like 'Mrs. Peacock' isn't being accessed. It may be because the let statement cannot ovewrite the original based on the fact that the same value has been stated twice before? I dunno.