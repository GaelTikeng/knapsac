

//   function tools (name, weight, value) {
//     this.name = name
//     this.weight = weight
//     this.value = value
//   }
//   let tool1 = new tools ("laptop", 1000, 20)
//   let tool2 = new tools ("mouse", 100, 10)
//   let tool3 = new tools ("speaker", 100, 9)

//   console.log(tool1)
//   console.log(tool3)
//   console.log(tools.value)



// function knapsac (capacity, iterms) {
//   const  obj = [
//     {name: 'laptop', weight: 1000, value: 20},
//     {name: 'mouse', weight: 100, value: 10},
//     {name: 'speaker', weight: 100, value: 9},
//     {name: 'microphone', weight: 50, value: 3},
//     {name: 'modem', weight: 50, value: 15},
//     {name: 'phone', weight: 80, value: 19},
//     {name: 'phone charger', weight: 20, value: 18},
//     {name: 'laptop charger', weight: 85, value: 17},
//     {name: 'earphones', weight: 10, value: 14},
//     {name: 'eyeglasses', weight: 35, value: 16},
//     {name: '2 pullovers', weight: 1200, value: 13},
//     {name: 'tooth-bush', weight: 10, value: 8},
//     {name: 'tooth-paste', weight: 60, value: 6},
//     {name: 'sandales', weight: 120, value: 5},
//     {name: 'sucks', weight: 45, value: 4},
//     {name: 'cap', weight: 25, value: 2},
//     {name: 'books', weight: 800, value: 12},
//     {name: 'pen', weight: 60, value: 11},
//     {name: 'distributor', weight: 700, value: 1},
//     {name: 'watch', weight: 150, value: 7},
//   ]

//   let capa = 4000 
//   let weight = 0
//   let store = []
  
//   let max = Math.max.apply(null, Object.values(obj))
//   // console.log(max)

// }




// 	// Javascript program to check if two
// 	// strings are isomorphic
	
// 	let size = 256;
	
// 	// Function returns true if str1
// 	// and str2 are isomorphic
// 	function areIsomorphic(str1, str2)
// 	{
		
// 		let m = str1.length;
// 		let n = str2.length;
		
// 		// Length of both strings must be same
// 		// for one to one correspondence
// 		if(m != n)
// 			return false;
			
// 		// To mark visited characters in str2
// 		let marked = new Array(size);
		
// 		for(let i = 0; i < size; i++)
// 			marked[i]= false;
		
		
// 		// To store mapping of every character
// 		// from str1 to that of str2 and
// 		// Initialize all entries of map as -1.
// 		let map = new Array(size);
// 		map.fill(0);
		
// 		for(let i = 0; i < size; i++)
// 			map[i]= -1;
	
// 		// Process all characters one by one
// 		for (let i = 0; i < n; i++)
// 		{
			
// 			// If current character of str1 is
// 			// seen first time in it.
// 			if (map[str1[i].charCodeAt()] == -1)
// 			{
				
// 				// If current character of str2
// 				// is already seen, one to
// 				// one mapping not possible
// 				if (marked[str2[i].charCodeAt()] == true)
// 					return false; 

// 				// Mark current character of
// 				// str2 as visited
// 				marked[str2[i].charCodeAt()] = true;

// 				// Store mapping of current characters
// 				map[str1[i].charCodeAt()] = str2[i].charCodeAt();
// 			}

// 			// If this is not first appearance of current
// 			// character in str1, then check if previous
// 			// appearance mapped to same character of str2
// 			else if (map[str1[i].charCodeAt()] != str2[i].charCodeAt())
// 				return 0;
// 		}

// 		return 1;
// 	}
	
// 	let res = areIsomorphic("aab", "xxy");
// 	console.log(res)

// 	results = areIsomorphic("aab", "xyz");
// 	console.log(results)
	

function knapsac (capacity, array) {
  const obj = [{name:"laptop", weight: 1000, value: 31}, 
    {name: 'mouse', weight: 100, value: 10},
    {name: 'speaker', weight: 100, value: 9},
    {name: 'microphone', weight: 50, value: 3},
    {name: 'modem', weight: 50, value: 15},
    {name: 'phone', weight: 80, value: 19},
    {name: 'phone charger', weight: 20, value: 18},
    {name: 'laptop charger', weight: 85, value: 17},
    {name: 'earphones', weight: 10, value: 14},
    {name: 'eyeglasses', weight: 35, value: 16},
    {name: '2 pullovers', weight: 1200, value: 13},
    {name: 'tooth-brush', weight: 10, value: 8},
    {name: 'tooth-paste', weight: 60, value: 6},
    {name: 'sandales', weight: 120, value: 5},
    {name: 'sucks', weight: 45, value: 4},
    {name: 'cap', weight: 25, value: 2},
    {name: 'books', weight: 800, value: 12},
    {name: 'pen', weight: 60, value: 11},
    {name: 'distributor', weight: 700, value: 1},
    {name: 'watch', weight: 150, value: 7}]

  let total_weight = 0
  let total_value = 0
  let n = obj.length
  arr = []

  for (let i = 0; i <= n; i++) {
    if (total_weight < capacity) {
      total_weight += obj[i].weight
      total_value += obj[i].value
      arr.push(obj[i])
    }
    number_of_iterms = arr.length
  }
  return {number_of_iterms, total_value, total_weight, arr}
  
}
console.log(knapsac(2000))
























