// get all treasures available
const { selectTreasures } = require('../models/treasures.models');

exports.getTreasures = (request, response, next) => {
    console.log(request.query, '<<< request.query');
    const query = request.query;
    selectTreasures(query).then((treasures) => {
        response.status(200).send({ treasures: treasures });
    });
}
