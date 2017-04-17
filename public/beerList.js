var BeerList = function(url){
  this.url = url;
  this.beers = [];
  this.beerArray = [];
}

BeerList.prototype = {
  getData: function(callback){
    var request = new XMLHttpRequest();
    request.open('GET', this.url);
    request.onload = function(){
      if(request.status = 200){
        var JSONString = request.responseText;
        this.beers = JSON.parse(JSONString);
        callback(this.beers)
      }
    }.bind(this)
    request.send()
  },
  populateList: function(beers){
    beers.forEach(function(beer){
      // console.log(beer.name);
      this.addBeerElement(beer)
    }.bind(this))
  },
  addBeerElement: function(beer){
    list = document.querySelector('#beers-list');
    listItem = document.createElement('p');
    listItem.innerText = beer.name;
    list.appendChild(listItem);
  },
  createBeersObject: function(beers, callback){
    beers.forEach(function(beer){
      this.beerArray.push(beer)
    }.bind(this))
    callback(this.beerArray)
  },
  populateDropDown: function(beers, dropDown){
    beers.forEach(function(beer){
      var option = document.createElement('option')
      option.text = beer.name
      // option.value = beer.id
      dropDown.appendChild(option)
    }.bind(this))
  },
  showBeerDetails: function(index, element){
    element.innerHTML = ""
    var beer = this.beerArray[index]
    console.log(beer)
   
    var nameH2 = document.createElement('h2')
    nameH2.innerText = beer.name;

    var firstBrewedP = document.createElement('p');
    firstBrewedP.innerText = "First Brewed: " + beer.first_brewed
   
    var tagH3 = document.createElement('h3')
    tagH3.innerText = beer.tagline;
   
    var abvibuP = document.createElement('p')
    abvibuP.innerText = "ABV: " + beer.abv + "%, IBUs: " + beer.ibu;

    var descriptionP = document.createElement('p')
    descriptionP.innerText = beer.description

    var image = document.createElement('img')
    image.src = beer.image_url
    image.height = 200

    var foodPairings = document.createElement('p')
    foods = beer.food_pairing
    var foodString = ""
    foods.forEach(function(food){
      foodString = foodString + food + ", "
    })
    foodPairings.innerText = "Food Pairings: " + foodString;
    // first brewed food pairings

    element.appendChild(nameH2)
    element.appendChild(firstBrewedP)
    element.appendChild(tagH3)
    element.appendChild(abvibuP)
    element.appendChild(image)
    element.appendChild(descriptionP)
    element.appendChild(foodPairings)
  }
}

