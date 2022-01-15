const db = require("../db");
const seed = require("../db/seed");
const testData = require("../db/data/test-data");
const request = require('supertest');
const app = require('../app.js');

afterAll(() => db.end());

beforeEach(() => { 
    return seed(testData) 
});

//GET /api/treasures
//Create an endpoint to allow Mitch to view all the treasures currently available.

describe('GET /api/treasures', () => {
    test('200: responds with an array of all treasures available', () => {
        return request(app)
          .get('/api/treasures')
          .expect(200)
          .then((response) => {
              console.log(response.body.treasures)
              expect(Array.isArray(response.body.treasures)).toBe(true);
              expect(response.body.treasures).toHaveLength(26)
              response.body.treasures.forEach((treasure) => {
                  expect(treasure).toMatchObject( {
                      treasure_id: expect.any(Number),
                      treasure_name: expect.any(String),
                      colour: expect.any(String),
                      age: expect.any(Number),
                      cost_at_auction: expect.any(String),
                      shop_id: expect.any(Number)
                  });
              });
          });
    });
    test('200: when no query is specified responds with an array of treasures sorted by age in ascending order (youngest to oldest) by default. Age is the default sort by option.', () => {
        return request(app)
            .get('/api/treasures')
            .expect(200)
            .then((response) => {
                const treasures = response.body.treasures;
                //console.log(treasures, '<<< treasures default')
                const sortedTreasures = [...treasures].sort(function(a, b) {
                    return a.age - b.age;
                });
                expect(treasures).toEqual(sortedTreasures);
            });
    });
    /* - Allow a client to sort by `age`, `cost_at_auction` and `treasure_name` with a `sort_by` query.

  - _`/api/treasures?sort_by=cost_at_auction`, for example, should respond with a list of treasures, cheapest firsts._ */
    test('200: when a query specifies to sort by age, treasures responds with an array of treasures sorted by age in ascending order (youngest to oldest).', () => {
        return request(app)
            .get('/api/treasures?sort_by=age')
            .expect(200)
            .then((response) => {
                //console.log(response.body.treasures);
                const treasures = response.body.treasures;
                //console.log(treasures, '<<<TREAS')
                const sortedTreasures = [...treasures].sort(function(a, b) {
                    return a.age - b.age;
                });
                expect(treasures).toEqual(sortedTreasures);
            });
    });
    test('200: when a query specifies to sort by cost_at_auction, treasures responds with an array of treasures sorted by cost_at_auction in ascending order (cheapest to most expensive).', () => {
        return request(app)
            .get('/api/treasures?sort_by=cost_at_auction')
            .expect(200)
            .then((response) => {
                //console.log(response.body.treasures);
                const treasures = response.body.treasures;
                //console.log(treasures, '<<<TREAS vost at auction')
                const sortedTreasures = [...treasures].sort(function(a, b) {
                    return a.cost_at_auction - b.cost_at_auction;
                });
                expect(treasures).toEqual(sortedTreasures);
            });
    });
    test('200: when a query specifies to sort by treasure_name, treasures responds with an array of treasures sorted by treasure_name in ascending order (alphabetical a-z).', () => {
        return request(app)
            .get('/api/treasures?sort_by=treasure_name')
            .expect(200)
            .then((response) => {
                //console.log(response.body.treasures);
                const treasures = response.body.treasures;
                //console.log(treasures, '<<<TREAS treasureName')
                const sortedTreasures = [... treasures].sort(function(a, b) {
                    if(a.treasure_name < b.treasure_name) {
                        return -1;
                    }
                    if(a.treasure_name > b.treasure_name) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
                expect(treasures).toEqual(sortedTreasures);
            });
    });
});








// describe("GET /api/films", () => {
//     test("200 (ok): responds with an array of films", () => {
        
//         return request(app)
//             .get("api/films")
//             .expect(200)
//             .then((res) => {
//                 expect(res.body.films).toBeInstanceOf(Array);
//                 expect(res.body.films).toHaveLength(4);

//                 res.body.films.forEach((film) => {
//                     expect(film).toMatchObject({
//                         film_id: expect.any(Number),
//                         film_title: expect.any(String),
//                         year_of_release: expect.any(Number)
//                         // remaining columns go here - use our table data .....  
//                     });
//                 });
//             });
//     });
// });


// // TEST 2 TO UPDATE
// // see models and controllers setup in video

// test("200 (ok): films sorted by year of release by default", () => {
    
//     return request(app)
//         .get("api/films")
//         .expect(200)
//         .then((res) => {
//             // LOGIC SUGGESTIONS FROM LECTURE
//             // check they're in the right order
//             // loop through, and check each entry is >= to the one before
//             // res.body.films === [...].sort((a, b) => {})

//             // instead of the above, we'll use 'jest-sorted' package (by Paul)  
//             // see install instructions: https://www.npmjs.com/package/jest-sorted
//             expect(res.body.films).toBeSortedBy("year_of_release");
//         });
// });


// // TEST 3 TO UPDATE
// // see models and controllers setup in video

// test("200 (ok): films sorted by a passed query", () => {
    
//     return request(app)
//         .get("api/films?sort_by=film_id")
//         .expect(200)
//         .then((res) => {
//              expect(res.body.films).toBeSortedBy("film_id");
//         });
// });

// // TEST 4 TO UPDATE
// // see models and controllers setup in video

// test("400 (bad request): for invalid sort_by column", () => {
    
//     return request(app)
//         .get("api/films?sort_by=not_a_column_name")
//         .expect(400)
//         .then((res) => {
//              expect(res.body.msg).toBe("bad request");
//         });
// });


