console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------")
// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============

// HINT: Make a console.log for each of your functions to make sure that, when you click, 
// the correct function is being called!
// 1. create a section tag with an id of middle-earth
// 2. append the section to the body of the DOM.
// 3. use a for loop to iterate over the lands array that does the following:
//   3a. creates an article tag (there should be one for each land when the loop is done)
//   3b. gives each land article an `id` tag of the corresponding land name
//   3c. includes an h1 with the name of the land inside each land article
//   3d. appends each land to the middle-earth section

    const makeMiddleEarth = () => {
      console.log("Trying to make middle earth.");

      const $middleEarth = $('<section id="middle-earth"></section>');
      $('body').append($middleEarth);
        for(let i = 0; i < lands.length; i++) {
          const $article = $('<article/>');
          $article.attr('id', lands[i])
          const $landHeader = $('<h1/>');
          $landHeader.text(lands[i]);
          $article.append($landHeader);
          $middleEarth.append($article);
        }
    };

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

    const makeHobbits = () => {

  // 1. display an unordered list of the hobbits in the shire.
  // 2. give each hobbit a class of "hobbit"
  // hint: create a 'ul' outside the loop upon which to append the 'li's
  // hint: get 'The-Shire' by using its id

    const $ul = $('<ul/>');
      for(let i = 0; i < hobbits.length; i++) {
        const $li = $('<li/>');
        $li.attr('class', 'hobbit');
        $li.text(hobbits[i]);
        $ul.append($li);
      };
      $('#The-Shire').append($ul)
    };

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

  // 1. create an empty div with an id of 'the-ring'
  // 2. add the ring as a child of Frodo
  // hint: Frodo does not have an id, but there is a command to retrieve all elements 
  // with a certain class. This should give you an array for you to access . . .
  // when you think you have given Frodo the ring, check in your Elements tab

  const keepItSecretKeepItSafe = () => {
    const $ring = ('<div id="the-ring">***ring***</div>');
    $('li:contains("Frodo")').append($ring);
  };

// COMMIT YOUR WORK
// The commit message should read:  "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

  // 1. display an unordered list of baddies in Mordor
  // 2. give each of the baddies a class of "baddy"
  // 3. remember to append them to Mordor

    const makeBaddies = () => {
      const $ul = $('<ul/>');
      $('#Mordor').append($ul)
        for(let i = 0; i < baddies.length; i++) {
          const $li = $('<li/>');
          $li.attr('class', 'baddy');
          $li.text(baddies[i]);
          $ul.append($li);
        };
    };

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

  // 1. create an aside tag and append it to middle-earth below mordor
  // 2. display an unordered list of buddies in the aside
  // 3. give each of the buddies a class of "buddy"

    const makeBuddies = () => {
      const $aside = $('<aside/>');
      $aside.insertAfter('#Mordor');
      const $ul = $('<ul/>');
      $aside.append($ul);
        for(let i = 0; i < buddies.length; i++) {
          const $li = $('<li/>');
          $li.attr('class', 'buddy');
          $li.text(buddies[i]);
          $ul.append($li);
        };
    };

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

      const leaveTheShire = () => {
        $('.hobbit').appendTo($('#Rivendell'));
      };

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
  // 1. change the buddy 'Strider' textnode to "Aragorn"
  // hint: You can get a list of elements by tag name, such as 'aside'
      
      const beautifulStranger = () => {
        $('.buddy').eq(3).text('Aragorn');
      };

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

  // 1. create a new div with an id 'the-fellowship'
  // 2. add an h1 with the text 'The Fellowship' to this new div
  // 3. append the fellowship to middle-earth
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'

    const forgeTheFellowShip = () => {
      const $fellowship = $('<div id="the-fellowship"></div>');
      $fellowship.append('<h1>The Fellowship</h1>');
      $('#middle-earth').append($fellowship); 
      $('.hobbit').appendTo($('#the-fellowship'));
      $('aside').children('ul').appendTo($('#the-fellowship'));
    };

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

  // 1. change the 'Gandalf' textNode to 'Gandalf the White'
  // 2. add a class "the-white" to this element
  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

    const theBalrog = () => {
       $('.buddy').eq(0).replaceWith('<li class="the-white">Gandalf the White</li>');
        
     
    };

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

  // 1. create a pop-up alert that the horn of gondor has been blown
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page

    const hornOfGondor = () => {
       alert("The Horn of Gondor has been blown!");
       $('.buddy').eq(3).css("text-decoration", "line-through");
       $('.baddy').eq(2).remove();
    };

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  // 2. add a div with an id of 'mount-doom' to Mordor

    const itsDangerousToGoAlone = () => {
      $('.hobbit').eq(0).appendTo('#Mordor');
      $('.hobbit').eq(1).appendTo('#Mordor');
      const $mDoom = $('<div id="mount-doom">Mt. Doom</div>');
      $('#Mordor').append($mDoom);
    };

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

  // 1. Create a div with an id of 'gollum' and add it to Mordor
  // 2. Move the ring from Frodo and give it to Gollum
  // 3. Move Gollum into Mount Doom

    const weWantsIt = () => {
      const $gollum = $('<div id="gollum">Gollum</div>');
      $('#Mordor').append($gollum);
      $('#the-ring').appendTo($('#gollum'));
      $('#gollum').appendTo($('#mount-doom'));
    };

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

  // 1. remove Gollum and the Ring from the DOM
  // 2. remove all the baddies from the DOM
  // 3. Move all the hobbits back to the shire

    const thereAndBackAgain = () => {
      $('#gollum').remove();
      $('#the-ring').remove();
      $('.baddy').remove();
      $('.hobbit').appendTo($('#The-Shire'));
    };

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);

});
