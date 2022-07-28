//COMMENTS

// var number = 5; // in-line comment

/* this is a
multi-line comment
 */

number = 9;

//DATA TYPES AND VARIABLES

/* Data Types:
undefined, null, boolean, string, symbol
number, object
 */

var myName = "Alex";

myName = 8;

let ourName = "CCCP";

const pi = 3.14;

/*
var - used throughout the whole program
let - only used within the scope of where it is declared
const - a variable that can never change
 */

//STORING VALUES WITH THE ASSIGNMENT OPERATOR

var a;
var b = 2;

a = 7;
b = a;

console.log(a);

//INITIALIZING VARIABLES WITH ASSIGNMENT OPERATOR

var a = 9;

//UNINITIALIZED VARIABLES

var a = 5;
var b = 10;
var c = "I am a";

//CASE SENSITIVITY IN VARIABLES

var StUdLyCapVar;

STUDLYCAPVAR = 10; //wrong because it's case sensitive

var studlyCapVar;

studlyCapVar = 10; //properCamelCase

//BASIC MATH

var sum = 10 + 0;

console.log(sum);

//INCREMENT AND DECREMENT

var myVar = 87;
myVar++;
console.log(myVar);
myVar--;
console.log(myVar);

var ourDecimal = 8.345;
console.log(ourDecimal);

var product = 2.0 * 2.5
console.log(product);

var quotient = 4.4 / 2.0;
console.log(quotient);

var remainder;
remainder = 11 % 3;
console.log(remainder);

//AUGMENTED MATH OPS

var a = 3;
var b = 17;
var c = 12;

a = a + 12;
b = 9 + b;
c = c + 7;
console.log(a + b + c);
console.log(a);

a += 12;
console.log(a);

a -= 12;
console.log(a);

//COMPOUND ASSIGNMENT WITH
//AUGMENTED MULTIPLICATION

a *= 5;
b *= 3;
c *= 10;
console.log(a + " " + b + " " + c);

//DECLARE STRING VARIABLES

var firstName = "Alan";
var lastName = "Turing";

//ESCPAING LITERAL QUOTES

var myStr = "I am a \"double quoted\" string inside \"double quotes\""

console.log(myStr);

//QUOTING STRING WITH SINGLE QUOTES

myStr = 'double "quote!"';
console.log(myStr);
/* also works with backticks*/

//ESCAPE SEQUENCES

/*
CODE OUTPUT
\' single quotes
\" double quotes
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed

//CONCAT STRING /W "+"

var ourStr = "I come first. " + "I come second.";

console.log(ourStr);

//CONCAT STRING /W "+="

var ourStr = "I come first. ";
ourStr += "I come second.";

console.log(ourStr);

//CONSTRUCTING STRINGS /W VARIABLES

var ourName = "freeCodeCamp";
ourStr = "Hello, our name is " + ourName + ", how are you?";

console.log(ourStr);

//APPENDING VARIABLES TO STRINGS

var anAdj = "awesome"
ourStr = "Principal33 is ";
ourStr += anAdj;

console.log(ourStr);

//LENGTH OF A STRING

var crazyLengthyWord = "haha";

var wordLength = crazyLengthyWord.length;

console.log(wordLength);

//BRACKET NOTATION

firstLetter = anAdj[0];

console.log(firstLetter);

//STRING IMMUTABILITY

myStr = "Jello World";

/* this doesn't work
myStr[0] = "H"; */

// this does
myStr = "Hello World"

console.log(myStr);

//nTH CHARACTER

console.log(myStr[4])

// or

console.log(myStr[myStr.length - 7]);

//WORD BLANKS

function wordBlanks(myNoun, myAdj, myVerb, myAdv) {
    var result = " ";
    result += "The " + myAdj + " " + myNoun + " " + myVerb + " to the store " + myAdv;
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));

//ARRAYS

var ourArray = ["John", 23];

console.log(ourArray);

//NESTED ARRAYS

