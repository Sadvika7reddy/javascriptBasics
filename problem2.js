let inventory=require('./inventory.js');
function problem2(infom){
    let l=infom.length;
    console.log(`Last car is a ${infom[l-1].car_make} ${infom[l-1].car_model}`)

}
problem2(inventory)