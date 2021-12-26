// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat () {
    cats.pop()
}

function destructivelyRemoveFirstCat () {
    cats.shift()
}

function appendCat () {
    let newcats = ([...cats, "Broom"]);
    return newcats
}

function prependCat () {
    let newcats = (["Arnold", ...cats]);
    return newcats
}

function removeLastCat () {
    const
    newRemoveLastCatArray = cats.slice (0, cats.length -1);
    return newRemoveLastCatArray;
}

function removeFirstCat () {
    const
    newRemoveFirstCatArray = cats.slice (1);
    return newRemoveFirstCatArray;
}