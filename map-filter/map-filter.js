(function() {
   //Excellent test data from http://reactivex.io/learnrx/
	var newReleases = [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
				"bookmark": [{ id: 432534, time: 65876586 }]
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
				"bookmark": [{ id: 432534, time: 65876586 }]
			}
		];

  //FIRST WAY -- For the Love of Loops
  // var counter,
  //     otherCounter,
  //     favorites = [],
  //     favoriteIds = [];
  //
  // for ( counter = 0; counter < newReleases.length; counter++ ) {
  //   if ( newReleases[counter].rating === 5.0 ) {
  //     favorites.push(newReleases[counter]);
  //   }
  // }
  //
  // for ( otherCounter = 0; otherCounter < favorites.length; otherCounter++ ) {
  //   favoriteIds.push(favorites[otherCounter].id);
  // }


  //SECOND WAY -- For Each or Not For Each
  // var favorites = [],
  //     favoriteIds = [];
  //
  // newReleases.forEach(function(movie) {
  //   if ( movie.rating === 5.0 ) {
  //     favorites.push(movie);
  //   }
  // });
  //
  // favorites.forEach(function(movie) {
  //   favoriteIds.push(movie.id);
  // });


  //THIRD WAY -- Filter Then Map
  // var favorites = newReleases.filter(function(movie) {
  //   return movie.rating === 5.0;
  // });
  //
  // var favoriteIds = favorites.map(function(movie) {
  //   return movie.id;
  // });
  // console.log(favoriteIds);


  //FOURTH WAY -- Filter-Map
  // var favoriteIds = newReleases.filter(function(movie) {
  //                                 return movie.rating === 5.0;
  //                               })
  //                               .map(function(movie) {
  //                                 return movie.id;
  //                               });


  //FIFTH WAY -- Arrows!!!
  // var favoriteIds = newReleases.filter(movie => { return movie.rating === 5.0 })
  //                              .map(movie => { return movie.id });


  //FINAL WAY -- Whose Line Is It Anyway?
  var favoriteIds = newReleases.filter( m => m.rating === 5.0 ).map( m => m.id );


  console.log(favoriteIds);

  //Testing
  var expectedReturnVal = newReleases.filter(v => v.rating == 5).map(v => v.id);
  if (favoriteIds.toString() == expectedReturnVal.toString()) { console.log("Correct!") }
  else { console.log("Nope!") }

  return favoriteIds;
})();
