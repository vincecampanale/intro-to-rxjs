var test = require('tape');

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

const movieLists = [
		{
			name: "Instant Queue",
			videos : [
				{
					"id": 70111470,
					"title": "Die Hard",
					"boxarts": [
						{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
						{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 654356453,
					"title": "Bad Boys",
					"boxarts": [
						{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
						{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id: 432534, time: 65876586 }]
				}
			]
		},
		{
			name: "New Releases",
			videos: [
				{
					"id": 65432445,
					"title": "The Chamber",
					"boxarts": [
						{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
						{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 675465,
					"title": "Fracture",
					"boxarts": [
						{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
						{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
						{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id: 432534, time: 65876586 }]
				}
			]
		}
	];

//Their Answer:
// function fn(movieLists) {
//   return movieLists.
// 	  map(function(movieList) {
// 		return movieList.videos.
// 		  map(function(video) {
// 			return video.boxarts.
// 			  filter(function(boxart) {
// 				return boxart.width === 150;
// 			  }).
// 			  map(function(boxart) {
// 				return {id: video.id, title: video.title, boxart: boxart.url};
// 			  });
// 		  }).
// 		  concatAll();
// 	  }).
// 	  concatAll();
// }

//An intermediate iteration:
// function fn(movieLists){
//   return movieLists.map(movieList => {
//     return movieList.videos.map(video => {
//        return video.boxarts
//                         .filter(boxart => boxart.width === 150)
//     										.map(boxart => ({ id: video.id, title: video.title, boxart: boxart.url }));
//     }).concatAll();
//   }).concatAll();
// }

// My Final Iteration
const fn = (movieLists) =>
  movieLists.
    map( ml => ml.videos.
      map( v => v.boxarts.
        filter( b => b.width === 150 ).
        map( b => ({id: v.id, title: v.title, boxart: b.url}) )
      ).
      concatAll()
    ).
    concatAll();

test('fn', function(t) {
  const msg = '...should work';

  const actual = fn(movieLists);
  const expected = [ { boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg', id: 70111470, title: 'Die Hard' }, { boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg', id: 654356453, title: 'Bad Boys' }, { boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg', id: 65432445, title: 'The Chamber' }, { boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg', id: 675465, title: 'Fracture' } ];

  t.same(actual, expected, msg);
  t.end();
});
