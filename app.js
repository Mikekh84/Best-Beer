// Aaron helped with the Dupe Problem!
//Contructor for Images
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');

var Beer = function(src, name, vote) {
  this.src = src;
  this.name = name;
  this.vote = 0;
}

//images List
var abt12 = new Beer('img/abt12.jpg', 'Abt 12', 0);
var bluemoon = new Beer('img/bluemoon.jpg', 'Blue Moon', 0);
var bud = new Beer('img/bud.jpg', 'Budweiser', 0);
var corona = new Beer('img/corona.jpg', 'Corona', 0);
var frank = new Beer('img/franziskanber.jpg', 'Frankziskanber', 0);
var guinness = new Beer('img/guinness.jpg', 'Guinness', 0);
var koestritzer = new Beer('img/koestritzer.jpg', 'Koestritzer', 0);
var macandjacks = new Beer('img/mackandjacks.jpg', 'Mac and Jacks', 0);


//Generate Random #1
  var getRan = function() {
    return Math.floor(Math.random() * (beerList.length - 0 + 0) + 0);
  }; //End of getRan


  var ran1, ran2;
//List of Beers

var beerList =[abt12, bluemoon, bud, corona, frank, guinness,
              koestritzer, macandjacks];

//Display Random Img
var displayImg = function() {



  ran1 = getRan();
  ran2 = getRan();

  //Check for dupe numbers.
  while (ran1 === ran2) {
      ran2 =getRan();
  };
//pop alert is numbers are the same.
 if(ran1 === ran2)  {
  alert('Error')
};

//get random image from array
  var getRandImg1 = beerList[ran1];
  var getRandImg2 = beerList[ran2];

//Load image
  // console.log(getRandImg1);
  // console.log(getRandImg2);
  document.getElementById('imgone').src = getRandImg1.src;
  document.getElementById('imgtwo').src = getRandImg2.src;



/// Test Space within display IMG

};
//call function
displayImg();

button1.addEventListener("click", function() {
  beerList[ran1].vote += 1;
  console.log(beerList[ran1].name + ' has ' + beerList[ran1].vote + ' votes');

  displayImg();
});
button2.addEventListener("click", function() {
  beerList[ran2].vote += 1;
  console.log(beerList[ran2].name + ' has ' + beerList[ran2].vote + ' votes');
  displayImg();
});
