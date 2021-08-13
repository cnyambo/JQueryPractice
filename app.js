//When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
console.log("Let’s get ready to party with jQuery!");

//Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$("article img").addClass('image-center');

//Remove the last paragraph in the article.
$("article p").eq(5).remove();

//Set the font size of the title to be a random pixel size from 0 to 100.
const size = Math.floor(Math.random() * 101);
$('h1').css('font-size',size + 'px');

//Add an item to the list; it can say whatever you want.
$('ol').append('<li>This is my favorite unit because it is short and simple</li>');


//Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$('aside').empty().append('<p>Sorry the list has been removed</p>');

//When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$('input').on('change',function(){
    const num1 = $('input').eq(0).val();
    const num2 = $('input').eq(1).val();
    const num3 = $('input').eq(2).val();
    $('body').css('background-color',`rgb(${num1},${num2},${num3})`);
});

//Add an event listener so that when you click on the image, it is removed from the DOM.
$('img').on('click',function(){
    $(this).remove();
})