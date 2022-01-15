// probs need to require things in
// need seed-formatting file
// seed file

const { formatShopData, createShopRef, formatTreasureData } = require('../utils/seed-formatting');

describe('formatShopData', () => {
    test('Returns an empty array when passed an empty array of data.', () => {
        const shopData = [];
        const expectedFromattedShops = [];
        expect(formatShopData(shopData)).toEqual(expectedFromattedShops);
    });
    test('Returns a two level deep nested array containing the values of the shop_name, owner, slogan properties in each shop object of ShopData array. The order of the data remains intact.', () => {
        const shopData = [
            { shop_name: 'shop-b', owner: 'firstname-b', slogan: 'slogan-b' },
            { shop_name: 'shop-d', owner: 'firstname-c', slogan: 'slogan-d' }
        ]
        const expectedFromattedShops = [ [ 'shop-b',  'firstname-b', 'slogan-b'], [ 'shop-d', 'firstname-c', 'slogan-d'] ];
        const result = formatShopData(shopData)
        expect(Array.isArray(result)).toBe(true);
        result.forEach((resultElement) => {
            expect(Array.isArray(resultElement)).toBe(true);
            resultElement.forEach((element) => {
                expect(typeof element).toBe('string');
            });
        });
        expect(result.length).toBe(shopData.length);
        expect(result).toEqual(expectedFromattedShops);
    });
    test('Returns a two level deep nested array containing the values of the shop_name, owner, slogan properties in each shop object of ShopData array. The order of the data remains intact. When more than two object in shopData.', () => {
    const shopData = [
        { shop_name: 'shop-b', owner: 'firstname-b', slogan: 'slogan-b' },
        { shop_name: 'shop-d', owner: 'firstname-c', slogan: 'slogan-d' },
        { shop_name: 'shop-e', owner: 'firstname-d', slogan: 'slogan-e' },
        { shop_name: 'shop-f', owner: 'firstname-e', slogan: 'slogan-f' },
        { shop_name: 'shop-g', owner: 'firstname-f', slogan: 'slogan-g' },
        { shop_name: 'shop-h', owner: 'firstname-a', slogan: 'slogan-h' },
        { shop_name: 'shop-i', owner: 'firstname-g', slogan: 'slogan-i' },
        { shop_name: 'shop-a', owner: 'firstname-h', slogan: 'slogan-a' },
        { shop_name: 'shop-j', owner: 'firstname-i', slogan: 'slogan-j' },
        { shop_name: 'shop-k', owner: 'firstname-j', slogan: 'slogan-k' },
        { shop_name: 'shop-c', owner: 'firstname-c', slogan: 'slogan-c' }
      ];
    const expectedFromattedShops = [
        [ 'shop-b', 'firstname-b', 'slogan-b' ],
        [ 'shop-d', 'firstname-c', 'slogan-d' ],
        [ 'shop-e', 'firstname-d', 'slogan-e' ],
        [ 'shop-f', 'firstname-e', 'slogan-f' ],
        [ 'shop-g', 'firstname-f', 'slogan-g' ],
        [ 'shop-h', 'firstname-a', 'slogan-h' ],
        [ 'shop-i', 'firstname-g', 'slogan-i' ],
        [ 'shop-a', 'firstname-h', 'slogan-a' ],
        [ 'shop-j', 'firstname-i', 'slogan-j' ],
        [ 'shop-k', 'firstname-j', 'slogan-k' ],
        [ 'shop-c', 'firstname-c', 'slogan-c' ]
      ];
      expect(formatShopData(shopData)).toEqual(expectedFromattedShops);
    });
    test('The original data is not mutated.', () => {
        const shopData = [
            { shop_name: 'shop-b', owner: 'firstname-b', slogan: 'slogan-b' },
            { shop_name: 'shop-d', owner: 'firstname-c', slogan: 'slogan-d' }
        ];
        const shopDataCopy = [
            { shop_name: 'shop-b', owner: 'firstname-b', slogan: 'slogan-b' },
            { shop_name: 'shop-d', owner: 'firstname-c', slogan: 'slogan-d' }
        ];
        formatShopData(shopData);
        expect(shopData).toEqual(shopDataCopy);
    });
});

