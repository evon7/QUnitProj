/***********************************************************************************
  Function # 1
  ============
  Write a function with the following signature:
  function removeDuplicates(numbers)

  The function takes an array of numbers (sorted or not) and removes duplicates
  from that array. It returns an array of numbers with duplicates removed (i.e.
  every element appears exactly once)

  e.g. removeDuplicates([1,1,2,2,3,3,3,3,4]) --> [1,2,3,4]
  removeDuplicates([1,2,3]) --> [1,2,3]
  removeDuplicates([1,3,2,4,3,2,1,1,2,4,3,2,5]) --> [1,2,3,4,5]

  It is not assumed that numbers passed to the function will be sorted
  Though, you may find that if you sort the numbers before working on them yield
  better implementation
 ***********************************************************************************/

function removeDuplicates(tempArr) {
    var sortedArr = new Array();
    var noDupArr = new Array();

    if (tempArr.length == 0)
        return undefined;

    //sort it
    //console.log("tempArr: " + tempArr);
    sortedArr = tempArr.sort(function(tempArr, b){return tempArr - b});
    console.log("sortedArr: " + sortedArr);

    noDupArr = sortedArr.slice(0); //make a copy

    var i=0;
    while (i < noDupArr.length ){
        //if two adjacent elements of a sorted array is the same, then kill one
        if(noDupArr[i] == noDupArr[i+1]){                  
            noDupArr.splice((i+1),1);
            console.log("noDupArr: " + noDupArr);
            continue; //skip i++ to check this element again. Maybe more than one duplicate
        }
        i++;
    }
    return noDupArr;
}


/***********************************************************************************
  Function # 2
  =============
  Write a function with the following signature:
  function hasDuplicates(numbers)

  The function takes an array of numbers and returns whether there were duplicates
  or not (returns true if there are duplicates, false otherwise)

  e.g. hasDuplicates([3,5,7,1,9]) --> false
  hasDuplicates([3,1,4,3]) --> true
  hasDuplicates([]) --> false

  This function will also be helpful in writing your tests. Can you think of a way
  to incorporate the hasDuplicates function while writing tests for removeDuplicates?
 ***********************************************************************************/

function hasDuplicates(tempArr) {
    var sortedArr = new Array();
    var noDupArr = new Array();

    if (tempArr.length == 0)
        return undefined;

    //sort it
    //console.log("tempArr: " + tempArr);
    sortedArr = tempArr.sort(function(tempArr, b){return tempArr - b});
    //console.log("sortedArr: " + sortedArr);


    var i=0;
    while (i < sortedArr.length ){
        //if two adjacent elements of a sorted array is the same, 
        //report true, and no need to continue
        if(sortedArr[i] == sortedArr[i+1]){                  
            //console.log("sortedArr: " + sortedArr);
            return true;
        }
        i++;
    }
    return false;
}


/***********************************************************************************
  Function # 3
  ============
  Write a function with the following signature:
  function areConsecutive(numbers, [allowDuplicates])

  The function takes an array of numbers and determines if the numbers are consecutive
  or not.

  Following numbers are considered consecutive:
  [2,3,4,5]
  [1,2,3,4,5,6,7,8,9]

  Following numbers are not considred consecutive:
  [1,2,3,5]

  The optional argument "allowDuplicates" tells the function whether to allow
  dupliacet numbers when determining "consecutiveness"

  This following numbers are consecutive if allowDuplicates is true
  [1,1,2,3,3,4]

  However, above numbers are not considered consecutive if allowDuplicates if false

  You will see that you will use "removeDuplicates" and "hasDuplicate" function
  inside this functions. And hence it is imperative that those two functions are
  well tested.

Note: The range function developed in first question can be used to generate
consecutive numbers as well (if the step == +1 / -1)

You can use that function while writing your tests
 ***********************************************************************************/
function areConsecutive(numArr, allowDuplicates){
    var i=0;
    var areConsec;
    var tempArr = new Array();

    if (allowDuplicates == undefined) { allowDuplicates = true; }

    if (numArr == undefined)
        return undefined;
        
    if (numArr.length == 0)
        return undefined;

    if (numArr.length == 1)
        return false;

    //if it has duplicate, and we allow duplicates, then sort it and clean it up.
    //sorting is done inside removeDuplicates
    if (hasDuplicates(numArr)){
        if (allowDuplicates){
            tempArr = removeDuplicates(numArr);
            numArr = new Array(); //clean up evertthing
            numArr = tempArr;
        }
    }


    for (i=0; i < (numArr.length-1); i++){
        if((numArr[i+1] - numArr[i]) == 1){
            console.log("i: " + i);
            console.log("numArr: " + numArr[i] +"  " + numArr[i+1]);
            areConsec = true;
            console.log("areConsec: " + areConsec);
        }else{
            areConsec = false;
            console.log("areConsec: " + areConsec);
            break;
        }
    }



    return areConsec;

}


