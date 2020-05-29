const numbers = [2,5,8,7,10,4,9];

console.table(numbers);
console.log(numbers[3]);

const months = new Array("Jan", "Feb", "Mar", "Apr", "May");
console.log(months[4]);

months.push("Jun");//add "jun" at the end of the array

months.unshift("Zero");//add "Zero" at the beginning of the array

months.pop();// will delete a position from the bottem of the array

months.shift();// will delete the the position at the top of the array

months.splice(4,1);// will delete position 4,  and remove 1 element (line on table)

//months.reverse(); reverses the order on the table
months.sort();//alphabetical order


console.table(months);