ourArray = [
    ["the universe", 42],
    ["everything", 101010]
];

console.log(ourArray);

//ACCESS ARRAY DATA WITH INDEXES

ourArray = [50, 60, 70];
var ourData = ourArray[0];

console.log(ourData);

//MODIFY ARRAY DATA WITH INDEXES

ourArray = [18, 65, 23];
ourArray[1] = 100;

console.log(ourArray);

//ACCESS MULTI-DIMENSIONAL ARRAY WITH INDEXES

ourArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [10, 11, 12], 13, 14
    ]
];

ourData = ourArray[3][0][1];

console.log(ourData);

//MANIPULATE ARRAYS WITH push()

ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);

console.log(ourArray);

//MANIPULATE ARRAYS WITH pop()

ourArray = [1, 2, 3];
ourArray.pop();

console.log(ourArray);

var kj = ourArray.pop();

console.log(kj);

//MANIPULATE ARRAYS WITH shift()

var thisArray = ["Stimpson", "J", "cat"];
var removed = thisArray.shift();

console.log(thisArray);
console.log(removed);

//MANIPULATE ARRAYS WITH unshift()

thisArray.unshift("Testttt");

console.log(thisArray);

//SHOPPING LIST

var myList = [
    ["cereal", 3],
    ["milk", 2],
    ["banan", 5]
];

console.log(myList);

//REUSABLE CODE WITH FUNCTIONS

function ourReusableFunction() {
    console.log("Hey, World!");
}

ourReusableFunction();
ourReusableFunction();
ourReusableFunction();

function f() {
    console.log("sup?");
}

f();

//PASSING VALUES TO FUNCTIONS WITH ARGUMENTS

function ourFunction(a, b) {
    console.log(a - b);
}

ourFunction(10, 5);

function fWithArgs(a, b) {
    console.log(a + b);
}

fWithArgs(20, 30);

//GLOBAL SCOPE AND FUNCTIONS

var myGlobal = 10;

function fun1() {
    oopsGlobal = 5
    /* should have var.
    some IDEs enforce var type automatically
    some, like jsfiddle.net, don't
    and as a result the oopsGlobal variable
    is declared globally
    */
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();

function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}

//LOCAL SCOPE AND FUNCTIONS

myLocalScope();
/* this errors out because
the variable myVar was
declared locally in
the function myLocalScope

console.log(myVar);
*/

//GLOBAL VS LOCAL SCOPE IN FUNCTIONS

var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "Sweater";
    return outerWear;
}

console.log(myOutfit());

/* local variables take precedence over global variables */

console.log(outerWear);

/* they can coexist with the same name */

//RETURN A VALUE FROM A FUNCTION

function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5));

//UNDERSTANDING UNDEFINED VALUE RETURNED FROM FUNCTION

var sum = 0;

function addThree() {
    sum = sum + 3;
}

console.log(addThree);

//ASSIGNMENT WITH A RETURNED VALUE

var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

console.log(changed);

//STAND IN LINE

function nextInLine(arr, item) {
    arr.push(item);
    return item;
}

function nextInLineRemover(arr, item) {
    arr.pop(item);
    return item;
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLineRemover(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//BOOLEAN VALUES

function welcomeToBooleans() {
    return true
}

console.log(welcomeToBooleans());

//IF STATEMENTS

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

console.log(ourTrueOrFalse(true));
console.log(ourTrueOrFalse(false));

//EQUALITY OPERATORS

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(22));
console.log(testEqual(12));

//COMPARISON WITH THE STRICT EQUALITY OPERATOR

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(10));
console.log(testStrict(7));

/*

CHALLENGE THURSDAY


1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
1 5 10 10 5 1
1 6 15 20 15 6 1
...
*/


function rowBefore(n, arr) {
    for (i = 0; i < n; i++) {
        console.log(arr[i]);
    }
    n++;
    arr[n - 1]
}

/*

var thisArray = [1];
var n = 2;

for(var i=0; i<n; i++) {
	console.log(thisArray[i]);
  n++;
}

*/

