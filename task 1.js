// Weekly Task
// Given a string containing just the characters '(', ')', '{', '}', '[', ']', determine if the input string is valid. This means for an every number of left brackets, there should be an equal number of closing bracket that fits.

// Example 1
// Input
// "()"
// Output
// True

// Example 2
// Input
//  "([)}",
// Output
// False

// Example 2
// Input
//  "([)]",
// Output
// True

function isValidBrackets(str) {
  let open1 = 0,
    close1 = 0,
    open2 = 0,
    close2 = 0,
    open3 = 0,
    close3 = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") open1++;
    if (str[i] === ")") close1++;
    if (str[i] === "{") open2++;
    if (str[i] === "}") close2++;
    if (str[i] === "[") open3++;
    if (str[i] === "]") close3++;
  }
  return open1 === close1 && open2 === close2 && open3 === close3;
}

console.log(isValidBrackets("()"));
console.log(isValidBrackets("([)}"));
console.log(isValidBrackets("([)]"));
