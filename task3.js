// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// Function
function make_avg(numbs) {
	const length = numbs.length;
	let total = 0;
	for (let num of numbs) {
		total = total + num;
	}

	const avg = total / length;
	return avg;
}

// Call the function
let numArray = [10, 30, 20, 40];
console.log(make_avg(numArray));
