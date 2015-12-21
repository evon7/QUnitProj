QUnit.test('Tests for Second Largest and Smallest Function', function(assert){

    //comon lists
    assert.deepEqual(compute([1,2,3,4]), [2,3], "compute([1,2,3,4]) == [2,3]");                                    //test1
    assert.deepEqual(compute([11,29,32,45,55,67,555]), [29,67], "compute([11,29,32,45,55,67,555])  == [29,67]");   //test2

    //with duplicates
    assert.deepEqual(compute([1,1,2,3,3,3,4]), [2,3], "compute([1,2,3,4]) == [2,3]");  //test3

    //empty list
    assert.equal(compute([]), undefined , "no element results in underfined");         //test4                        
    //abnormal number of elements
    assert.deepEqual(compute([5]), [5,5] , "1 element. No second largest. Return the same number as both 2nd highest and lowest"); //test5
    assert.deepEqual(compute([2,9]), [9,2] , "2 elements. 2nd largest is the 1st element. 2nd smallest is the last element");      //test6
    assert.deepEqual(compute([4,5,8]), [5,5] , "3 elements. 2nd largest and smallest are the same");                               //test7

    //neg numbers only
    assert.deepEqual(compute([-4,-7,-5,-3,-17,-4,-9,-7,-18,-2]), [-17,-3], "compute([-4,-7,-5,-3,-7,-4,-9,-7,-18,-2]) == [-9,-3]");  //test7

    //a list with duplicates
    assert.deepEqual(compute([1,2,3,3,3,4,4,5,6,6,6,7]), [2,6], "compute([1,2,3,3,3,4,4,5,6,6,6,7]) == [2,6]");     //test8

    //a mix of neg and pos numbers
    assert.deepEqual(compute([-4,-7,5,3,7,4,9,7,18,-2]), [-4,9], "compute([-4,-7,5,3,7,4,9,7,18,-2] = [-2,9]");     //test9

    //a mix of neg and pos numbers and duplicates
    assert.deepEqual(compute([-6,-3,-7,7,3,-6,5,4,9,-12,-16]), [-12,7], "compute([-6,-3,-7,7,3,-6,5,4,9,-12,-16]) == [-12,7]");   //test10

    //an un-ordered list
    assert.deepEqual(compute([9,6,7,3,4,1,3,0,5]), [1,7], "compute([9,6,7,3,4,1,3,0,5]) == [1,7]");                               //test11

    //an un-ordered list with dumplicate elements
    assert.deepEqual(compute([9,6,7,7,7,6,3,4,1,3,0,0,0,5,5,11]), [1,9], "compute([9,6,7,7,7,6,3,4,1,3,0,0,0,5,5,11]) == [1,9]"); //test12
});
