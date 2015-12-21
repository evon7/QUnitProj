/***********************************************************************************
 * The function takes an array of numbers and find the following
 * 1. The second lowest number
 * 2. The second largest nunber
 *
 * Returns an array of two elements where
 * First element: second smallest number
 * Second element: second largest number
 *
 * e.g. compute(1,2,3,4) --> [2,3]
 *      compute (5,2,7,1,9,10) --> [2, 9]
 *
 * If an passed in array is empty, return undefined
 * If there is no second largest element in the array [2,2,2] return the largest
 * If there is no second smallest element in the array [4,4] return the smallest
 * It may be possible that second largest and second smallest are the same [1,2,3]
 *
 * Be sure to think of all the different permutations and combinations and
 * provide test suite that covers many of them
 *
 ************************************************************************************/
function compute(numbers) {
    var sortedAndNoDupArr = new Array(); 
    var secGreatLow = new Array();

    if (numbers.length == 0){              //test 3
        return undefined;
    }

    //clean out duplicates for accurate answers
    sortedAndNoDupArr = removeDupAndSort(numbers); 
    //console.log("sortedAndNoDupArr: " + sortedAndNoDupArr);

    if (sortedAndNoDupArr.length == 1){               //test 4
        secGreatLow.push(sortedAndNoDupArr[0]);
        secGreatLow.push(sortedAndNoDupArr[0]);
        return secGreatLow;
    }

    secGreatLow.push(sortedAndNoDupArr[1]); //the 2nd smallest
    secGreatLow.push(sortedAndNoDupArr[(sortedAndNoDupArr.length)-2]); //the 2nd largest

    return secGreatLow;
}

/***********************************************************************************
* This function takes an array of numbers, sort them, and remove any duplicate that
* exists. It is to aid the compute function above. Once an array is sorted and 
* duplcates removed, the second largest and smallest becomes much more apparent.
 ************************************************************************************/
function removeDupAndSort(tempArr) {
    var sortedArr = new Array();
    var noDupArr = new Array();
    //sort it
    //console.log("tempArr: " + tempArr);
    sortedArr = tempArr.sort(function(tempArr, b){return tempArr - b});
    //console.log("sortedArr: " + sortedArr);

    noDupArr = sortedArr.slice(0); //make a copy

    var i=0;
    while (i < noDupArr.length ){
        //if two adjacent elements of a sorted array is the same, then kill one
        if(noDupArr[i] == noDupArr[i+1]){                  
            noDupArr.splice((i+1),1);
            //console.log("noDupArr: " + noDupArr);
            continue; //skip i++ to check this index again. Maybe more than one duplicate
        }
        i++;
    }
    return noDupArr;
}

/***********************************************************************************
//my note: 
//rngSorted = rng.sort(); this is lexiconical sort, not by number
//
//slice(1,3) ---> return elements from 1 to almost 3
//slice(0) ---> return everything
//
//splice is totally different.
//var x = [14, 3, 77]
//var y = x.splice(1, 2)    1-> indx to start. 2-> remove count
//                          these elements are removed from the original array x
//console.log(x)           // [14]
//console.log(y)           // [3, 77]
//
 ************************************************************************************/
