	/** product: calculate the product of an array of numbers. */

	function product(nums, idx=0) {
		if (idx === nums.length) return 1;

		return nums[idx] * product(nums, idx + 1);
	}

	/** longest: return the length of the longest word in an array of words. */

	function longest(words, idx=0, longestWordLength=0) {
		if (idx === words.length) {
			return longestWordLength;
		}

		longestWordLength = words[idx].length > longestWordLength ? words[idx].length : longestWordLength;
		return longest(words, idx + 1, longestWordLength); 

	}

	/** everyOther: return a string with every other letter. */

	function everyOther(str, idx=0, cobbled='') {
		if (idx === str.length) {
			return cobbled;
		}

		if (idx % 2 === 0) {
			cobbled += str[idx];
			
		}

		return everyOther(str, idx+1, cobbled);

	}

	/** isPalindrome: checks whether a string is a palindrome or not. */

	function isPalindrome(str, idx=0) {
		if (idx === str.length) {
			return str[idx] === str[str.length - idx - 1];
		} else {
			if (str[idx] !== str[str.length - idx - 1]) {
				return false;
			}
		}

		return isPalindrome(str, idx+1);

	}

	/** findIndex: return the index of val in arr (or -1 if val is not present). */

	function findIndex(arr, val, idx=0) {
		if (idx === arr.length) {
			return -1;
		}
		if (arr[idx] === val) {
			return idx;
		}
		return findIndex(arr, val, idx+1);
	}

	/** revString: return a copy of a string, but in reverse. */

	function revString(str, revStr='', idx=0) {
		if (idx === str.length) return revStr;
		revStr += str[str.length - 1 - idx];
		return revString(str, revStr, idx+1);
	}

	/** gatherStrings: given an object, return an array of all of the string values. */

	function gatherStrings(obj, strings=[]) {

		const keys = Object.keys(obj);

		for (let key of keys) {
			if (typeof obj[key] === 'string') {
				strings.push(obj[key]);
			} else if (typeof obj[key] === 'object') {
				strings.concat(gatherStrings(obj[key], strings));
			}
		}
		return strings;
	}

	/** binarySearch: given a sorted array of numbers, and a value,
	 * return the index of that value (or -1 if val is not present). */

	function binarySearch(arr, val, leftIdx=0, rightIdx=arr.length - 1) {
	
		while (leftIdx <= rightIdx) {
			let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
			let middleVal = arr[middleIdx];

			if (middleVal === val) {
				return middleIdx;
			} else if (middleVal < val) {
				return binarySearch(arr, val, middleIdx + 1, rightIdx) 
			} else {
				return binarySearch(arr, val, leftIdx, middleIdx - 1);
			}
		}

		return -1;

	}

	//console.log(product([2,4,6,8]));
	//console.log(longest(['truck', 'bar', 'motorcycle', 'cabana', 'cigar', 'snickerdoodle']));
	// console.log(everyOther("gratitude"));
	// console.log(isPalindrome('bannab'));
	// console.log(findIndex(["sugar", "crazy", "bathtub", "wanderer"], "bathtub"));
	// console.log(revString("exceptional"));
	// let nestedObj = {
	// 	firstName: "Lester",
	// 	favoriteNumber: 22,
	// 	moreData: {
	// 		lastName: "The Tester"
	// 	},
	// 	funFacts: {
	// 		moreStuff: {
	// 			anotherNumber: 100,
	// 			deeplyNestedString: {
	// 				almostThere: {
	// 					success: "you made it!"
	// 				}
	// 			}
	// 		},
	// 		favoriteString: "nice!"
	// 	}
	// };
	//	console.log(gatherStrings(nestedObj));

	// console.log(binarySearch([1,3,4,6,8,10,22,33,34], 34));

	/*function balancedBrackets(string, leftCount=0, rightCount=0, excludeLeft=[], excludeRight=[]) {

        const startBrackets = ['(','{','['];
        const endBrackets = [')','}',']'];
        const table = { '(': ')', '{': '}', '[': ']'};
		let leftVal = null;
		let rightVal = null;
		let excludeIdx;
		
		for (let x = 0; x <= string.length - 1; x++) {
			 if (startBrackets.includes(string[x])) {
				console.log(excludeLeft);
				if (excludeLeft.includes(x)) {
					continue;
				}
				try {
					if (string[x-1].toLowerCase() !== string[x-1].toUpperCase()) { //check for alpha value
						return false;
					}
					leftVal = string[x];
					excludeIdx = x;
				} catch {
					leftVal = string[x];
					excludeIdx = x;
				}
				
			} else if (endBrackets.includes(string[x])) {
				if (excludeRight.includes(x)) {
					continue;
				}
				try {
					if (string[x+1].toLowerCase() !== string[x+1].toUpperCase()) { //check for alpha value
						return false;
					}
					rightVal = string[x];
					excludeRight.push(x);
					rightCount++;
					if (leftVal) {
						excludeLeft.push(excludeIdx);
						leftCount++;
					}
					break;
				} catch {
					rightVal = string[x];
					excludeRight.push(x)
					rightCount++;
					if (leftVal) {
						excludeLeft.push(excludeIdx);
						leftCount++;
					}
					break;
				}
				
			}
					   
		}

		if (leftCount !== rightCount) { //test for balanced number of brackets
			return false;
		} else if (!leftVal) { //if leftVal is null and the number of brackets is balanced that means we're done
			return true;
		}

		if (table[leftVal] === rightVal) { //if nested pair of brackets match, move on
            return balancedBrackets(string, leftCount, rightCount, excludeLeft, excludeRight);
        } else {
			return false;
		}
    
    }

	console.log(balancedBrackets('hi there'));*/

	module.exports = {
		product,
		longest,
		everyOther,
		isPalindrome,
		findIndex,
		revString,
		gatherStrings,
		binarySearch,
		balancedBrackets
	};
