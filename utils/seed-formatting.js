exports.formatShopData = (shopData) => {
    //console.log(shopData, '<<< shopData')
    const formattedShops = shopData.map((shop) => [shop.shop_name, shop.owner, shop.slogan]);
    //console.log(formattedShops, '<<<formattedShops')
    return formattedShops;
};


exports.createShopRef = (shopRows) => {
    //console.log(shopRows, '<<<shopRows')
    const ref = {};
    shopRows.forEach((shopRow) => {
        ref[shopRow.shop_name] = shopRow.shop_id;
    });
    //console.log('THIS IS THE REF', ref);
    //
    return ref;
};


exports.formatTreasureData = (treasureData, shopRef) => {
    //console.log(shopRef, 'shopref')
    //console.log(treasureData, '<<< treasureDATA');
    if (Object.keys(shopRef).length === 0) {
        return 'shopRef is empty; cannot format treasure data.'
    } else {
    const formattedTreasures = treasureData.map((treasure) => {
        const formattedTreasure = [
            treasure.treasure_name, 
            treasure.colour, 
            treasure.age,
            treasure.cost_at_auction, 
            shopRef[treasure.shop],
        ];
        //console.log(formattedTreasures, '<<< formattedTreasures');
        return formattedTreasure;
    });
    //console.log(formattedTreasures, '<<< formatted Treasures');
    return formattedTreasures;
    }
};

