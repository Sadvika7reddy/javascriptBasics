let inventory=require('./inventory.js');

function problem4(inventory){
    let obj=[];
    for(var i=0;i<inventory.length;i++){
        obj[i]=inventory[i].car_year;

    }
    console.log(obj);
}
problem4(inventory);