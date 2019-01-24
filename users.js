exports.seed = function seed( knex, Promise ) {

    let tableName = 'users';

    let rows = [

        // You are free to add as many rows as you feel like in this array. Make sure that they're an object containing the following fields:
        {
            name: 'Shreyansh Pandey',
            username: 'labsvisual',
            password: 'password',
            email: 'me@isomr.co',
            
        },
        {
            name :"ramu",
            username:"ramu098",
            password:"098",
            email:"ramu@gmail.com"
        }

    ];

    return knex( tableName )
        // Empty the table (DELETE)
        .del()
        .then( function() {
            return knex.insert( rows ).into( tableName );
        });

}; 