describe('createShopRef ', () => {
    test('Returns an empty object passed an empty array of data.', () => {
        const shopRows = [];
        const expectedRef = {};
        expect(createShopRef(shopRows)).toEqual(expectedRef);
    });
    test('Returns object with key of a shop_name and the value of the corresponding shop_id, when shopRows has a length of 2.', () => {
        const shopRows = [
            {
                shop_id: 1,
                shop_name: 'shop-b',
                owner: 'firstname-b',
                slogan: 'slogan-b'
            },
            {
                shop_id: 2,
                shop_name: 'shop-d',
                owner: 'firstname-c',
                slogan: 'slogan-d'
            }
        ]
        const expectedRef = { 'shop-b' : 1 , 'shop-d': 2 };
        expect(createShopRef(shopRows)).toEqual(expectedRef);
    });
    test('Returns an object with the key of a shop name and the value of the corresponding shop_id, when shopRows is over length of 2.', () => {
        const shopRows = [
            {
              shop_id: 1,
              shop_name: 'shop-b',
              owner: 'firstname-b',
              slogan: 'slogan-b'
            },
            {
              shop_id: 2,
              shop_name: 'shop-d',
              owner: 'firstname-c',
              slogan: 'slogan-d'
            },
            {
              shop_id: 3,
              shop_name: 'shop-e',
              owner: 'firstname-d',
              slogan: 'slogan-e'
            },
            {
              shop_id: 4,
              shop_name: 'shop-f',
              owner: 'firstname-e',
              slogan: 'slogan-f'
            },
            {
              shop_id: 5,
              shop_name: 'shop-g',
              owner: 'firstname-f',
              slogan: 'slogan-g'
            },
            {
              shop_id: 6,
              shop_name: 'shop-h',
              owner: 'firstname-a',
              slogan: 'slogan-h'
            },
            {
              shop_id: 7,
              shop_name: 'shop-i',
              owner: 'firstname-g',
              slogan: 'slogan-i'
            },
            {
              shop_id: 8,
              shop_name: 'shop-a',
              owner: 'firstname-h',
              slogan: 'slogan-a'
            },
            {
              shop_id: 9,
              shop_name: 'shop-j',
              owner: 'firstname-i',
              slogan: 'slogan-j'
            },
            {
              shop_id: 10,
              shop_name: 'shop-k',
              owner: 'firstname-j',
              slogan: 'slogan-k'
            },
            {
              shop_id: 11,
              shop_name: 'shop-c',
              owner: 'firstname-c',
              slogan: 'slogan-c'
            }
          ];
          const expectedRef = {
            'shop-b': 1,
            'shop-d': 2,
            'shop-e': 3,
            'shop-f': 4,
            'shop-g': 5,
            'shop-h': 6,
            'shop-i': 7,
            'shop-a': 8,
            'shop-j': 9,
            'shop-k': 10,
            'shop-c': 11
          }
          expect(createShopRef(shopRows)).toEqual(expectedRef);
    });
    test('The original input of shopRows is not mutated.', () => {
        const shopRows = [
            {
              shop_id: 1,
              shop_name: 'shop-b',
              owner: 'firstname-b',
              slogan: 'slogan-b'
            },
            {
              shop_id: 2,
              shop_name: 'shop-d',
              owner: 'firstname-c',
              slogan: 'slogan-d'
            }
        ];
        const shopRowsCopy = [
            {
              shop_id: 1,
              shop_name: 'shop-b',
              owner: 'firstname-b',
              slogan: 'slogan-b'
            },
            {
              shop_id: 2,
              shop_name: 'shop-d',
              owner: 'firstname-c',
              slogan: 'slogan-d'
            }
        ];
        createShopRef(shopRows);
        expect(shopRows).toEqual(shopRowsCopy);
    });
});

