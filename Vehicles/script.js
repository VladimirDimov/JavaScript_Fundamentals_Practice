var test1 = 7;
var test2 = 10;
var test3 = 40;

function solution(param) {
    var arg = parseInt(param);
    var maxI = (arg / 3) | 0,
     maxJ = (arg / 4) | 0,
     maxK = (arg / 10) | 0,
     counter = 0;

    for (var k = 0; k <= maxK; k++) {
        for (var j = 0; j <= maxJ; j++) {
            for (var i = 0; i <= maxI; i++) {
                if (i * 3 + j * 4 + k * 10 == arg) {
                    counter += 1;
                }
            }
        }
    }

    return counter;
}

console.log(solution(test3));