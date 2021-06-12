// Shoutouts to Renato Alencar @cajuinaoverflow! 5/19/21
const moneyRange = n => {
	return {
		[200 <= n]: 200,
		[200 > n && n >= 100]: 100,
		[100 > n && n >= 50]: 50,
		[50 > n && n >= 20]: 20,
		[20 > n && n >= 10]: 10,
		[10 > n && n >= 5]: 5,
		[5 > n && n >= 2]: 2,
		[n === 1]: 1,
		[n === 0]: 0,
	}.true;
};

console.log(moneyRange(300));
console.log(moneyRange(175));
console.log(moneyRange(15));
console.log(moneyRange(1));
console.log(moneyRange(0));
console.log(moneyRange(-10));
console.log(moneyRange('AHHH'));

/*
	(o^^)o~/Code/test (js-pattern-match): node index.js 
	200
	100
	10
	1
	0
	undefined
	undefined
*/

/*
  > const objWithTrue = {
  ... [1 === 1]: "value"
  ... }
  undefined
  > objWithTrue.true
  'value'
*/

/*
  > const multiObj = {
  ... [1 === 1]: 'val',
  ... [1 === 0]: 'first',
  ... [2 === 0]: 'second'
  ... }
  undefined
  > multiObj
  { true: 'val', false: 'second' }
*/

// * So what's happening is the statements are being evaluated
