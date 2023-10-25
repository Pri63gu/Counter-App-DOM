 // Get references to the HTML elements
 const counterElement = document.getElementById('counter');
 const incrementButton = document.getElementById('increment');
 const decrementButton = document.getElementById('decrement');
 const resetButton = document.getElementById('reset');

 let count = 0;

 // Update the counter display
 function updateCounter() {
   counterElement.textContent = count;
 }

 // Event listener for the increment button
 incrementButton.addEventListener('click', () => {
   count += 1;
   updateCounter();
 });

 // Event listener for the decrement button
 decrementButton.addEventListener('click', () => {
   count -= 1;
   updateCounter();
 });

 // Event listener for the reset button
 resetButton.addEventListener('click', () => {
   count = 0;
   updateCounter();
 });

 // Initial counter update
 updateCounter();