// add sentence arrays
let sentences = [
   // poetry (26)
  'To be a Flower, is profound responsibility', // bloom - emily dickinson
  'And then my heart with pleasure fills', // daffodils - william wordsworth
  'And dances with the daffodils', // daffodils - william wordsworth
  'Ah Sunflower, weary of time', // ah sunflower! - william blake
  'Where the Youth pined away with desire', // ah sunflower! - william blake
  'Where my Sunflower wishes to go!', // ah sunflower! - william blake
  'A flower unplucked is but left to the falling', //asking for roses - robert frost
  'And nothing is gained by not gathering roses', //asking for roses - robert frost
  'The rarest blooms of love untouched by pride', //a bed of wild violets - eliza allen starr
  'In these stars of earth, these golden flowers', //flowers - henry wadsworth longfellow
  'Buds that open only to decay', //flowers - henry wadsworth longfellow
  'Tender wishes, blossoming at night!', //flowers - henry wadsworth longfellow
  'Brief even as bright', // the flower that smmiles today - percey shelley
  'The flower that smiles today to-morrow dies', // the flower that smmiles today - percey shelley
  'The flowers you nearly brought have lasted all this while', //flowers - wendy cope
  'While the Lily white shall in love delight', // the lily - william blake
  'The scent of the jasmine, the breath of the rose,', //violets - c.b. langston
  'All bright in their purple, and fresh in their bloom!', //violets - c.b. langston
  'The first when the spring comes to follow her footsteps', //violets - c.b. langston
  'Here are violets, beautiful violets', //violets - c.b. langston
  'I found the fresh Rhodora in the woods', //rhodora - ralph waldo emerson
  'The tulips are too excitable, it is winter here', //tulips - sylvia plath 
  'I am learning peacefulness, lying by myself quietly', //tulips - sylvia plath 
  'Did you hear about the rose that grew from a crack in the concrete?', // the rose that grew - tupac shakur
  'Bold little beauty', //may-flower by emily dickinson
  'Nature forswears antiquity', //may-flower by emily dickinson 
  'And her thorns were my only delight', //My Pretty Rose Tree - william blake
  // community posts (29)
  // craigslist
  'I saw fields of yellow and pink flowers, so yes, they flower and make seed',
  'I dont quite think it is harvest time yet',
  'This is my first grow ever',
  'Falling off the flower stems, at the mercy of wind, soil, insects, birds',
  'Plants flower when theyre ready too, unless theyre irreparably damaged and wont',
  '4$ for a tiny tomato plant. ARE they joking',
  'A flower probably didnt feel pain',
  'I also need to transplant 3 roses, something I dread because of the thorns',
  'They didnt bloom at all this last year',
  'Always adored them but never grew them',
  'Maybe, maybe cut a flower stalk, that might help get a bit more growth',
  'Honestly, it would be pure joy, if they were to flower again next year',
  'Am I being too optimistic to believe in the regenerative powers of nature?',
  'Always adored them but never grew them',
  'Dont cut the leaves back, the plant will take care of that',
  'It would be pure joy, if they were to flower again next year',
  'The flowers are spent, the stalks & leaves have withered and are dying',
  'It may take more than a year for any of those to bloom again',
  'Perhaps they will all die. You wont know until you try',
  // veggiegardener
  'The house and buildings are long gone, but the flowers they planted still remain and come up every year',
  'This years sunflowers are growing well',
  'Some pictures of flowers past',
  'I never tire of the sunflower blooms',
  'Simply seeking peaceful hours tending to flowers',
  'Should I cut off the flowers above these to make them grow larger?',
  'Growing flowers, vegetables, and herbs from seed is thrifty and rewarding',
  'You may even be seeing flowers blooming that ordinarily would not be this time of year',
  'After growing a flower bed, you have had to deal with weeds',
  'I love how beautiful everything looks as it grows',
  'Pinch off flowers to focus more growth on the plant and leaf production',
  // gardenweb
  'Hope you ride out the storm with no damage',
  //  tdcc 
  'It could be the changing of the seasons'
  ];


  function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.background('white')
    
    // make dynamic flowers
    shape = Math.random(); 
    if (0.5<shape<=0)  {shape= cnv.mouseMoved(dynamicflwr)} //flowers move when dragged 
    else if (1<shape<=0.5)  {shape= cnv.mousePressed(dynamicflwr);} //flowers appear on click

    function dynamicflwr() {
    for (var i=0; i<=100; i++){
        ellipse(mouseX,mouseY,20,20)
        ellipse(mouseX-15, mouseY+5,20,20)
        ellipse(mouseX-25,mouseY-5,20,20)
        ellipse(mouseX-17,mouseY-20,20,20)
        ellipse(mouseX,mouseY-15,20,20)
        fill (250, Math.random()*250, Math.random()*205);
        ellipse(mouseX-12,mouseY-7,22,22) 
      }
    }
  }

function showRandomSentences() {
    let selectedSentences = pickDistinctRandomSentences(sentences, 3);
    background('white')
    textAlign(CENTER,CENTER);
    textSize(19);
    textFont('Arial')
    fill(238,38,119); //#ee2677 remove this to have random font colors (lighter ones are harder to read)
    // Display the selected sentences
        for (let i = 0; i < sentences.length; i++) {   
        textWrap(WORD);
        text(selectedSentences[i], windowWidth/2, windowHeight/2.5 + i * 40)
        }
} 

function pickDistinctRandomSentences(sentences, count) {
    if (count > sentences.length) {
      count = sentences.length;
    }
    
    let selectedSentences = [];
    let availableIndices = Array.from(Array(sentences.length).keys()); // Array of indices of available sentences
    
    for (let i = 0; i < count; i++) {
      let randomIndex = floor(random(availableIndices.length)); // Random index from availableIndices
      let selectedIndex = availableIndices[randomIndex]; // Index of selected sentence in sentences array
      selectedSentences.push(sentences[selectedIndex]); // Add selected sentence to the result
      availableIndices.splice(randomIndex, 1); // Remove selected index from availableIndices
    }
    
    return selectedSentences;
  }


// toggle about section
$('#about-button').on('click', function () {
    $('#about-text').fadeToggle();
  })
  
// toggle poem 
$("#initialButton").on('click', function () {
    showRandomSentences()
  });

//   to save canvas 
function keyTyped() {
    if (key === 's' || key === 'S') {
      saveCanvas('ChangingSeasons', 'jpg');
    }
  }

