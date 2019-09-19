'use strict';
//Cat Carousell Drill
/*when a user selects one of the thumbnail images using the mouse or keyboard, 
that image should be displayed in the full-size image container at the top. 
Updating the image should also update its alt attribute. To test keyboard interactivity, 
you can Tab to one of the thumbnails and press the Enter key.*/

function thumbnailClick() {
  $('.thumbnail').on('click', event => {
    //change src of bigger image to match src attr of smaller image clicked on
    //change alt attr of bigger image to match smaller img thats clicked on
    let smallImg = $(event.currentTarget)
      .find('img')
      .attr('src');
    let altImg = $(event.currentTarget)
      .find('img')
      .attr('alt');

    $('.hero img')
      .attr('src', smallImg)
      .attr('alt', altImg);
  });
}
$(thumbnailClick);

//FizzBuzz Drill

/** 
* @param {Number} num
* @returns{*} will return 'fizzbuzz', 'buzz', 'fizz',
* or the number passed in
*/

function fizzbuzz(num){
    if (num % 15 === 0) return 'fizzbuzz';
    if (num % 5 === 0) return 'buzz';
    if (num % 3 === 0) return 'fizz';
    return num;
}

/** 
 * @param {*} fizzResult - 'fizzbuzz', 'buzz', 'fizz', or the number
 * @return {string} - generates ONE fizzbuzz item
 */

function generateFizzHtml(fizzResult) {
    let fizzClass = '';
    if (typeOf fizzResults === 'string') {
        fizzClass = fizzResult;
    }
    return `
    <div class="fizz-buzz-item ${fizzClass}">
        ${fizzResult}
      </div>
      `
   // return `<div class="fizz-buzz-item ${fizzClass}">
}

function handleSubmit() {
     $('#number-chooser').on('submit', event => {
         event.preventDefault();
         const countTo = $('#number-choice').val();
         //clear user value
         
         $('#numberChoice').val();
         //capture results in an array
         
         const fizzBuzzResults = [];
         for(let i = 1; i <= countTo; i++){
             fizzBuzzResults.push(fizzbuzz(i));
         }
         //create html to print to the page
         const html = fizzBuzzResults.map(result => generateFizzItemHtml(result));
         
         $('js-results').html(html);
     });
 }
$(handleSubmit);
}
