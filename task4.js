// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// Function
function count_zero(str) {
	let zero_count = 0;
	for (let i of str) {
		if (i == "0") {
			zero_count++;
		}
	}
	console.log(zero_count);
}

// Calling the function
const binaryStr = "01010";
count_zero(binaryStr);
