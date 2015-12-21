/*********************************************************************************
Function takes two arguments (start and end) and optionally takes a third
argument called step. The function should return an array containing all the
numbers from start up to end (including both start as well as end).

The step if provided indicates the "step" value used to build up the array.

If step is not provided, it should return an array which increments (or decrements)
the elements by 1.

Examples:
=========

range(2,5) --> [2,3,4,5]
range(5,3) --> [5,4,3]
range(3,10,3) --> [3,6,9]

In all the cases where the parameters are invalid,
the function should return undefined

********************************************************************************/

function range( start,  end,  step) {
    var rangeArr = new Array();
    var num=0;

    //test 1, 2
    if ((start==undefined ) || (end==undefined))
        return undefined;

    //test 3, 12, 14
    if (((end-start) < 0) && (step > 0))
        return undefined;

    //test 4 
    if (((end-start) > 0) && (step < 0))
        return undefined;

    //test 5
    if (((end-start) > 0) && (step == 0))
        return undefined;

    if (step== undefined){
        if (start == end)   
            return [start]; //test 6

        if (end > start)    //test 7, 9
            step = 1;

        if (end < start)    //test 8, 10
            step = -1;
    }

    console.log("start: " + start);
    console.log("end: " + end);
    console.log("step: " + step);
    console.log("num...before loop: " + num);

    if (step < 0)
        for (num = start; num >= end; num += step){
            console.log("num...in the loop: " + num);
            rangeArr.push(num);
        }
    else
        for (num = start; num <= end; num += step){
            console.log("num...in the loop: " + num);
            rangeArr.push(num);
        }

    //yvso debug
    /*
    var j=0, len;
    len = rangeArr.length;
    for (j=0; j<len; j++){
        console.log("rangeArr" + "[" + j +"] = " +  rangeArr[j]);
    }
    */

    return rangeArr;

}
