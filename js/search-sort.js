// Library of Search & Sort Functions

function linearSearch(anArray, item) {
    for (let i = 0; i < anArray.length; i++) {
        if (item == anArray[i]) {
            return i;
        }
    }

    return -1;
}

function binarySearch(anArray, item) {
    let li = 0;
    let ui = anArray.length - 1;
    let mi;

    while (li <= ui) {
        mi = Math.floor((li + ui) / 2);
        if (item == anArray[mi]) {
            return mi;
        } else if (item < anArray[mi]) {
            ui = mi - 1;
        } else {
            li = mi + 1;
        }
    }

    return -1;
}