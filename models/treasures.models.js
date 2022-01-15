const { response } = require('../app')
const db = require('../db/index')

exports.selectTreasures = (query) => {
    console.log(query.sort_by, '<<< query in the model');
    let order_by_column = '';
    if (query.sort_by === undefined) {
        order_by_column = 'age';
    } else {
        order_by_column = query.sort_by;
    }
    return db.query(`SELECT * FROM treasures ORDER BY ${order_by_column} ASC;`)
        .then(result => {
            //console.log(result.rows, '<<<ROWS');
            const treasures = result.rows;
            return treasures;
        });   
}

/* exports.selectHouseById = (house_id) => {
  return db
    .query('SELECT * FROM houses WHERE house_id = $1;', [house_id])
    .then((result) => result.rows[0]);
}; */