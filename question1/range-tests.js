QUnit.test('Range Tests', function(assert){

    // The first two arguments are required, skipping them returns undefined
	assert.equal(range(), undefined, 'Range invoked with no arguments results in undefined');           //test1
	assert.equal(range(1), undefined, 'Range invoked with just one argument results in undefined');     //test2

	// Make sure that this is a valid range
	assert.equal(range(3,2,1), undefined, 'For positive values of step, start must be smaller than end');   //test3
	assert.equal(range(2,4,-1), undefined, 'For negative value of step, start must be smaller than end');   //test4

	// Step == 0 results in undefined
	assert.equal(range(2,5,0), undefined, 'Step == 0 results in undefined');    //test5

	// step is skipped, we deduce the step from start and end
	// test # 1: start == end
	// Test # 2: start < end
	// Test # 3: start > end
	assert.deepEqual(range(3,3), [3], 'If start and end are same, we return the single element array'); //test5
	assert.deepEqual(range(0,0), [0], 'If start and end are same, we return the single element array'); //test6

	assert.deepEqual(range(2,6), [2,3,4,5,6], 'If step is skipped and if start < end we get increasing array'); //test7
    assert.deepEqual(range(6,2), [6,5,4,3,2], 'If step is skipped and if start > end we get decreasing array'); //test8

	// Skip step, provide negative and positive values for range
	assert.deepEqual(range(-2,2), [-2,-1,0,1,2], 'Skip step. start == -2, end == 2. Expect: [-2,-1,0,1,2]');    //test9
	assert.deepEqual(range(2,-2), [2,1,0,-1,-2], 'Skip step. start == 2, end == -2. Expect: [2,1,0,-1,-2]'); //test10
    //!!!The bug found!!!! expected array: [2,1,0,-1,-2,-3]. should be [2,1,0,-1,-2]

	// Provide step == 1. valid range
	assert.deepEqual(range(1,5,1), [1,2,3,4,5], "range(1,5,1) == [1,2,3,4,5]");                         //test11
	assert.equal(range(5,1,1), undefined, "tange(5,1,1) == undefined (results in infinite sequence)");  //test12

	// provide step == -1. Valid and invalid range
	assert.deepEqual(range(5,1,-1), [5,4,3,2,1], "range(5,1,-1) == [5,4,3,2,1]");                       //test13
	assert.equal(range(5,1,1), undefined, "tange(5,1,1) == undefined (results in infinite sequence)");  //test14

	// +ve step
	assert.deepEqual(range(1,10,2), [1,3,5,7,9], "range(1,10,2) == [1,3,5,7,9]");   //test15
	assert.deepEqual(range(1,3,5), [1], "range(1,3,5) == [1]");                     //test16
	assert.deepEqual(range(1,20,5), [1,6,11,16], "range(1,20,5) == [1,6,11,16]");   //test17


	// -ve step
	assert.deepEqual(range(10,2,-4), [10,6,2], "range(10,2,-4) == [10,6,2]");       //test18
	assert.deepEqual(range(5,3,-4), [5], "range(5,3,-4) == [5]");                   //test19

});
