// Aaron helped with the Dupe Problem!
//Contructor for Images
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');

var Beer = function(src, drink) {
  this.src = src;
  this.drink = drink;

};

//images List
var abt12 = new Beer('img/abt12.jpg', 'Abt 12');
var bluemoon = new Beer('img/bluemoon.jpg', 'Blue Moon');
var bud = new Beer('img/bud.jpg', 'Budweiser');
var corona = new Beer('img/corona.jpg', 'Corona');
var frank = new Beer('img/franziskanber.jpg', 'Frankziskanber');
var guinness = new Beer('img/guinness.jpg', 'Guinness');
var koestritzer = new Beer('img/koestritzer.jpg', 'Koestritzer');
var macandjacks = new Beer('img/mackandjacks.jpg', 'Mac and Jacks');


//Generate Random #1
  var getRan = function() {
    return Math.floor(Math.random() * (beerList.length - 0 + 0) + 0);
  }; //End of getRan



//List of Beers
var beerList =[abt12, bluemoon, bud, corona, frank, guinness,
              koestritzer, macandjacks];
var ran1, ran2;

// Local Data
// stringify beerList


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
// Naming the picture





/// Test Space within display IMG
};


//Store Data

// var jsonBeer = JSON.stringify(beerList);
// var storeBeer = localStorage.setItem('beerkey', jsonBeer);

var storeBeer = function() {
  var jsonBeer = JSON.stringify(beerList);
  for (var i =0; i < beerList.length; i++) {
    if(beerList[i] !==0) {
      localStorage.setItem('beerkey',jsonBeer);
       }
  }
 };

var checkStore =function() {
  if (localStorage.getItem('beerkey')) {
  var jsonData = localStorage.getItem('beerkey');
  var parseBeer = JSON.parse(jsonData);
  beerList = parseBeer;
  }
};



//call function

// storeBeer();
button1.addEventListener("click", function() {
  beerList[ran1].vote += 1;
  console.log(beerList[ran1].drink + ' has ' + beerList[ran1].vote + ' votes');
  storeBeer();
  displayImg();
  makeData();
});

button2.addEventListener("click", function() {
  beerList[ran2].vote += 1;
  console.log(beerList[ran2].drink + ' has ' + beerList[ran2].vote + ' votes');
  storeBeer();
  displayImg();
  makeData();
});

// chart data

var makeData = function() {

var data = [
{
  value: beerList[ran1].vote,
  label: beerList[ran1].drink,
  color: '#811BD6',
  highlight:'#811BB6'
},
{
  value: beerList[ran2].vote,
  label: beerList[ran2].drink,
  color: '#9CBABA',
  highlight:'#9CBA99'
},
// {
//   value: beerList[2].vote,
//   label: 'bud',
//   color: '#9CBABA',
//   highlight:'#9CBA99'
// },
// {
//   value: beerList[3].vote,
//   label: 'corona',
//   color: '#9CBABA',
//   highlight:'#9CBA99'
// },
// {
//   value: beerList[4].vote,
//   label: 'frank',
//   color: '#9CBABA',
//   highlight:'#9CBA99'
// },
// {
//   value: beerList[5].vote,
//   label: 'guinness',
//   color: '#9CBABA',
//   highlight:'#9CBA99'
// },
// {
//   value: beerList[6].vote,
//   label: 'koestritzer',
//   color: '#9CBABA',
//   highlight:'#9CBA99'
// },
// {
//   value: beerList[7].vote,
//   label: 'macandjacks',
//   color: '#9CBABA',
//   highlight:'#9CBA99'
// }
];

var context = document.getElementById('chart').getContext('2d');
var beerChart = new Chart(context).Doughnut(data, {

  animationSteps: 4,

  animationEasing: "easeOutBounce",

  animateRotate: true,

  animateScale: true


});
};


displayImg();
checkStore();
makeData();
