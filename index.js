//starting freelancer array with at least 2 objects [{name: 'Sam', occupation: 'Programmer', price: 50}]

//array of names

//array of occupations

/**
 * create init function
 *
 *      1. select freelancer_container from DOM
 *      2. create DOM elements
 *          - table
 *          - thead
 *              - tr (header row)
 *          - tbody
 *      3. Add text to the header row where the text matches the object key of a freelancer
 *      4. Append header row to the thead
 *      5. Append thead and tbody to table
 *      6. Append table to freelancer_container
 *      7. Call the function created below to render the freelancer array
 *      8. Call the function created below to render the average price
 *
 */

/**
 * Create function to render the freelancer array to the DOM
 *
 *      1. select tbody from DOM
 *      2. map over freelancer array
 *          2-1. create elements
 *              - tr
 *              - td (name)
 *              - td (occupation)
 *              - td (starting price)
 *          2-2. Add text to each td representing the value of the freelancer object
 *          2-3. Append tds to tr
 *          2-4. return tr
 *      3. replace children of tbody with the elements created in the map
 */

/**
 * Create a function to render the average freelancer price to the DOM
 *
 *      1. get average_price span and p tag from DOM
 *      2. call sum function with the freelancer array
 *      3. call avg function passing the calculated sum and the freelancer array
 *      4. update textContent of the span with the avg
 *          - if textContent doesn't work use innerHTML
 *      5. replace children of p tag with the updated span
 */

/**
 * Create function to sum all prices in our freelancer array
 */
function sum(arr) {
    //total price
  }
  
  /**
   *
   * Function to get average of given price with array
   *
   * @param {Number} totalPrice
   * @param {Array} arr
   * @returns Number
   */
  function avg(totalPrice, arr) {
    return totalPrice / arr.length;
  }
  
  /**
   * Create a function to add a new freelancer to the freelancer array
   *
   *      1. create variable for the new freelancer object
   *      2. set the name value of our new freelancer to a random name selected from our names array
   *      3. set the occupation value of our new freelancer to a random occupation selected from our occupations array
   *      4. generate random price for new freelancer
   *
   * new_freelancer --> {name: 'Alex', occupation: 'writer', price: 75 }
   *
   *      5. add new freelancer to the freelancers array
   *      6. Call the function created above to render the freelancer array
   *      7. Call the function created above to render the average price
   *
   */
  
  //setInterval calling the function that adds a new freelancer every second aka 1000 miliseconds