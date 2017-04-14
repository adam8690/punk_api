var BeerList = function(url){
  this.url = url;
  this.beers = [];
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
      console.log(beer.name);
      this.addBeerElement(beer)
    }.bind(this))
  },
  addBeerElement: function(beer){
    list = document.querySelector('#beers-list');
    listItem = document.createElement('p');
    listItem.innerText = beer.name;
    list.appendChild(listItem);
  }
}