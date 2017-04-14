var app = function(){

  // https://api.punkapi.com/v2/beers?page=2&per_page=80

  var beerList = new BeerList('https://api.punkapi.com/v2/beers?page=10&per_page=25');
  var beers = beerList.getData(function(beers){
    console.log(beers)
    beerList.populateList(beers)
  });





  }

window.onload = app;