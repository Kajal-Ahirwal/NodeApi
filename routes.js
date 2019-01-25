const knex = require("./knex");
const routes=[
    {
        method: 'GET',
        path: '/{ramu}',
        handler: (request, h) => {

            return `Hello, ${request.params.ramu}!`;
        }
    },
    {
        method: 'GET',
        path: '/hello',
        handler: (request, h) => {

            return h.file('./public/hello.html');
        }
    },
    {
        method: 'GET',
        path:'/allusers',
        handler:async(request,h)=>{
            let pr = (resolve,reject) => {
                knex("users").select("name","username","email")
                    .then(result)=>{
                        return resolve(h.response(result));
                    })
                    .catch((error)=>{
                        //console.log(error);
                        return reject(h.response(error));
                    });
            }
            return new Promise(pr);
        }
        
    },
   
    {
        path:'/createuser',
        method:'POST',
        handler: async( request, h ) =>{
            let pr = (resolve,reject) => {
                return knex.insert({
                    name:request.payload.name,
                    username:request.payload.username,
                    email:request.payload.email,
                    password:request.payload.password
                
                }).into('users').then((result)=>{
                        return resolve(h.response(request.payload));
                    })
                    .catch((error)=>{
                        //console.log(error);
                        return reject(h.response(error));
                    });
                }
            return new Promise(pr);
            }
    },
    {
        path:'/update/{userid}',
        method:'PUT',
        handler: async(request, h) =>{
            const {userid} = request.params;
            // console.log(userid);
            // console.log(request.params);
            // console.log(request.payload);
            let pr = (resolve,reject) => {

                return knex('users').where({
                
                    id:userid,
                
                }).update({

                    name:request.payload.name,
                    username:request.payload.username,
                    email:request.payload.email,
                    password:request.payload.password
                    
                }).then((result)=>{
                    return resolve(h.response(request.payload));
                })
                .catch((error)=>{
                    //console.log(error);
                    return reject(h.response(error));
                });
            }
        return new Promise(pr); 
        }
    },
    {
        path:'/deleteuser/{id}',
        method:'DELETE',
        handler: async(request, h) =>{
            const {id}=request.params;
            let pr = (resolve,reject) => {


            return knex('users').where({
                
                    id:id,
                
                }).delete({
                    id:id
                    
                }).then((result)=>{
                    return resolve(h.response(request.payload));
                })
                .catch((error)=>{
                    //console.log(error);
                    return reject(h.response(error));
                });
            }
        return new Promise(pr); 
        }

},
      
]
module.exports = routes