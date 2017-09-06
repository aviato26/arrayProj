// the onclick event handler was set on the names id to wait for the button to be clicked b4 running
	 let names; // grabs value from input;
	 const aray = []; // we will use this array to store the data
	 let searchNames; // this will use later to store the search input
	 const addedText = document.getElementById('outPut');// this is the textarea we will insert the search list
	 let caps; // this will hold our capitalization function later on
	 
   const getNames = () => {
	 event.preventDefault(); // this will stop the search button from trying to send the data to a server ('i think')
	 event.stopPropagation(); // this is working along with the preventDefault function
	 names = document.getElementById('names').value;
	 aray.push(names); // now we push the value from the text area to the array we made
	 caps = aray.map(function(str){ // using map function to loop through all the items in the array 
  return str.charAt(0).toUpperCase() + str.slice(1); // and capitalizing the first letter for all the items in the array
}); // we will send this later to the search output so it will be capitalized and sorted alphabetically
	 console.log(aray); // and send it to the console to see if it is working

 }
 
   const search = () => {
	   event.preventDefault();
	   event.stopPropagation();
	   searchNames = document.getElementById('input').value.toLowerCase(); // this takes the value inputed into input and converts it to lowercase
	   for(var i = 0; i < aray.length; i++) {
	    if(aray.indexOf(searchNames) > -1) { // this checks to see if the data that is inputed matches with anything in the array
			let set = addedText.innerHTML = caps.sort(); // this inserts the array into the textarea and sorts it alphabetically and with caps will capitalize the first letters of the items in the array
			
	} else { addedText.innerHTML = 'sorry man ' + searchNames + ' is not here'} // this will run if the input does not match anything in the array
   }
   }
   