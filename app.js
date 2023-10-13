var numbers =  [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50]
var newNumber = []
for (var i = 0; i < numbers.length; i++){
    var strNumber = numbers[i].toString()
    if (strNumber[0] === '2' || strNumber[0] === '5'){
        newNumber.push(numbers[i]);
    }
}
console.log(newNumber);

var tags =  ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol' , 'br']
var tagCounts = {}
for (var i = 0; i < tags.length; i++){
    var tag = tags[i];
    var firstLetter = tag[0];

    if (tagCounts[firstLetter]) {
        tagCounts[firstLetter]++;
    } else {
        tagCounts[firstLetter] = 1;
    }
}
console.log(tagCounts);

var tagCountsArray = Object.entries(tagCounts);
tagCountsArray.sort((a, b) => b[1] - a[1]);
var sortedTagCounts = {};
for (var i = 0; i < tagCountsArray.length; i++) {
    sortedTagCounts[tagCountsArray[i][0]] = tagCountsArray[i][1];
}
console.log(sortedTagCounts);