describe('formatTreasureData', () => {
    test('Returns an empty array when passed an empty array of data.', () => {
        const treasureData = [];
        const shopRef = {
            'shop-b': 1,
            'shop-d': 2
        };
        const expectedFromattedTreasures = [];
        expect(formatTreasureData(treasureData, shopRef)).toEqual(expectedFromattedTreasures);
    });
    test('Returns \'shopRef is empty; cannot format treasure data.\' when passed an empty shopRef object.', () => {
        const treasureData = [
            {
              treasure_name: 'treasure-a',
              colour: 'turquoise',
              age: 200,
              cost_at_auction: '20.00',
              shop: 'shop-b'
            },
            {
              treasure_name: 'treasure-d',
              colour: 'azure',
              age: 100,
              cost_at_auction: '1001.00',
              shop: 'shop-d'
            }
        ];
        const shopRef = {};
        const expectedFormattedTreasures = 'shopRef is empty; cannot format treasure data.';
        expect(formatTreasureData(treasureData, shopRef)).toEqual(expectedFormattedTreasures);
    });
    test('Returns a two level deep nested array containing the values of the treasure_name, colour, age, cost_at_auction properties in each shop object of ShopData array. And a shop_id value from the shop property of each object. The order of the data remains intact. When the length of treasureData is 2.', () => {
        const treasureData =     [
            {
              treasure_name: 'treasure-a',
              colour: 'turquoise',
              age: 200,
              cost_at_auction: '20.00',
              shop: 'shop-b'
            },
            {
              treasure_name: 'treasure-d',
              colour: 'azure',
              age: 100,
              cost_at_auction: '1001.00',
              shop: 'shop-d'
            }
        ];
        const shopRef = {
            'shop-b': 1,
            'shop-d': 2
        }
        const formattedTreasures = formatTreasureData(treasureData, shopRef);
        const expectedFormattedTreasures = [ ['treasure-a', 'turquoise', 200, '20.00', 1], ['treasure-d', 'azure', 100, '1001.00', 2] ];
        expect(Array.isArray(formattedTreasures)).toBe(true);
        formattedTreasures.forEach((treasureArray) => {
            expect(Array.isArray(treasureArray)).toBe(true);
        });
        expect(formattedTreasures).toEqual(expectedFormattedTreasures);
    });
    test('Returns a two level deep nested array containing the values of the treasure_name, colour, age, cost_at_auction properties in each shop object of ShopData array. And a shop_id value from the shop property of each object. The order of the data remains intact. When the length of treasureData is over 2.', () => {
        const treasureData = [
          {
            treasure_name: 'treasure-a',
            colour: 'turquoise',
            age: 200,
            cost_at_auction: '20.00',
            shop: 'shop-b'
          },
          {
            treasure_name: 'treasure-d',
            colour: 'azure',
            age: 100,
            cost_at_auction: '1001.00',
            shop: 'shop-d'
          },
          {
            treasure_name: 'treasure-b',
            colour: 'gold',
            age: 13,
            cost_at_auction: '500.00',
            shop: 'shop-f'
          },
          {
            treasure_name: 'treasure-f',
            colour: 'onyx',
            age: 56,
            cost_at_auction: '0.01',
            shop: 'shop-e'
          },
          {
            treasure_name: 'treasure-h',
            colour: 'carmine',
            age: 13,
            cost_at_auction: '6.90',
            shop: 'shop-h'
          },
          {
            treasure_name: 'treasure-u',
            colour: 'khaki',
            age: 3,
            cost_at_auction: '3.99',
            shop: 'shop-i'
          },
          {
            treasure_name: 'treasure-e',
            colour: 'onyx',
            age: 10865,
            cost_at_auction: '99999.99',
            shop: 'shop-a'
          },
          {
            treasure_name: 'treasure-n',
            colour: 'magenta',
            age: 13,
            cost_at_auction: '6.99',
            shop: 'shop-j'
          },
          {
            treasure_name: 'treasure-i',
            colour: 'burgundy',
            age: 11,
            cost_at_auction: '18.99',
            shop: 'shop-k'
          },
          {
            treasure_name: 'treasure-c',
            colour: 'gold',
            age: 13,
            cost_at_auction: '15.99',
            shop: 'shop-c'
          },
          {
            treasure_name: 'treasure-r',
            colour: 'silver',
            age: 89,
            cost_at_auction: '8.99',
            shop: 'shop-j'
          },
          {
            treasure_name: 'treasure-j',
            colour: 'mikado',
            age: 504,
            cost_at_auction: '2340.99',
            shop: 'shop-b'
          },
          {
            treasure_name: 'treasure-g',
            colour: 'carmine',
            age: 65,
            cost_at_auction: '0.59',
            shop: 'shop-g'
          },
          {
            treasure_name: 'treasure-l',
            colour: 'cobalt',
            age: 77,
            cost_at_auction: '6.99',
            shop: 'shop-d'
          },
          {
            treasure_name: 'treasure-p',
            colour: 'turquoise',
            age: 13,
            cost_at_auction: '987.99',
            shop: 'shop-h'
          },
          {
            treasure_name: 'treasure-m',
            colour: 'burgundy',
            age: 77,
            cost_at_auction: '5.99',
            shop: 'shop-f'
          },
          {
            treasure_name: 'treasure-o',
            colour: 'saffron',
            age: 13,
            cost_at_auction: '78.99',
            shop: 'shop-g'
          },
          {
            treasure_name: 'treasure-k',
            colour: 'magenta',
            age: 13,
            cost_at_auction: '23.99',
            shop: 'shop-i'
          },
          {
            treasure_name: 'treasure-q',
            colour: 'magenta',
            age: 1,
            cost_at_auction: '60.99',
            shop: 'shop-a'
          },
          {
            treasure_name: 'treasure-s',
            colour: 'silver',
            age: 9,
            cost_at_auction: '12.99',
            shop: 'shop-e'
          },
          {
            treasure_name: 'treasure-t',
            colour: 'mikado',
            age: 13,
            cost_at_auction: '41.99',
            shop: 'shop-k'
          },
          {
            treasure_name: 'treasure-v',
            colour: 'ivory',
            age: 3,
            cost_at_auction: '78.99',
            shop: 'shop-c'
          },
          {
            treasure_name: 'treasure-w',
            colour: 'silver',
            age: 13,
            cost_at_auction: '60.99',
            shop: 'shop-b'
          },
          {
            treasure_name: 'treasure-x',
            colour: 'cobalt',
            age: 234,
            cost_at_auction: '7.99',
            shop: 'shop-d'
          },
          {
            treasure_name: 'treasure-y',
            colour: 'saffron',
            age: 54,
            cost_at_auction: '2.99',
            shop: 'shop-e'
          },
          {
            treasure_name: 'treasure-z',
            colour: 'ivory',
            age: 90,
            cost_at_auction: '48.99',
            shop: 'shop-f'
          }
        ];
        const shopRef = {
            'shop-b': 1,
            'shop-d': 2,
            'shop-e': 3,
            'shop-f': 4,
            'shop-g': 5,
            'shop-h': 6,
            'shop-i': 7,
            'shop-a': 8,
            'shop-j': 9,
            'shop-k': 10,
            'shop-c': 11
        } 
        const expectedFormattedTreasures = [
            [ 'treasure-a', 'turquoise', 200, '20.00', 1 ],
            [ 'treasure-d', 'azure', 100, '1001.00', 2 ],
            [ 'treasure-b', 'gold', 13, '500.00', 4 ],
            [ 'treasure-f', 'onyx', 56, '0.01', 3 ],
            [ 'treasure-h', 'carmine', 13, '6.90', 6 ],
            [ 'treasure-u', 'khaki', 3, '3.99', 7 ],
            [ 'treasure-e', 'onyx', 10865, '99999.99', 8 ],
            [ 'treasure-n', 'magenta', 13, '6.99', 9 ],
            [ 'treasure-i', 'burgundy', 11, '18.99', 10 ],
            [ 'treasure-c', 'gold', 13, '15.99', 11 ],
            [ 'treasure-r', 'silver', 89, '8.99', 9 ],
            [ 'treasure-j', 'mikado', 504, '2340.99', 1 ],
            [ 'treasure-g', 'carmine', 65, '0.59', 5 ],
            [ 'treasure-l', 'cobalt', 77, '6.99', 2 ],
            [ 'treasure-p', 'turquoise', 13, '987.99', 6 ],
            [ 'treasure-m', 'burgundy', 77, '5.99', 4 ],
            [ 'treasure-o', 'saffron', 13, '78.99', 5 ],
            [ 'treasure-k', 'magenta', 13, '23.99', 7 ],
            [ 'treasure-q', 'magenta', 1, '60.99', 8 ],
            [ 'treasure-s', 'silver', 9, '12.99', 3 ],
            [ 'treasure-t', 'mikado', 13, '41.99', 10 ],
            [ 'treasure-v', 'ivory', 3, '78.99', 11 ],
            [ 'treasure-w', 'silver', 13, '60.99', 1 ],
            [ 'treasure-x', 'cobalt', 234, '7.99', 2 ],
            [ 'treasure-y', 'saffron', 54, '2.99', 3 ],
            [ 'treasure-z', 'ivory', 90, '48.99', 4 ]
        ];
        expect(formatTreasureData(treasureData, shopRef)).toEqual(expectedFormattedTreasures);
    });
    test('The original input of treasureData is not mutated.', () => {
        const treasureData = [
            {
                treasure_name: 'treasure-o',
                colour: 'saffron',
                age: 13,
                cost_at_auction: '78.99',
                shop: 'shop-g'
            },
            {
                treasure_name: 'treasure-k',
                colour: 'magenta',
                age: 13,
                cost_at_auction: '23.99',
                shop: 'shop-i'
            }
        ];
        const shopRef = {
            'shop-g': 5,
            'shop-i': 7
        }
        const treasureDataCopy = [
            {
                treasure_name: 'treasure-o',
                colour: 'saffron',
                age: 13,
                cost_at_auction: '78.99',
                shop: 'shop-g'
            },
            {
                treasure_name: 'treasure-k',
                colour: 'magenta',
                age: 13,
                cost_at_auction: '23.99',
                shop: 'shop-i'
            }
        ];
        formatTreasureData(treasureData, shopRef);
        expect(treasureData).toEqual(treasureDataCopy);
    });
});