//COMPARISON WITH THE EQUALITY OPERATOR

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));
console.log(testEqual(12));
console.log(testEqual('12'));

function testStrict(val) {
    if (val === 3) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(3));
console.log(testStrict('3'));

/*
Strict equality testing doesn't do any type conversions
*/

//PRACTICE COMPARING DIFFERENT VALUES

function compareEquality(a, b) {
    if (a == b) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(1, 2));

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(10));

function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual("17"));
console.log(testStrictNotEqual(17));

//COMPARISON WITH THE LOGICAL AND OPERATOR

function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }
    return "10 or under";
}

console.log(testGreaterThan(20));

//COMPARISON WITH THE GREATER THAN OR EQUAL TO OPERATOR

function testGreaterThanOrEqual(val) {
    if (val >= 20) {
        return "20 or over";
    }
    if (val >= 10) {
        return "10 or over";
    }
    return "Less than 10";
}

console.log(testGreaterThanOrEqual(16));

//COMPARISON WITH THE LESS THAN OPERATOR

function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }
    if (val < 55) {
        return "Under 55";
    }
    return "55 or over";
}

console.log(testLessThan(45));

//COMPARISON WITH THE LESS THAN OR EQUAL TO OPERATOR

function testLessThanOrEqual(val) {
    if (val <= 12) {
        return
    }
}

//COMPARISONS WITH LOGICAL AND OPERATOR

function testLogicalAndWrong(val) {
    if (val <= 50) {
        if (val >= 25) {
            return "Yes";
        }
    }
    return "No";
}

function testLogicalAndCorrect(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

//COMPARISONS WITH THE LOGICAL OR OPERATOR

function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}

//ELSE STATEMENTS

function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or smaller";
    }
}

//ELSE IF STATEMENTS

function testElseIf(val) {
    if (val > 10) {
        return ">10";
    } else if (val < 5) {
        return "a";
    } else
        return "b";
}

//LOGICAL ORDER IN IF ELSE STATEMENT

function orderMyLogic(val) {
    if (val < 10) {
        return "less than 10";
    } else if (val < 20) {
        return "boss";
    } else if (val < 30) {
        return "nonboss";
    } else {
        return "coss";
    }
}

//GOLF CODE

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 2) {
        return names[6];
    }

    return "Change Me";
}

console.log(golfScore(5, 1));

//SWITCH STATEMENTS

function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta"
    }
    return answer;
}

console.log(caseInSwitch(1));

//DEFAULT OPTION IN SWITCH STATEMENT

function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "a";
            break;
        case "b":
            answer = "b";
            break;
        default:
            answer = "un defi ned";
    }
    return answer;
}

console.log(switchOfStuff("c"));

//MULTIPLE IDENTICAL OPTIONS IN SWITCH STATEMENTS

function sequentialSizes(val) {
    var answer = "";
    switch (val) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            answer = "low";
            break;
        case 5:
            answer = "OK";
            break;
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            answer = "high"
    }
    return answer;
}

console.log(sequentialSizes(7));

//REPLACING IF ELSE CHAINS WITH SWITCH

function chainToSwitch(val) {
    var answer = "";

    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "the answer";
            break;
        case 1:
            answer = "good";
            break;
        case 99:
            answer = "problems but a switch aint one";
            break;
    }
    return answer;
}

console.log(chainToSwitch(99));

//RETURNING BOOLEAN VALUES FROM FUNCTIONS

function isLess(a, b){
    return a<b;
}

console.log(isLess(20,15));

//RETURNING EARLY PATTERN FOR FUNCTIONS

function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(-1, 4));

//COUNTING CARDS (LOL)

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    var holdbet = 'Hold';
    if (count > 0)
        holdbet = 'Bet';

    return count + " " + holdbet;
}

let count = 0

cc(8);
cc(4);
cc(7);
cc('K');
cc('A');
console.log(cc(4));

