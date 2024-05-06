	/** product: calculate the product of an array of numbers. */
	function product(nums, idx=0) {
		if (idx === nums.length) {
			return 1;
		}
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
			return true
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

	function balancedBrackets(string, arr=[], idx=0) {

		if (idx===string.length) return arr.length === 0;

        const startBrackets = ['(','{','['];
        const endBrackets = [')','}',']'];
        const table = { '(': ')', '{': '}', '[': ']'};
		let char;
		
		for (idx; idx < string.length; idx++) {
			char = string[idx];
			 if (endBrackets.includes(char)) {
				if (idx===0 || table[arr.pop()] !== char) {
					return false;
				}
			} else if (startBrackets.includes(char)) {
				arr.push(char);
			} else { //i.e. _
				continue;
			}
		}

		return balancedBrackets(string, arr, idx);
    }

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
