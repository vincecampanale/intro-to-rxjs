var test = require('tape') // require unit testing library

/****************|
    UTILITIES
|****************/
Array.prototype.concatAll = function () {
  let results = [];
  this.forEach( a => a.forEach( e => results.push(e) ) );
  return results;
}
Array.prototype.map = function (fn) {
  let results = [];
  this.forEach( e => results.push(fn(e)) );
  return results;
}

// Exercise 11: Use map() and concatAll() to project and flatten the movieLists into an array of video ids
const movieLists = [
			{
				name: "New Releases",
				videos: [
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
					}
				]
			},
			{
				name: "Dramas",
				videos: [
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
				]
			}
		]; // Flatten this into an array of video ids

/* Final iteration: Abbreviated variables, const, and arrow functions */
const flattenMovieLists = l => l.map( m => m.videos.map( v => v.id ) ).concatAll();




/****************|
      TESTS
|****************/

test('concatAll', function(t) {
  const msg = '...should work';

  const a =  [ [1,2,3], [4,5,6], [7,8,9] ];

  const actual = a.concatAll();
  const expected = [1,2,3,4,5,6,7,8,9];

  t.same(actual, expected, msg);
  t.end();
});
test('map', function(t) {
  const msg = '...should work';

  const a = [1,2,3];
  const f = n => n*2;

  const actual = a.map(f);
  const expected = [2,4,6];

  t.same(actual, expected, msg);
  t.end();
});
test('flattenMovieLists(movieLists)', function (t) {
  const msg = '...should return [70111470, 654356453, 65432445, 675465]';

  const movieLists = [
  			{
  				name: "New Releases",
  				videos: [
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
  					}
  				]
  			},
  			{
  				name: "Dramas",
  				videos: [
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
  				]
  			}
  		];

  const actual = flattenMovieLists(movieLists); //flattenMovieLists(movieLists);
  const expected = [70111470, 654356453, 65432445, 675465];

  t.same(actual, expected, msg);
  t.end();
});















//.
