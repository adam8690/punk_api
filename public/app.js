var app = function(){
  
      // these first lines hit the api 3 times to get all of the beers into a single object. The first two createbeers object functions have an empty callback so I can just populate the object then the final one uses the callback to run other functions that require the beer object because by this time the object calls to the api are complete and all the data is returned. 

      var beerList1 = new BeerList('https://api.punkapi.com/v2/beers?page=1&per_page=80');
      var beers1 = beerList1.getData(function(beers1){
      beerList1.createBeersObject(beers1, function(){})
      });  

      var beerList2 = new BeerList('https://api.punkapi.com/v2/beers?page=2&per_page=80');
      var beers2 = beerList2.getData(function(beers2){
      beerList1.createBeersObject(beers2, function(){})
      });  

      var beerList3 = new BeerList('https://api.punkapi.com/v2/beers?page=3&per_page=80');
      var beers3 = beerList3.getData(function(beers3){
      beerList1.createBeersObject(beers3, function(){
        // beer object (beerList1.beerArray) is created here so rest of app can live here? 
        console.log(beerList1.beerArray[0].name)
        console.log(beerList1.beerArray[200].name)

        // or can have eventlisteners below and as long as you are not to fast in clicking it all should work.
        // therefore the callback may not be necessary.
        // callback here should be for creating lists that appear on the main screen e.g. select view. 

      })
      
      });





  navBar = document.querySelector('nav');
  listButton = document.createElement('button')
  listButton.innerText = "List All Beers"
  navBar.appendChild(listButton)
  
  listButton.addEventListener('click', function(){
    beerList1.populateList(beerList1.beerArray)
    });

    

  }

window.onload = app;