// Array: Binary Search
// Given a sorted array and a value, return whether the array contains that value. Do not sequentially iterate the array. Instead, ‘divide and conquer’, taking advantage of the fact that the array is sorted. As always, only use built-in functions that you are prepared to recreate (write yourself) on demand!

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Calculate the middle index of the current search range
        const mid = Math.floor((left + right) / 2);

        // Check if the middle element is equal to the target
        if (arr[mid] === target) {
            return true; // Target found
        }

        // If the middle element is greater than the target,
        // narrow the search to the left half
        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            // Otherwise, narrow the search to the right half
            left = mid + 1;
        }
    }

    return false; // Target not found
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetValue = 5;

if (binarySearch(sortedArray, targetValue)) {
    console.log(`The array contains ${targetValue}.`);
} else {
    console.log(`The array does not contain ${targetValue}.`);
}

// Min of Sorted-Rotated
// you will be given a numerical array that has first been sorted, then rotated by an unknown amount. Find and return the minimum value in that array. Don’t use built-in functions (surprise!). 
// Given the input array ["Gigli","Jay is  cool","Mavis","Phoebe","Thurber","Anna","Celeste","Elon"], you should return "Anna". Remember, do not linearly iterate the array!
function findMinimumValue(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // If the current search range is already sorted,
        // return the first element
        if (arr[left] <= arr[right]) {
            return arr[left];
        }

        // Calculate the middle index of the current search range
        const mid = Math.floor((left + right) / 2);

        // If the middle element is greater than the last element
        // of the current search range, narrow the search to the
        // right half
        if (arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            // Otherwise, narrow the search to the left half
            right = mid;
        }
    }

    // If no minimum value was found, return the first element
    return arr[0];
}
// Example usage with a string array:
const stringArray = ["Gigli", "Anna", "Mavis", "Phoebe", "Thurber", "Jay", "Celeste", "Elon"];
const minString = findMinimumValue(stringArray);
console.log("Minimum string value:", minString);

// String: Binary Search

function isCharacterPresent(sortedString, targetChar) {
    let left = 0;
    let right = sortedString.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midChar = sortedString[mid];
  
      if (midChar === targetChar) {
        return true; // Character found
      }
  
      if (midChar < targetChar) {
        left = mid + 1; // Search the right half
      } else {
        right = mid - 1; // Search the left half
      }
    }
  
    return false; // Character not found
  }
  
  // Example usage:
  const sortedString = " &-0379DEFXZ[abcz|";
  const targetChar1 = "6";
  const targetChar2 = "c";
  const targetChar3 = "0";
  
  console.log(isCharacterPresent(sortedString, targetChar1)); // Should return false
  console.log(isCharacterPresent(sortedString, targetChar2)); // Should return true
    console.log(isCharacterPresent(sortedString, targetChar3)); // Should return true   