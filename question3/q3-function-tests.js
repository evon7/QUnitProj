
QUnit.test('Remove Duplicates Test', function(assert){

    //an array with duplicates
    assert.deepEqual(removeDuplicates([1,1,2,3,3,3,4]), [1,2,3,4], "[1,1,2,3,3,3,4] == [1,2,3,4]"); 
    
    assert.deepEqual(removeDuplicates([9,6,7,7,7,6,3,4,1,3,0,0,0,5,5,11]), [0,1,3,4,5,6,7,9,11],
                                        "[9,6,7,7,7,6,3,4,1,3,0,0,0,5,5,11] == [0,1,3,4,5,6,7,9,11");

    assert.deepEqual(removeDuplicates([3,3,3,3]), [3], "[3,3,3,3] == [3]"); 

    //an un-ordered array with duplicates
    assert.deepEqual(removeDuplicates([9,6,3,3,3,1,3,6,5]), [1,3,5,6,9], "[9,6,3,3,3,1,3,6,5] == [1,3,5,6,9]"); 

    //no duplicates
    assert.deepEqual(removeDuplicates([2,9]), [2,9] , "[2,9] == [2,9] "); 
    assert.deepEqual(removeDuplicates([4,5,8]), [4,5,8] , "[4,5,8] == [4,5,8] "); 

    //empty array
    assert.equal(removeDuplicates([]), undefined , "no element results in undefined"); 

    //one element
    assert.deepEqual(removeDuplicates([5]), [5] , "[5] == [5]"); 


    //neg numbers only
    assert.deepEqual(removeDuplicates([-5,-18,-18,5,-18,-3,-17,3,5,-4,-9,-17,-7]), [-18,-17,-9,-7,-5,-4,-3,3,5], 
                                      "[-5,-18,-18,5,-18,-3,-17,3,5,-4,-9,-17,-7] == [-18,-17,-9,-7,-5,-4,-3,3,5]"); 

    //a mix of neg and pos numbers and duplicates
    assert.deepEqual(removeDuplicates([-6,-3,-7,7,3,-6,5,4,9,-12,-16]), [-16,-12,-7,-6,-3,3,4,5,7,9], 
                                        "[-6,-3,-7,7,3,-6,5,4,9,-12,-16] == [-16,-12,-7,-6,-3,3,4,5,7,9]"); 
});

QUnit.test('Has Duplicates Test', function(assert){
    //empty array
    assert.equal(hasDuplicates([]), undefined , "no element results in undefined"); 

    //one element
    assert.deepEqual(hasDuplicates([5]), false, "[5] == false");

    //no duplicates
    assert.deepEqual(hasDuplicates([3,5,10,2,8]), false,  "[3,5,10,2,8] == false,");
    assert.deepEqual(hasDuplicates([3,5,10,2,8,-3,-1]), false, "[3,5,10,2,8,-3,-1] == false");

    //ordered array with duplicates
    assert.deepEqual(hasDuplicates([1,1,2,3,3,3,4]), true,  "[1,1,2,3,3,3,4) == true,");
   
    //unordered with with duplicates 
    assert.deepEqual(hasDuplicates([9,6,7,7,7,6,3,4,1,3,0,0,0,5,5,11]), true, "[9,6,7,7,7,6,3,4,1,3,0,0,0,5,5,11] == true");
    
    assert.deepEqual(hasDuplicates([3,3,3,3]), true, "[3,3,3,3] == true");

    //an unordered list of mix neg and pos numbers and duplicates
    assert.deepEqual(hasDuplicates([-6,-3,7,7,3,-6,5,4,9,-12,-16]), true, "[-6,-3,7,7,3,-6,5,4,9,-12,-16] == true");
    
});



QUnit.test('Are Consecutive Test', function(assert){
    //simple cases. No duplicates    
    assert.deepEqual(areConsecutive([2,3,4,5]), true, "[2,3,4,5] == true"); 
    assert.deepEqual(areConsecutive([1,2,3,4,5,6,7,8,9]), true, "[1,2,3,4,5,6,7,8,9] == true");
    assert.deepEqual(areConsecutive([1,2,3,5]), false, "[1,2,3,5] == false");


    //explicitly allowing duplicates
    assert.deepEqual(areConsecutive([1,2,2,3,3,4], true), true, "Allow Duplicates: [1,2,2,3,3,4] == true");

    //allow duplicate. optional arugment left out means allowing duplicates by default
    assert.deepEqual(areConsecutive([1,2,2,3,3,4]), true, "Allow Duplicates, but Don't specify it as input argement: [1,2,2,3,3,4] == true");

    //now no duplicates
    assert.deepEqual(areConsecutive([1,2,2,3,3,4], false), false, "NOT allow Duplicates: [1,2,2,3,3,4] == false");


    //empty array
    assert.equal(areConsecutive([]), undefined , "No element results in undefined"); 

    //one element
    assert.deepEqual(areConsecutive([5]), false, "[5] == false");

    //unordered list
    assert.deepEqual(areConsecutive([3,5,10,2,8]), false,  "[3,5,10,2,8]) == false");

    //unordered list, with duplicates. duplicates allowed
    assert.deepEqual(areConsecutive([5,1,3,5,4,1,0,2,2,2]), true,  "Duplicates allowed: [5,1,3,5,4,1,0,2,2,2] == true");

    //unordered list, with duplicates. duplicates NOT allowed
    assert.deepEqual(areConsecutive([5,1,3,5,4,1,0,2,2,2], false), false,  "NOT allow Duplicates: [5,1,3,5,4,1,0,2,2,2] == false");

});