//BUILD JAVASCRIPT OBJECTS

var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
};

//ACCESING OBJECT PROPERTIES WITH DOT NOTATION

var testObj = {
    'hat': 'ballcap',
    'shirt': 'jersey',
    'shoes': 'cleas'
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

console.log(hatValue);

//ACCESSING OBJECT PROPERTIES WITH BRACKET NOTATION

var testObj = {
    'an entree': 'hamburger',
    'my side': 'veggies',
    'the drink': 'water'
};

var entreeValue = testObj['an entree'];
var drinkValue = testObj["the drink"];

console.log(entreeValue + " " + drinkValue);

//ACCESSING OBJECT PROPERTIES WITH VARIABLES

var testObjTwo = {
    12: 'nama',
    16: 'jama',
    23: 'tero'
};

var idNumber = 16;
var player = testObjTwo[idNumber];

console.log(player);

//UPDATING OBJECT PROPERTIES

var myDog = {
    'name': 'Bella',
    'colour': 'brown'
};

myDog.name = 'Happy Bella';

console.log(myDog.name);

//ADD NEW PROPERTIES TO AN OBJECT

myDog.bark = "wreff";
myDog['legs'] = 4; //is possible but not recommended

console.log(myDog.bark);
console.log(myDog.legs);

//DELETE PROPERTIES FROM AN OBJECT

delete myDog.legs;

console.log(myDog.legs);

//USING OBJECTS FOR LOOKUPS

function phoneticLookup(val) {
    //can replace a switch
    //statement with an object

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver"
    };
    result = lookup[val];

    return result;
}

console.log(phoneticLookup('delta'));

//TESTING OBJECTS FOR PROPERTIES

function checkObj(checkProp) {
    if (myDog.hasOwnProperty(checkProp)) {
        return myDog[checkProp];
    } else {
        return "Not Found";
    }
}

console.log(checkObj("bark"));
console.log(checkObj("hello"));

//MANIPULATING COMPLEX OBJECTS

var myMusic = [ //isArray
    {
        'artist': 'Kendrick',
        'title': 'To Pimp A Butterfly',
        'release_year': 2015,
        'formats': [
            '.mp3',
            '.wav',
            '.flac'
        ],
        'platinum': true
    },

    {
        'artist': 'J Cole',
        'title': '2014 Forest Hills Drive',
        'release_year': 2014,
        'formats': [
            '.mp3',
            '.wav',
            '.flac',
            '.zebra'
        ],
        'platinum': true
    }
]

//ACCESSING NESTED OBJECTS

var myStorage = {
    'car': {
        'inside': {
            'glove box': 'maps',
            'passenger seat': 'crumbs'
        },
        'outside': {
            'trunk': 'jack'
        }
    }
};

var gloveBoxContents = myStorage = myStorage.car.inside['glove box'];

console.log(gloveBoxContents);

//ACCESSING NESTED ARRAYS

var myPlants = [{
    type: 'flowers',
    list: [
        'rose',
        'tulip',
        'dandelion'
    ]
},
    {
        type: 'trees',
        list: [
            'fir',
            'pine',
            'birch'
        ]
    }
];

var secondTree = myPlants[1].list[1];

console.log(secondTree);

//RECORD COLLECTION

var collection = {
    '2548': {
        'album': 'SWW',
        'artist': "Johann",
        'tracks': [
            'won',
            'LRC'
        ]
    },
    'yeo': {
        'album': 'sturmgewehr',
        'artist': "Adolf",
        'tracks': [
            'JJJ',
            'NNN'
        ]
    },
    'kazakh': {
        'album': 'diqtat',
        'artist': "hunnicus",
        'tracks': [
            'throat singing 12 hours'
        ]
    },
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, val) {
    if (val === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(val);
    } else {
        collection[id][prop] = val;
    }
}

console.log(updateRecords('kazakh', 'artist', 'Atilla'));

// DOESN 'T WORK MUST MAKE WORK
