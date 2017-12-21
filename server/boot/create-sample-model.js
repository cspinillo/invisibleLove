module.exports = function(app) {
    var Product = app.models.product;
    var Whiskey = app.models.whiskey;
    var whiskeyList;
// //     app.dataSources.AdminDB.automigrate('store', function(err) {
// //       if (err) throw err;
// //
// //       app.models.store.create([{
// //         name: 'Bottle Rocket',
// //         city: 'NYC',
// //         state: 'NY',
// //         street: '5 W 19th St',
// //         zip: 10011,
// //         phone:1112223333
// //   }], function(err, stores) {
// //         if (err) throw err;
// //
// //         console.log('Store created: \n', stores);
// //       });
// //   }),
// //   app.dataSources.AdminDB.automigrate('flavor', function(err) {
// //     if (err) throw err;
// //
// //     app.models.flavor.create([{
// //       name: 'Corn'
// //     }, {
// //       name: 'Salt'
// //     }, {
// //       name: 'Wheat',
// //     },{
// //         name: 'Rye'
// //     },{
// //         name: 'Malt'
// //     },{
// //         name: 'Fruit'
// //   }], function(err, flavors) {
// //       if (err) throw err;
// //
// //       console.log('Flavors created: \n', flavors);
// //     });
// // }),
// // app.dataSources.AdminDB.automigrate('whiskey', function(err) {
// //   if (err) throw err;
// //
// //   app.models.whiskey.create([{
// //     type: 'Bourbon'
// //   }, {
// //     type: 'Canadian'
// //   }, {
// //     type: 'Scotch',
// //   },{
// //       type: 'Irish'
// //   },{
// //       type: 'Rye'
// //   },{
// //       type: 'Japanese'
// //   },{
// //       type: 'Something Else'
// // }], function(err, whiskey) {
// //     if (err) throw err;
// //
// //     console.log('Whiskey Types created: \n', whiskey);
// //   });
// // });
  app.dataSources.AdminDB.automigrate('product', function(err) {
    Whiskey.find(function(err,whiskeys){
        console.log("Whiskey Type",whiskeys[0].type)
    })

    if (err) throw err;
    Product.create([{
      name: 'Knob Creek',
      sku:  '1234569683',
      craft: true,
      price: 12.23,
      age: 15,
      smoke: false,
      mondo: true,
      featured: false,
      description: "Bree's favorite whiskey",
      shelfposition: 15,
      whiskeyId: {
         
      }
  }], function(err, products) {
      if (err) throw err;

      console.log('Product created: \n', products);
    });
    });
}
